'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import Image from "next/image";


const Header = () => {
    const pathname = usePathname();

  return (
    <>
        <header className="flex items-center justify-between container mx-auto absolute inset-x-0 w-full pt-20">
            <div>
                <Link href="/">
                    <Image src="../logo.svg" width="100" height="100" alt="Ajaj Rajguru - logo" />    
                </Link>
            </div>
            <nav>
                <ul className="flex items-center gap-7">
                    <li>
                        <Link href="/" className={`text-3xl ${pathname === '/' ? 'text-textColor opacity-100' : 'opacity-30'}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={`text-3xl ${pathname === '/about' ? 'text-textColor opacity-100' : 'opacity-30'}`}>About</Link>
                    </li>
                    <li>
                        <Link href="/posts" className={`text-3xl ${pathname === '/posts' ? 'text-textColor opacity-100' : 'opacity-30'}`}>Blogs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header