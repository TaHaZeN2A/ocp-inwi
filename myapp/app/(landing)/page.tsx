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
  {/* <Image src="@\public\expanding social network GIF by Matthew Butler - Find & Share on GIPHY.gif" width={20} height={20} alt={"network"}></Image> */}
  <Button onClick={onOpen}>
    Upload Your First Pcap
   </Button>


  
  </div>
)
}
