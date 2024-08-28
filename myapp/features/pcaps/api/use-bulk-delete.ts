import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";



type ResponseType = InferResponseType<typeof client.api.pcaps["bulk-delete"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.pcaps["bulk-delete"]["$post"]>["json"];

export const useBulkDeletePcaps  = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) =>{
           
            const response = await client.api.pcaps["bulk-delete"]["$post"]({json});
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Pcap Deleted successfully");
            queryClient.invalidateQueries({queryKey: ["pcaps"]});
        },
        onError: () =>{
            toast.error("Failed to create pcap");
        },
    }) ;
    return mutation;
};