import { NextResponse } from 'next/server';

export async function POST() {
  // NOTE: Created as a way to mock interacting with an api
  return NextResponse.json({ message: 'success' });
}
