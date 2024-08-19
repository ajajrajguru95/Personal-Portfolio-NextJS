'use client';
import useSWR from "swr";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Blogs = ({params, searchParams}) => {
    // console.log(searchParams.limit);
    const [limit, setLimit] = useState(searchParams.limit || 10);
    const [skip, setSkip] = useState(searchParams.skip || 0);
    const { data, error } = useSWR(`/api/posts?limit=${limit}&skip=${skip}`, fetcher);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
    // console.log(data);

    const {posts, totalCount, countLimit, countSkip} = data;


    const updateLimit = () => {
        setLimit(15);         
    }

    const handleNext = () => {
        setSkip(skip + limit);
    }

    const handlePrev = () => {
        setSkip(skip - limit);
    }

    // console.log({totalCount}, {countLimit}, {countSkip});
    

  return (
    <>
        <section className="fade-in">
        <ul className="blogs-wrapper mb-20 min-h-40">
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
            </ul>

            {/* {Array.from({ length: totalCount }, (_, i) => i + 1).map((number) => (
                <span key={number}>{number}</span>
            ))} */}

            <button onClick={updateLimit}>UpdateLimit</button>

            <div className="flex gap-5">

            <button className="flex bg-black">Limit {countLimit}</button>

            <button onClick={handlePrev} disabled={skip === 0}>Prev Page</button>

            <div>Total Count: {totalCount}</div>

            <button onClick={handleNext} disabled={skip >= totalCount - limit}>Next Page</button>

            </div>
            </section>

        
    </>
  )
}

export default Blogs