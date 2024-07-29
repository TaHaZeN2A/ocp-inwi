import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetPcaps = () => {
    const query = useQuery({
        queryKey: ["pcaps"],
        queryFn: async () => {
           const response = await client.api.pcaps.$get();
           
        if (!response.ok) {
            throw new Error("failed to fetch pcaps");
        }
        
        const data = await response.json();
        return data;
    },
    });
    return query;
}