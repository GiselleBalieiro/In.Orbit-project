import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoals } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goal-completion";
import { useState } from "react";

export function PendingGoals() {
  const queryClient = useQueryClient();
  const [ disableButton, setDisableButton ] = useState<boolean>(false)

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
    setDisableButton(false)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={disableButton}
            onClick={() => {
              setDisableButton(true)
              if(goal.completionCount >= goal.desiredWeeklyFrequency) {
                return;
              } else {
              handleCompleteGoal(goal.id)}}
            }
          >
            <Plus className="size-4 text-zinc-600"></Plus>
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
