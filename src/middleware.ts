import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth, auth as authMiddleware } from "@/auth";

// Combined Middleware
export async function middleware(request: NextRequest) {


  const session = await auth();
  const user:any = session?.user;
  const path = request.nextUrl.pathname;

  const isAdminPath = path.startsWith('/admin');





  if (isAdminPath && (!user || user.role !== 'admin')) {
  
    return NextResponse.redirect(new URL('/test/not-admin', request.nextUrl));
  }


  return NextResponse.next();
}

// Configuration for Middleware
export const config = {
  matcher: [
    
    '/admin/:path*', // Match all admin routes

  ],
};
