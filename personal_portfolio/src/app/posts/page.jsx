'use client';
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Blogs = () => {
    const { data, error } = useSWR('/api/posts', fetcher);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
    // console.log(data);

  return (
    <>
        <ul className="blogs-wrapper">
            {data.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Blogs