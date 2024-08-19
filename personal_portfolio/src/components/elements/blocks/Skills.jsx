import Image from "next/image"

const Skills = () => {

    const skillSet = [
        {
            skill: "HTML5",
            logo: "html5"
        },
        {
            skill: "CSS3",
            logo: "css"
        },
        {
            skill: "Javascript",
            logo: "js"
        },
        {
            skill: "React",
            logo: "react"
        },
        {
            skill: "NextJS",
            logo: "nextjs"
        },

    ]

    return (
        <section className="py-10 bg-secondary">

            <div className="container mx-auto p-4 md:p-6 lg:p-12">

            <h2 className="text-[3rem] pt-8 pb-20 font-medium">
                What <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold'>Ajaj</span> do and his skillset.
            </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols gap-10">

                    {skillSet.map((skill, index) => (
                        <div key={index} className="flex items-center justify-center mb-4 bg-foreground">
                            <div className="text-center flex flex-col gap-5 p-16">
                                <Image
                                    src={`/${skill.logo}.svg`}
                                    width={100}
                                    height={100}
                                    alt="Icons"
                                />
                                <h3 className="text-3xl font-semibold text-background">{skill.skill}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        </section>
    )
}

export default Skills