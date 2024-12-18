export async function createGoalCompletion(goalId: string) {

  const apiUrl = import.meta.env.VITE_API_URL || '/api';

  await fetch(`${apiUrl}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
