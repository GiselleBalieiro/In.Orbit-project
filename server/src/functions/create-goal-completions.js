"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoalCompletion = createGoalCompletion;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../db");
const schema_1 = require("../db/schema");
const dayjs_1 = __importDefault(require("dayjs"));
async function createGoalCompletion({ goalId, }) {
    const firstDayOfWeek = (0, dayjs_1.default)().startOf("week").toDate();
    const lastDayOfWeek = (0, dayjs_1.default)().endOf("week").toDate();
    const goalCompletionCounts = db_1.db.$with("goal_completion_counts").as(db_1.db
        .select({
        goalId: schema_1.goalCompletions.goalId,
        completionCount: (0, drizzle_orm_1.count)(schema_1.goalCompletions.id).as("completionCount"),
    })
        .from(schema_1.goalCompletions)
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.gte)(schema_1.goalCompletions.createdAt, lastDayOfWeek), (0, drizzle_orm_1.lte)(schema_1.goalCompletions.createdAt, lastDayOfWeek), (0, drizzle_orm_1.eq)(schema_1.goalCompletions.goalId, goalId)))
        .groupBy(schema_1.goalCompletions.goalId));
    const result = await db_1.db
        .with(goalCompletionCounts)
        .select({
        desiredWeeklyFrequency: schema_1.goals.desiredWeeklyFrequency,
        completionCount: (0, drizzle_orm_1.sql /*sql*/) `
        COALESCE(${goalCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
        .from(schema_1.goals)
        .leftJoin(goalCompletionCounts, (0, drizzle_orm_1.eq)(goalCompletionCounts.goalId, schema_1.goals.id))
        .where((0, drizzle_orm_1.eq)(schema_1.goals.id, goalId))
        .limit(1);
    const { completionCount, desiredWeeklyFrequency } = result[0];
    if (completionCount >= desiredWeeklyFrequency) {
        throw new Error("Goal already completed this week!");
    }
    const insertResult = await db_1.db
        .insert(schema_1.goalCompletions)
        .values({ goalId })
        .returning();
    const goalCompletion = result[0];
    return {
        goalCompletion,
    };
}
