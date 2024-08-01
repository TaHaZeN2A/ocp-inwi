'use client'
import { Label } from "@radix-ui/react-label";


import { Button } from "@/components/ui/button";
import { useNewPcap } from "@/features/pcaps/hooks/use-new-pcap";
import { toast } from "sonner";


export default function Home() {
  const {onOpen} = useNewPcap();
  const handleToastSuccess = () => {
    toast.success("Success! Your action was successful.");
  };

return (
  <div className="flex flex-col gap-y-2">
   <Label> Upload your Pcap file</Label>
  <Button onClick={onOpen}>
    add pcap
   </Button>
    <p>testing pipeline</p>

   <Button onClick={handleToastSuccess}>
        Show Success Toast
      </Button>
   
  
  </div>
)
}
