
import { SignIn, ClerkLoaded, ClerkLoading} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
export default function Page() {
  return (
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className="h-full lg:flex flex-col items-center justify-center pt-4">  
        <div className="text-center space-y-4 pt-16">
        <h1>Welcome Back</h1>
        </div>
        <ClerkLoaded>
        <SignIn path="/sign-in"/>
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground"/>
        </ClerkLoading>
    </div>
    <div className="h-full bg-blue-200 hidden lg:flex items-center justify-center">
        <h1>asdsad</h1>
    </div>
  </div>
  );
}