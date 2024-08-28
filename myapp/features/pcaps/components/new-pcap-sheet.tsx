import {
    Sheet,
    SheetHeader,
    SheetTitle,
    SheetContent,
    SheetDescription,
} from "@/components/ui/sheet";
import { useNewPcap } from "../hooks/use-new-pcap";
import { PcapForm } from "./pcap-form";
import { insertPcapSchema } from "@/database/schema";
import { z } from "zod";
import { useCreatePcap } from "../api/use-create-pcap";

const formSchema = insertPcapSchema.pick({
    name: true,
    Uploadthing_url: true,
    file_size: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewPcapSheet = () => {
    const {isOpen, onClose} = useNewPcap();
    const mutation = useCreatePcap();

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    };

 return (
    <Sheet open ={isOpen} onOpenChange={onClose}>
        <SheetContent> 
         <SheetHeader>
            <SheetTitle> New Pcap </SheetTitle>
            <SheetDescription> Upload a new pcap file </SheetDescription>
         </SheetHeader>
         <PcapForm onSubmit={onSubmit}  disabled={mutation.isPending}  defaultValues={{
            name:"",
            Uploadthing_url:"",
            file_size:0,
         }} /> 
        </SheetContent>
    </Sheet>
 )
};