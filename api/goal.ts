import fastify from "fastify";
import { createGoalRoute } from "../server/src/http/routes/create-goal";

const app = fastify();

app.register(createGoalRoute);

export default app;