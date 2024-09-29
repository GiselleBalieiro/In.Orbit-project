import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoalCompletion } from "../../functions/create-goal-completions";
import z from "zod";

export const createCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/completions",
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (request) => {
      const { goalId } = request.body;

      await createGoalCompletion({
        goalId,
      });
    }
  );
};
