import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  // Get the auth token from cookies
  const authToken = request.cookies.get("x-auth-token");

  //   // Placeholder function for token validation
  // const validateAuthToken = (token) => {
  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //     return !!decoded;
  //   } catch (error) {
  //     return false;
  //   }
  // };

  // Check if X-AUTH-TOKEN is present and valid
  // if (!authToken || !validateAuthToken(authToken)) {
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
