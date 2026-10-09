import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const adminUsername = process.env.ADMIN_USERNAME
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminUsername || !adminPassword) {
    return NextResponse.json({ error: 'Admin login is not configured' }, { status: 503 })
  }

  const { username, password } = await request.json()

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('adminSession', 'authenticated', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8,
    path: '/',
  })
  return response
}
