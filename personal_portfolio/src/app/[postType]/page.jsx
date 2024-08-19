// app/[postType]/page.js

import { getCustomPost } from '../../lib/wordpress';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import ContentRenderer from '../../lib/ContentRenderer';
import Link from 'next/link';
import Image from 'next/image';


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/elements/ui/card"
  

const CustomTypes = async ({ params }) => {
    const posts = await getCustomPost(params.postType);

    return (
        <section className='fade-in'>
            <ul className="">
                {posts.map((post, idx) => (
                    <li key={idx} className='mb-5'>
                        <h2>
                            <ContentRenderer>
                                {post.title.rendered}
                            </ContentRenderer>
                        </h2>

                        <ContentRenderer>
                            {post?.content?.rendered}
                        </ContentRenderer>

                    </li>
                ))}
            </ul>
<div className="grid grid-cols-3 gap-5">

            <Link
      href=''
      className=
        "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8 hover:bg-accent/75 transition-all">
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center">
          <Image
            className="h-full w-full object-cover"
            src=""
            alt=""
            width={400}
            height={200}
          />
        </div>
        <div
          className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex blanditiis ipsa dolores quaerat! Dolores.</div>
        <div
          className="text-sm"
        >Excerpt</div>
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs">
          <p>test</p>
          <p>Date</p>
        </div>
      </div>
    </Link>
</div>



        </section>
    );
};

export default CustomTypes;
