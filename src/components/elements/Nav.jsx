
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../../components/theme-toggle";
import Link from "next/link"

const Nav = ({mobile}) => {
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
  return (
    <>
     <nav>
            <ul className="flex-col md:flex-row flex items-center gap-7">
                {menuItem.map((item, idx) => (
                    <li key={idx}>
                        <Link href={item.link} className={`text-3xl ${pathname === item.link ? 'opacity-100' : 'opacity-30'}`}>{item.menu}</Link>
                    </li>
                ))}
                {!mobile && (
                <li>
                    <ThemeToggle />
                </li>
                )}
            </ul>
        </nav>
    </>
  )
}

export default Nav