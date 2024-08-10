import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');

  const response = await fetch('https://api.linkedin.com/v2/recommendations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.error('Error fetching recommendations');
  }
}
