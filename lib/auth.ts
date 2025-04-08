import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import type { UserSession } from "./models/user"

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

export function isAdmin(): boolean {
  const user = getCurrentUser()
  return user?.role === "admin"
}
