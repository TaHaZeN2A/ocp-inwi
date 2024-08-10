import { Hono } from "hono";
import {db} from "@/database/drizzle";
import { insertPcapSchema, pcap_file } from "@/database/schema";
import {zValidator} from "@hono/zod-validator"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";


const app = new Hono()
.get('/',
  clerkMiddleware(),
  async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
      }
    const data = await db
    .select({
        id: pcap_file.id,
        Name: pcap_file.name,
        Uploadthing_url : pcap_file.Uploadthing_url,
        Created_At: pcap_file.createdAt,
    })
    .from(pcap_file)
    
  return c.json({ data });
})
.post("/", 
clerkMiddleware(),
zValidator("json", insertPcapSchema.pick({
  name: true,
  Uploadthing_url: true,
})), 
  async (c) => {
    const auth = getAuth(c);
    const values = c.req.valid("json");
    if(!auth?.userId){
      return c.json({error: "Unauthorized"}, 401);
    } 
    const [data] = await db.insert(pcap_file).values({
      userId: auth.userId,
      ...values,
    }).returning();

    return c.json({data});
})


export default app;