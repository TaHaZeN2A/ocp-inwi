"use client";
import { useNewPcap } from "@/features/pcaps/hooks/use-new-pcap";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useGetPcaps } from "@/features/pcaps/api/use-get-pcaps";
 
import { useEffect, useState } from "react";


const PcapsPage = () => {
    const [data, setData] = useState<
      { id: number; Name: string; Uploadthing_url: string; Created_At: string }[]
    >([]);
  
    const newPcap = useNewPcap();
    const pcapQuery = useGetPcaps();
    const pcaps = pcapQuery.data?.data || []; // Ensure pcaps is an array
  
    useEffect(() => {
      if (pcapQuery.data) {
        setData(pcapQuery.data.data);
      }
    }, [pcapQuery.data]);
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 mt-24">
            <Card className="border-none drop-shadow-sm">
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
             
                <DataTable columns={columns} data={pcaps} onDelete={()=>{}} filterKey="name" disabled={false}/>
                
             </CardContent>
            </Card>
        </div>
    )
};
export default PcapsPage;