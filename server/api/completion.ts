import fastify from "fastify";
import { createCompletionRoute } from "../src/http/routes/create-completion";

const app = fastify();

app.register(createCompletionRoute);

export default app;