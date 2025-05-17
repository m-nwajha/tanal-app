import { NextResponse } from 'next/server';
import connectMongodb from '@/config/mongodb';
import { withApiKeyProtection } from '@/middlewares/apiKey';
import OurServices from '@/models/ourServices';

// This is a Next.js API route that handles GET and POST requests for "Our Services" data.
async function getHandler(req) {
  await connectMongodb();
  const data = await OurServices.findOne();
  return NextResponse.json(data);
}

// This function handles POST requests to add a new service to the "Our Services" collection.
async function postHandler(req) {
  await connectMongodb();

  const body = await req.json();

  let doc = await OurServices.findOne();

  if (!doc) {
    doc = await OurServices.create({
      OUR_SERVICES: [{ ...body, id: 1 }],
    });
    return NextResponse.json({
      message: 'Created with first service',
      data: doc,
    });
  }

  const lastId = doc.OUR_SERVICES.reduce(
    (max, item) => (item.id > max ? item.id : max),
    0
  );

  doc.OUR_SERVICES.push({ ...body, id: lastId + 1 });
  await doc.save();

  return NextResponse.json({ message: 'Service added', data: doc });
}

export const GET = withApiKeyProtection(getHandler);
export const POST = withApiKeyProtection(postHandler);
