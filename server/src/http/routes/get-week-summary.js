"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekSummaryRoutes = void 0;
const get_week_summary_1 = require("../../functions/get-week-summary");
const getWeekSummaryRoutes = async (app) => {
    app.get("/summary", async () => {
        const { summary } = await (0, get_week_summary_1.getWeekSummary)();
        return { summary };
    });
};
exports.getWeekSummaryRoutes = getWeekSummaryRoutes;
