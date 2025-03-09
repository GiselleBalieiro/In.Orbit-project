"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalCompletions = exports.goals = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const cuid2_1 = require("@paralleldrive/cuid2");
exports.goals = (0, pg_core_1.pgTable)('goals', {
    id: (0, pg_core_1.text)('id')
        .primaryKey()
        .$defaultFn(() => (0, cuid2_1.createId)()),
    title: (0, pg_core_1.text)('title')
        .notNull(),
    desiredWeeklyFrequency: (0, pg_core_1.integer)('desired_weekly_frequency')
        .notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at', { withTimezone: true })
        .notNull()
        .defaultNow(),
});
exports.goalCompletions = (0, pg_core_1.pgTable)('goal_completions', {
    id: (0, pg_core_1.text)('id')
        .primaryKey()
        .$defaultFn(() => (0, cuid2_1.createId)()),
    goalId: (0, pg_core_1.text)('goal_id')
        .references(() => exports.goals.id)
        .notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at', { withTimezone: true })
        .notNull()
        .defaultNow(),
});
