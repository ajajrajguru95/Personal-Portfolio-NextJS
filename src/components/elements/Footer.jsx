import Link from "next/link"

import { Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-20 bg-secondary">
      <div className="container flex items-center justify-center gap-20 flex-col">

        {/* Logo */}
        <div className="logo">
          <Link href="/" className="gradient-text font-semibold text-3xl md:text-[4.5rem] leading-[normal]">
            AJ
          </Link>
        </div>
        
        {/* Contact Links */}
        <ul className="flex gap-10">
          <li className="text-center flex flex-col gap-2">
            <h4 className="flex gap-4 items-center justify-center"><span className="gradient-text font-semibold uppercase text-3xl">Email</span> 📫</h4>
            <p className="font-medium"><a href="mailto:ajajrajguru95@gmail.com">ajajrajguru95@gmail.com</a></p>
          </li>
          <li className="text-center flex flex-col gap-2 px-8 border-l border-zinc-600 border-r border-solid">
            <h4 className="flex gap-4 items-center justify-center"><span className="gradient-text font-semibold uppercase text-3xl">Phone</span> ☎</h4>
            <p className="font-medium"><a href="tel:+917709997669">+917709997669</a></p>
          </li>
          <li className="text-center flex flex-col gap-2">
            <h4 className="flex gap-4 items-center justify-center"><span className="gradient-text font-semibold uppercase text-3xl">Location</span> 🏖</h4>
            <p className="font-medium">GOA</p>
          </li>
        </ul>

        {/* Message */}
        <h4 className='text-[2.5rem]'><span className="font-semibold">Thanks for Scrolling,</span> that&apos;s all folks.</h4>

        {/* Social */}
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