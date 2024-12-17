import fastify from "fastify";
import { createGoalRoute } from "../src/http/routes/create-goal";

const app = fastify();

app.register(createGoalRoute);

export default app;