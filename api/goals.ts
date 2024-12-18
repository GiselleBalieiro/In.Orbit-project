import { createGoal } from "../server/src/functions/create-goal";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, desiredWeeklyFrequency } = req.body;

      await createGoal({ title, desiredWeeklyFrequency });

      return res.status(201).json({ message: "Goal created successfully!" });
    } catch (error) {
      console.error("Error creating goal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(405).json({ error: "Method Not Allowed" });
}