import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
type ResponseType = InferResponseType<typeof client.api.pcaps.$post>;
type RequestType = InferRequestType<typeof client.api.pcaps.$post>["json"];

export const useCreatePcap = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) =>{
            if (!json.name || !json.Uploadthing_url) {
                throw new Error("Name and uploadthingUrl must not be null");
            }
            const response = await client.api.pcaps.$post({json});
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Pcap created successfully");
            queryClient.invalidateQueries({queryKey: ["pcaps"]});
        },
        onError: () =>{
            toast.error("Failed to create pcap");
        },
    }) ;
    return mutation;
};