'use client';
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());


const BlogPosts = ({params}) => {
    const { postID } = params;
    const { data, error } = useSWR(`/api/posts?postID=${postID}`, fetcher);
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;

    // console.log(postID);


  return (
    <>
        <div className="blogDetails">
          {data?.title && (
            <h1>{data.title}</h1>
          )}
        </div>
    </>
    
  )
}

export default BlogPosts
