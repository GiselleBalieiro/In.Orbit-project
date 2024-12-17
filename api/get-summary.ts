import fastify from "fastify";
import { getWeekSummaryRoutes } from "../server/src/http/routes/get-week-summary";

const app = fastify();

app.register(getWeekSummaryRoutes);

export default app;