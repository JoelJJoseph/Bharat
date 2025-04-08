import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import * as jose from "jose"

// Define the user session type
export interface UserSession {
  id: string;
  email: string;
  role: string;
  name?: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10)
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword)
}

export function generateToken(user: UserSession): string {
  return sign(user, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): UserSession | null {
  try {
    return verify(token, JWT_SECRET) as UserSession
  } catch (error) {
    return null
  }
}

export function setAuthCookie(token: string): void {
  cookies().set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export function getAuthCookie(): string | undefined {
  return cookies().get("auth_token")?.value
}

export function removeAuthCookie(): void {
  cookies().delete("auth_token")
}

export function getCurrentUser(): UserSession | null {
  const token = getAuthCookie()
  if (!token) return null
  return verifyToken(token)
}

// Function for server components to check authentication
export async function getSession(): Promise<UserSession | null> {
  // First try the standard auth token from cookies
  const cookieStore = cookies()
  const token = cookieStore.get("auth_token")?.value || cookieStore.get("auth-token")?.value
  
  if (!token) {
    return null
  }
  
  try {
    // For backwards compatibility, first try with jose
    const secret = new TextEncoder().encode(JWT_SECRET)
    try {
      const verified = await jose.jwtVerify(token, secret)
      return verified.payload as UserSession
    } catch {
      // Fall back to jsonwebtoken if jose fails
      return verify(token, JWT_SECRET) as UserSession
    }
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}

// For testing purposes, this function will always return true
// In a real app, this would check if the user is authenticated as an admin
export async function isAdmin(): Promise<boolean> {
  // Always return true for development/testing
  return true;
  
  // In a real implementation, we would do something like:
  // const session = await getSession()
  // return session?.role === "admin"
}
