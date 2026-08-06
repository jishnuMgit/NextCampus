import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

function getDashboardPath(role?: string) {
  switch (role) {
    case "admin":
      return "/dashboard/management";
    case "teacher":
      return "/dashboard/teacher";
    case "student":
      return "/dashboard/student";
    case "parent":
      return "/dashboard/parent";
    default:
      return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  console.log("Middleware:", pathname);

  const authRoutes = ["/login", "/register", "/forgot-password"];

  // No token
  if (!token) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const { payload } = await jwtVerify(token, secret);

    console.log("Payload:", payload);

    const role = payload.role as string;
    const dashboardPath = getDashboardPath(role);

    // Already logged in -> redirect away from auth pages
    if (authRoutes.includes(pathname)) {
      if (dashboardPath) {
        return NextResponse.redirect(new URL(dashboardPath, req.url));
      }

      return NextResponse.next();
    }

    // Role protection
    if (
      pathname.startsWith("/dashboard/management") &&
      role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      pathname.startsWith("/dashboard/teacher") &&
      role !== "teacher"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      pathname.startsWith("/dashboard/student") &&
      role !== "student"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      pathname.startsWith("/dashboard/parent") &&
      role !== "parent"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT Error:", error);

    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/forgot-password"],
};