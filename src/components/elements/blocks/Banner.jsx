"use client";
import React from 'react'
import DividerText from '../DividerText'
import Link from 'next/link'
import Image from 'next/image'

import FadeInWrapper from "../ui/FadeInWrapper";


const Banner = () => {



    return (
        <>
            <FadeInWrapper>
                <section className='home-banner flex flex-col md:flex-row pb-32 md:pb-[15rem] gap-10 container mx-auto items-center'>

                    <div className='flex-initial md:w-[60%] flex flex-col gap-10 items-baseline'>
                        <h1 className='font-normal text-[4rem] md:text-[6rem]'>
                            Howdy,👋🏻 I&apos;m <span className='gradient-text font-semibold'>Ajaj.</span>
                        </h1>
                        {/* <DividerText>Introduction</DividerText> */}

                        <h2 className='section-heading'>
                            Front end developer 👨🏻‍💻
                        </h2>

                        <p className='section-desc'>
                            I&apos;m <span className='gradient-text font-semibold'>Ajaj Rajguru</span>, accomplished Front-End Developer with expertise in front-end technologies. I excel at creating optimized, user-centric websites with a strong focus on design and detail. With proven leadership skills, I have a successful track record in team management and project delivery.
                        </p>

                        <Link href="/about" className="theme-btn">About Me</Link>

                    </div>
                    <div className='flex-initial w-[40%]'>
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
                                    href="/me-bg-1.png"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                        </div>
                    </div>
                </section>
                </FadeInWrapper>
        </>
    )
}

export default Banner