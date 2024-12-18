import { getWeekSummary } from "../server/src/functions/get-week-summary";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const summary = await getWeekSummary();

      return res.status(200).json(summary);
    } catch (error) {
      console.error("Error fetching week summary:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}