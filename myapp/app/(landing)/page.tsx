'use client'
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useNewPcap } from "@/features/pcaps/hooks/use-new-pcap";
import Image from "next/image";


export default function Home() {
  const {onOpen} = useNewPcap();


return (
  <div className="flex flex-col gap-y-2">
   <Label> Upload your Pcap file</Label>
  <Button onClick={onOpen}>
    Upload Your First Pcap
   </Button>


  
  </div>
)
}
