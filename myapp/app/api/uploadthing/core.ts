import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
 
const handleAuth = () => {
    const {userId}  = auth();
    if (!userId) throw new Error("Unauthorized");
    return {userId};
}
 

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    pcap: f({"application/vnd.tcpdump.pcap": { maxFileSize: "1GB", maxFileCount: 1}})
    .middleware(()=> handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url); 
      console.log("file url", file.size); 

      return { uploadedBy: metadata.userId, url: file.url, size: file.size };
    }),

          
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;