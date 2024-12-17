import fastify from "fastify";
import { getPendingGoalsRoute } from "../server/src/http/routes/get-pending-goal";

const app = fastify();

app.register(getPendingGoalsRoute);

export default app;