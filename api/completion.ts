import fastify from "fastify";
import { createCompletionRoute } from "../server/src/http/routes/create-completion";

const app = fastify();

app.register(createCompletionRoute);

export default app;