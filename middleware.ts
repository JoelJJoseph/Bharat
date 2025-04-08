import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/about", "/contact", "/resources", "/api/auth/login", "/api/auth/register"]
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // Admin routes
  const adminRoutes = ["/admin"]
  if (adminRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
      const { payload } = await jwtVerify(token, secret)
      
      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
    await jwtVerify(token, secret)
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
} 