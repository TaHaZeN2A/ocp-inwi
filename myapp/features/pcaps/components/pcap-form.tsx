"use client"
import {z } from "zod";
import { Trash } from "lucide-react";
import  { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { UploadButton } from "@/lib/uploadthing";
import { Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertPcapSchema } from "@/database/schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = insertPcapSchema.pick({
    name: true,
    Uploadthing_url: true,
    file_size: true,
});

type FormValues = z.input<typeof formSchema>;
type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
};

export const PcapForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled,
}: Props)=>{
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });
    const handleSubmit = (value: FormValues) => {
        onSubmit(value);
    };
    const handleDelete = () => {
        onDelete?.();
    };

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
            <FormField 
            name = "name"  
            control={form.control}
            render= {({field}) =>(
                <FormItem>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <FormControl>
                        <Input 
                        disabled={disabled}
                        placeholder="Name your Pcap"
                        {...field}
                        />                   
                    </FormControl>
                    <UploadButton endpoint="pcap" 
                        onClientUploadComplete={(res) => {
                            form.setValue("Uploadthing_url", res[0].url);
                            form.setValue("file_size", res[0].size);
                            toast.success("Pcap uploaded successfully");
                            
                     }}/>
                </FormItem>               
            )}
            />
            <Button className="w-full" disabled={disabled} >
                {id? "save change" : "create"}
            </Button>
            {!!id && <Button type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full"
            variant="primaryOutline">
                <Trash className="size-3 mr-3"/>
                Delete Pcap
            </Button>}
            </form>
        </Form>
    )
};
