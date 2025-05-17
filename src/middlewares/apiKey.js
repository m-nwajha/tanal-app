// Import NextRequest.
import { NextResponse } from 'next/server';

// Import API key
import { API_KEY } from '@/config/API';

// handler to validate the API key
export const validateApiKey = req => {
  const key = req.headers.get('x-api-key');
  return key === API_KEY;
};

export const withApiKeyProtection = handler => {
  return async function (req) {
    const isValid = validateApiKey(req);

    // If the API key is invalid, return a 401 response
    if (!isValid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // If the API key is valid, call the handler and return its response
    const response = await handler(req);
    return response; // Ensure the response is returned
  };
};
