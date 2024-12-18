import { getWeekPendingGoals } from "../server/src/functions/get-week-pending-gols";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { pendingGoals } = await getWeekPendingGoals();
      return res.status(200).json({ pendingGoals });
    } catch (error) {
      console.error("Error fetching pending goals:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(405).json({ error: "Method Not Allowed" });
}