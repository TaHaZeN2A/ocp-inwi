"use client";
import { useNewPcap } from "@/features/pcaps/hooks/use-new-pcap";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Plus } from "lucide-react"
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useGetPcaps } from "@/features/pcaps/api/use-get-pcaps";
 
import { Skeleton } from "@/components/ui/skeleton";
import { useBulkDeletePcaps } from "@/features/pcaps/api/use-bulk-delete";


const PcapsPage = () => {
    const DeletePcap = useBulkDeletePcaps();
    const newPcap = useNewPcap();
    const pcapQuery = useGetPcaps();
    const pcaps = pcapQuery.data?.data || [];
    
    const isDisabled = pcapQuery.isLoading || DeletePcap.isPending;
    
    if(pcapQuery.isLoading){
        return (
            <div className="max-w-screen-2xl mx-auto w-full pb-10 mt-24">
                <Card className="border-none drop-shadow-sm">
                    <CardHeader>
                        <Skeleton  className="h-8 w-48"/>
                     </CardHeader>
                     <CardContent>
                        <div className="h-[500px] w-full flex items-center justify-center">
                            <Loader2 className="size-6 text-slate-300 animate-spin"/>
                        </div>
                     </CardContent>
                </Card>
            </div>

        );
    }
  
    
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-7">
            <Card className="border-none drop-shadow-sm ]">
             <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Your Pcap List
                </CardTitle>
                <Button onClick={newPcap.onOpen} size='sm'>
                    <Plus className="size-4 mr-4"/>
                    Add New
                </Button>
             </CardHeader>
             <CardContent>
             
                <DataTable columns={columns} data={pcaps} onDelete={(row)=>{
                    const ids = row.map((r)=> r.original.id);
                    DeletePcap.mutate({ids});
                }} filterKey="Name" disabled={isDisabled}/>
                
             </CardContent>
            </Card>
        </div>
    )
};
export default PcapsPage;