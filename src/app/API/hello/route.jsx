import connectMongodb from '@/config/mongodb';
import hello from '@/models/hello';
<<<<<<< HEAD
import { withApiKeyProtection } from '@/middlewares/apiKey';
=======
import { withApiKeyProtection } from '@/utils/apiKey';
>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const { title, description } = await request.json();
//   await connectMongodb();
//   await home.create({
//     title,
//     description
//   });
//   return NextResponse.json(
//     {
//       message: 'Data created successfully'
//     },
//     {
//       status: 201
//     }
//   );
// }

<<<<<<< HEAD
=======

>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
// export async function GET() {
//     await connectMongodb();
//     const homes = await home.find();
//     return NextResponse.json({ homes }, { status: 200 });
// }

async function handlerPost(req) {
  const { title, description } = await req.json(); // FIXED

  await connectMongodb();

  await hello.create({
    title,
<<<<<<< HEAD
    description,
=======
    description
>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
  });

  return NextResponse.json({ message: 'Success' }, { status: 201 });
}

export const POST = withApiKeyProtection(handlerPost);

<<<<<<< HEAD
=======








>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
async function handler(req) {
  await connectMongodb();
  const hellos = await hello.find();
  // Ensure that this handler always returns a response
  return NextResponse.json({ hellos }, { status: 200 });
}

<<<<<<< HEAD
export const GET = withApiKeyProtection(handler);
=======
export const GET = withApiKeyProtection(handler);
>>>>>>> 461fbe05ca982e46f1a4b1041765e200c9d02374
