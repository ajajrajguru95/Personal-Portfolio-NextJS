'use client';
import Image from "next/image"
import { useTheme } from "next-themes";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"

const Skills = () => {

    const { theme } = useTheme();

    

    const skillSet = [
        {
            skill: "HTML5",
            logo: "html5",
            content: "Proficient with HTML5 using its semantic syntax"
        },
        {
            skill: "CSS3",
            logo: "css",
            content: "Good experience with CSS3 and its features to handle the layout, design challenges and animations"
        },
        {
            skill: "Javascript",
            logo: "js",
            content: "Well versed with Javascript and ES6 to handle functionalities"
        },
        {
            skill: "React",
            logo: "react",
            content: "Proficient with React and its hooks"
        },
        {
            skill: "NextJS",
            logo: "nextjs",
            content: "Good Knowledge of NextJS and App Router"
        },

    ]


    return (
        <section className="py-10 bg-secondary">

            <div className="container mx-auto py-4 md:p-6 lg:p-12">

                <h2 className="text-[2.5rem] md:text-[3rem] pt-4 md:pt-8 pb-10 md:pb-20 font-medium">
                    What <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold'>Ajaj</span> do and his skillset.
                </h2>

                <div className="flex overflow-auto snap-mandatory snap-x md:snap-none md:grid md:grid-cols-5 lg:grid-cols gap-10">

                    {skillSet.map((skill, index) => (
                        <HoverCard key={index}>
                            <div className="flex items-center justify-center mb-4 bg-foreground cursor-pointer flex-[1_0_200px] md:flex-1 snap-start">
                            <HoverCardTrigger className="text-center flex flex-col gap-5 p-16">
                                <Image
                                    src={`/${skill.logo}.svg`}
                                    width={100}
                                    height={100}
                                    alt="Icons"
                                    style={{filter: theme === 'light' ? 'invert(1)' : 'none'}}
                                />
                                <h3 className="text-3xl font-semibold text-background">{skill.skill}</h3>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-full">
                                {skill.content}
                            </HoverCardContent>
                            </div>
                        </HoverCard>
                    ))}


                </div>
            </div>

            {/* <HoverCard>
                <HoverCardTrigger>Hover</HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
                </HoverCardContent>
            </HoverCard> */}

        </section>
    )
}

export default Skills