import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getPendingGoalsRoute } from "./routes/get-pending-goal";
import { getWeekSummaryRoutes } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getPendingGoalsRoute, { prefix: "/api" });
app.register(createGoalRoute, { prefix: "/api" });
app.register(createCompletionRoute, { prefix: "/api" });
app.register(getWeekSummaryRoutes, { prefix: "/api" });

if (process.env.NODE_ENV !== "production") {
  app
    .listen({ port: 3333 })
    .then(() => {
      console.log("HTTP server running locally on port 3333!");
    });
}

