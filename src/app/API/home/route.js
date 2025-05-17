// Import Next.js.
import { NextResponse } from 'next/server';

// Import Config.
import connectMongodb from '@/config/mongodb';

// Import Models.
import Home from '@/models/home';

// Import Utils.
import { withApiKeyProtection } from '@/middlewares/apiKey';

async function handler(req) {
  await connectMongodb();
  const homeData = await Home.findOne();
  return NextResponse.json(homeData);
}

export const GET = withApiKeyProtection(handler);
