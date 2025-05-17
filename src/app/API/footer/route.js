// Import NextResponse from next/server.
import { NextResponse } from 'next/server';

// Import connectMongodb.
import connectMongodb from '@/config/mongodb';


import { footerDB } from '@/mock/footer';

export async function GET() {
    // await connectMongodb();
    // const aboutData = await about.find();
    return NextResponse.json(footerDB, { status: 200 });
}
