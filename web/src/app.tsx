import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { EmptyGoal } from "./components/empty-goal";
import { Dialog } from "./components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      {(data?.total as any) > 0 ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  );
}
