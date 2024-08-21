'use client';
import Link from "next/link"
import Image from "next/image";
import Nav from "../elements/Nav";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../../components/theme-toggle";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../elements/ui/sheet";



const Header = () => {
    const [isMobile, setisMobile] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            setisMobile(window.innerWidth <= 768);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return (
        <>
            <header className="flex items-center justify-between sticky top-0 backdrop-blur-sm z-10 w-full py-10">
                <div className="flex flex-1 justify-between items-center container mx-auto">
                    <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold text-3xl md:text-[4.5rem] leading-normal">
                        {/* <Image src="../logo.svg" width="100" height="100" alt="Ajaj Rajguru - 
                        logo" /> */}
                        AJ
                    </Link>
                
                {!isMobile ? <Nav mobile={isMobile} /> : (
                    
                    <div className="mobile-nav pr-4 flex">
                        <Sheet>
                            <SheetTrigger className="relative m-0 p-0 bg-none border-0 cursor-pointer outline-none bg-white w-8 h-[0.12rem] before:content-[''] before:absolute before:block before:w-8 before:h-[0.12rem] before:bg-white before:left-4 before:top-[10px] after:content-[''] after:absolute after:block after:w-8 after:h-0.5 after:bg-white after:left-4 after:bottom-[10px] transition-all duration-200 linear">
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Are you absolutely sure? <ThemeToggle /></SheetTitle>
                                    <SheetDescription>
                                        <Nav mobile={isMobile} />
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                )}

            </div>

            </header>
        </>
    )
}

export default Header