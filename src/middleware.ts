import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export function middleware(request: Request) {
  // METHOD 1
  // const regex = new RegExp('/api/*')
  // if(regex.test(request.url)) {}

  // METHOD 2
  // if(request.url.includes('/api/*')) {}

   const origin = request.headers.get("origin");
  console.log(origin);

  

  console.log('Middleware')
  console.log(request.method);
  console.log(request.url);

 

  return NextResponse.next();
}

// METHOD 3
export const config = {
  matcher: "/api/:path*",
};
