import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const transaction = await prisma.festival_transactions.create({
      data: {
        name: data.name,
        flat: data.flat,
        phone: data.phone,
        email: data.email,
        amount: data.amount,
        festival: data.festival,
      },
    });
    return NextResponse.json({ success: true, transaction });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 