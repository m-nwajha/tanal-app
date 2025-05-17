import { NextResponse } from 'next/server';
import connectMongodb from '@/config/mongodb';
import About from '@/models/about';
import { withApiKeyProtection } from '@/middlewares/apiKey';

async function handler(req) {
  await connectMongodb();
  const aboutData = await About.findOne();
  return NextResponse.json(aboutData);
}

export const GET = withApiKeyProtection(handler);

async function handlerPost(req) {
  const body = await req.json();

  await connectMongodb();
  await About.create(body);

  return NextResponse.json({ message: 'Created' }, { status: 201 });
}

export const POST = withApiKeyProtection(handlerPost);
