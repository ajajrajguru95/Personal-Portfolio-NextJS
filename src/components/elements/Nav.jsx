
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../../components/theme-toggle";
import Link from "next/link"

const Nav = ({ mobile, open }) => {
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
        // {
        //     menu: "Sectors",
        //     link: "/sectors"
        // },
        // {
        //     menu: "Contact",
        //     link: "/contact"
        // },
    ]

    const closeSheet = () => {
        if(mobile){
            setTimeout(() => {
                open(false);
            }, 500);
        }
    }

    return (
        <nav>
            <ul className="flex-col md:flex-row flex items-center pt-20 sm:pt-0 gap-8 sm:gap-7">
                {menuItem.map((item, idx) => (
                    <li key={idx}>
                        <Link href={item.link} onClick={closeSheet} className={`text-4xl sm:text-3xl relative after:content-[''] after:block after:absolute after:w-full after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 after:left-0 after:-bottom-2 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:linear hover:opacity-100 ${pathname === item.link ? 'opacity-100 after:scale-x-100' : 'opacity-30'}`}>{item.menu}</Link>
                    </li>
                ))}
                {!mobile && (
                    <li>
                        <ThemeToggle />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav