import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  // X-AUTH-TOKEN. Returns true/false
  const authToken = request.cookies.has("x-auth-token");

  // Implement a logic that'll check if the auth token is truly a valid token

  // Check if X-AUTH-TOKEN is present
  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

// You can come and add your own paths to protect
export const config = {
  matcher: [
    // "/",
    "/account/:path*",
    "/saved/:path*",
    "/orders/:path*",
  ],
};
