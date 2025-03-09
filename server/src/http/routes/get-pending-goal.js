"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPendingGoalsRoute = void 0;
const get_week_pending_gols_1 = require("../../functions/get-week-pending-gols");
const getPendingGoalsRoute = async (app) => {
    app.get("/pending-goals", async () => {
        const { pendingGoals } = await (0, get_week_pending_gols_1.getWeekPendingGoals)();
        return { pendingGoals };
    });
};
exports.getPendingGoalsRoute = getPendingGoalsRoute;
