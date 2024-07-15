'use client'
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { Label } from "@radix-ui/react-label";

export default function Home() {
return (
  <div className="flex flex-col gap-y-2">
   <Label> Upload your Pcap file</Label>
   <UploadButton endpoint="pcap"
   />
   
  
  </div>
)
}
