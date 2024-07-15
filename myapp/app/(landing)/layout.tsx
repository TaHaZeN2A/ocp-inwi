import { Header } from "@/components/header";
import { Footer } from "./footer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";


type Props={
    children: React.ReactNode;

}
const LandingLayout = ({children}:Props) => {
    return (
        <body>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)} />
        
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 flex flex-col items-center justify-center">
            {children}
            </main>
            <Footer/>
        </div>
        </body>
    );
};
export default LandingLayout;
