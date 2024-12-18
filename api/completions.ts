import { createGoalCompletion } from "../server/src/functions/create-goal-completions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { goalId } = req.body;

      await createGoalCompletion(goalId);

      return res.status(201).json({ message: "Goal completion created successfully!" });
    } catch (error) {
      console.error("Error creating goal completion:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(405).json({ error: "Method Not Allowed" });
}