// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  
  console.log('Token:', token); // Debugging line to see the token
  console.log('Requested URL:', req.nextUrl.pathname); // Debugging line to see the requested path

  // Check if the user is trying to access a protected route
  if (!token && req.nextUrl.pathname.startsWith('/admin')) {
    console.log('Redirecting to login'); // Debugging line
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if not authenticated
  }

  return NextResponse.next(); // Allow the request to continue
}

// Specify the paths for which this middleware should run
export const config = {
  matcher: ['/admin/:path*'], // Protect all routes under /admin
};
