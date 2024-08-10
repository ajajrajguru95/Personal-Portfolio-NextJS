import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('postID');
  try {
    if (id) {
      // Fetch a single post by ID
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const post = await response.json();
      return NextResponse.json(post);
    } else {
      // Fetch a list of posts with a fixed limit of 10
      const response = await fetch('https://dummyjson.com/posts?limit=10');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return NextResponse.json(data.posts); // Return the posts array
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
