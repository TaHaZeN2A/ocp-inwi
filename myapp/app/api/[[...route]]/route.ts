import { Hono } from 'hono'
import { handle } from 'hono/vercel'
 
import pcaps from './pcaps'


export const runtime = 'edge'

const app = new Hono().basePath('/api')

// app.onError((err, c) =>{
//     if( err instanceof HTTPException){
//         return err.getResponse();
//     }
//     return c.json({error: "internal error"}, 500);
// })
const routes = app.route('/pcaps', pcaps );

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;