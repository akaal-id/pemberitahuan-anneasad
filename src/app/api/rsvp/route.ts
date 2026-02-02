import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await db.rsvp.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch RSVP data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, status, guests } = body;
    
    if (!name || !status) {
      return NextResponse.json({ error: 'Name and status are required' }, { status: 400 });
    }

    const newRsvp = await db.rsvp.add({ name, status, guests: guests || 1 });
    return NextResponse.json(newRsvp);
  } catch (error: any) {
    console.error("RSVP POST Error:", error);
    return NextResponse.json({ error: 'Internal Server Error', details: error?.message || 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await db.rsvp.delete(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await db.rsvp.update(Number(id), data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
