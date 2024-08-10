
import React from 'react'
import DividerText from '../DividerText'
import Link from 'next/link'
import Image from 'next/image'


const Banner = () => {


    return (
        <>
            <section className='home-banner flex py-[15rem] container mx-auto'>
                <div className='flex-initial w-[60%] flex flex-col gap-5 items-baseline'>
                    <h1 className='font-normal'>
                        Howdy, I'm <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold'>Ajaj</span>.
                    </h1>
                    {/* <DividerText>Introduction</DividerText> */}

                    <h2 className='section-heading'>
                        Front end developer
                    </h2>

                    <p className='section-desc'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet animi maxime, exercitationem recusandae fuga esse eligendi officia possimus labore fugiat?
                    </p>

                    <Link href="/about" className="theme-btn">About Me</Link>

                </div>
                <div className='flex-initial w-[40%] flex flex-col gap-12'>
                    <div className="blob-wrapper">
                    <svg id="blob-svg" viewBox="0 0 480 480">
  <defs>
    <clipPath id="blob">
      <path
        fill="#474bff"
        d="M441.5,288.5Q409,337,379,383Q349,429,294.5,445.5Q240,462,183.5,448.5Q127,435,94.5,389Q62,343,36,291.5Q10,240,27.5,184Q45,128,83,81Q121,34,180.5,30.5Q240,27,300,30Q360,33,401,78Q442,123,458,181.5Q474,240,441.5,288.5Z"
      />
    </clipPath>
  </defs>
  <image
    x="0"
    y="0"
    width="100%"
    height="100%"
    clipPath="url(#blob)"
    href="/me.png"
    preserveAspectRatio="xMidYMid slice"
  />
</svg>

                        <Image src="/me.png" width="300" height="300" alt='Myself' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner