import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    const redirectTo = `/api/linkedin/recommendations?token=${data.access_token}`;
    return NextResponse.redirect(redirectTo);
  } else {
    return NextResponse.error('Error getting access token');
  }
}
