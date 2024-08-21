import Link from "next/link"

import { Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-20 bg-secondary">
      <div className="container flex items-center justify-center gap-16 flex-col">
        <div className="logo">
            <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-3xl md:text-[4.5rem] leading-[normal]">
              AJ
            </Link>
        </div>
        <h4 className='text-[2.5rem]'><span className="font-semibold">Thanks for Scrolling,</span> that&apos;s all folks.</h4>
          <ul className="flex gap-8">
            <li>
              <Link href="https://www.linkedin.com/in/ajaj-rajguru-106a6086/" target="_blank">
                <Linkedin className="w-14 h-14" />
              </Link>
              </li>
            <li>
              <Link href="https://x.com/theAJajrajguru" target="_blank">
                <Twitter className="w-14 h-14" />
              </Link>
              </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer