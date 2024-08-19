'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "../../components/theme-toggle";


const Header = () => {
    const pathname = usePathname();

    const menuItem = [
        {
            menu: "Home",
            link: "/"
        },
        {
            menu: "About",
            link: "/about"
        },
        {
            menu: "Blogs",
            link: "/posts"
        },
        {
            menu: "Sectors",
            link: "/sectors"
        },
        // {
        //     menu: "Contact",
        //     link: "/contact"
        // },
    ]

    return (
        <>
            <header className="flex items-center justify-between container mx-auto sticky top-0 backdrop-blur-sm z-10 w-full py-10">
                <div>
                    <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-[4.5rem]">
                        {/* <Image src="../logo.svg" width="100" height="100" alt="Ajaj Rajguru - 
                        logo" /> */}
                        AJ
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center gap-7">
                        {menuItem.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.link} className={`text-3xl ${pathname === item.link ? 'opacity-100' : 'opacity-30'}`}>{item.menu}</Link>
                            </li>
                        ))}
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header