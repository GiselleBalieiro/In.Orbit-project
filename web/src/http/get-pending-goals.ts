type PendingGoalsResponse = {  
        id: string;
        title: string;
        desiredWeeklyFrequency: number;
        completionCount: number;
}[]

export async function getPendingGoals (): Promise<PendingGoalsResponse> {

    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch (`${apiUrl}/pending-goals`)
    const data = await  response.json()

    return data.pendingGoals
}