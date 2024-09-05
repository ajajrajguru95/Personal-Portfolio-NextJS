import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='fade-in'>
      <div className="container mx-auto text-center min-h-[calc(100svh-350px)] flex flex-col items-center justify-center gap-12">
        {/* <h1><span className="gradient-text">Work In Progress</span> ✍🏻</h1> */}

        <section className='about-me sm:flex gap-20 mb-40'>
          <div className='flex-1'>
            <Image
              src="/aj-edit.jpg"
              alt='Ajaj'
              width={600}
              height={600}
              className="object-contain w-full h-[400px] sm:h-full xl:h-[700px]"
            />
          </div>
          <div className="flex-1 sm:relative grid place-content-center text-left gap-12 xl:pr-32 pt-10">

            <h1 className="sm:absolute sm:top-[3rem] sm:left-[-23rem] uppercase text-5xl sm:text-8xl xl:text-[10rem] tracking-wider gradient-text !bg-clip-border !text-white font-[700] p-3 sm:px-8 sm:py-2 text-center">About Me</h1>

            <p className='text-2xl sm:text-[1.6rem] leading-[1.5] flex flex-col gap-10'>Hey,

              <span>I’m Ajaj Rajguru, a Front-End Developer based in Goa 🌴 and a Computer Science graduate nice to meet you 👋. </span>

              <span>I describe myself as developer cum designer who loves coding, developing websites and believing in making a web a better place. I’m currently working full-time as a Senior Front-end Developer. I have an decade of experience working in web industry. </span>

              <span>In my spare time I like to solve Rubik cube and a wish to become a speedcuber one day 👑 apart from that i like to read books related to Personal Finance, Human Psychology... 📖</span>
            </p>

          </div>

        </section>

      </div>
    </div>
  )
}

export default About