import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)){
        auth().protect();
    }
    return NextResponse.next();
})

const isProtectedRoute = createRouteMatcher([
    "/",
    
  ]);

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};