// Import NextResponse from next/server.
import { NextResponse } from 'next/server';

// Import connectMongodb.
import connectMongodb from '@/config/mongodb';


import { ourProjects } from '@/mock/ourProjects';

export async function GET() {
    // await connectMongodb();
    // const aboutData = await about.find();
    return NextResponse.json(ourProjects, { status: 200 });
}
