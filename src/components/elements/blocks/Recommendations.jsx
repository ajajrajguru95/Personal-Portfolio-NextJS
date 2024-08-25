"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "../ui/carousel"


import FadeInWrapper from "../ui/FadeInWrapper";

const Recommendations = () => {

  const recommendations = [
    {
      cover: "shivam",
      title: "Shivam reported directly to Ajaj",
      content: "I had the pleasure of working with Ajaj during his time as my team lead at Tentwenty Digital, and I can confidently say he is an exceptional professional. Ajaj's ability to tackle complex problems with ease and his deep understanding of core front-end technologies greatly contributed to our team's success. He consistently motivated me to explore new frameworks and tools, significantly enhancing my growth as a front-end developer. Ajaj's management skills are top-notch, and he is an all-around fantastic colleague. I highly recommend Ajaj for any team looking for a skilled team leader and senior front-end developer. Thank you, Ajaj!",
      author: "Shivam Bale",
      designation: "Front End Engineer at tentwenty digital agency",
    },
    {
      cover: "nicholas",
      title: "Nicholas reported directly to Ajaj",
      content: "Always Helpful, appreciative and values team mates and motivates them.",
      author: "Nicholas Oliver",
      designation: "Frontend Developer at tentwenty digital agency",
    },
    {
      cover: "sonal",
      title: "Sonal worked with Ajaj but they were at different companies",
      content: "Recently, I had an interview round with Ajaj for the position of  Senior Front-end Developer. Complete interview was kind of a discussion round. He did not come up with predefined question answer setup. Although, he made me comfortable to share my opinions on all the concepts along with the detailed knowledge. I was allowed to share the experiences as well with the scenarios. The concepts he asked me were very logical. Whole 1.15 hr of our discussion was fruitful and had amazing interview experience. I hope to work with him soon. All the best Ajaj !",
      author: "Sonal Sangale",
      designation: "Consultant | Senior Front-end Developer | Ex-PhonePe",
    },
    {
      cover: "arati",
      title: "Arati managed Ajaj directly",
      content: "Ajaj has been part of my eCommerce team in Kilowott. He has been an asset to my team and brought in his expertise in UI development to deliver high quality to clients. It has been wonderful to work with Ajaj, he is proactive, thinks lateral and is very vocal about his views. With this, he brings immense value to the team and brings out the best in the rest of the team. Ajaj has never shied away from taking additional responsibility and has been instrumental in mentoring and coaching juniors in the team. It will be a pleasure to work with Ajaj again, I wish him the best!",
      author: "Arati Raiker",
      designation: "Software Product Development, Delivery Management",
    },
    {
      cover: "elton",
      title: "Elton reported directly to Ajaj",
      content: "I had the pleasure of working with ajaj during my time at kilowott. He is a great mentor and is always there to give you a helping hand. He made sure he explained new concepts to me and then assisted me while I was building new projects. He is always pushing you to do better Maybe it is in technology advancement or writing clean code.",
      author: "Elton De Menezes",
      designation: "Front End Developer | WordPress | JavaScript | React",
    },
    {
      cover: "prahlad",
      title: "Prahlad reported directly to Ajaj",
      content: "I have had the pleasure of working closely with Ajaj for quite some time, and I can confidently say that he is an exceptional technical lead and a true ninja when it comes to UI/UX. Ajaj's expertise in these fields is nothing short of impressive. He possesses an incredible ability to turn complex technical challenges into elegant solutions that not only function flawlessly but also provide an outstanding user experience. Working with Ajaj is not only productive but also enjoyable. He brings a positive attitude, creative thinking, and a sense of camaraderie to every project. I have learned a great deal from him, and I look forward to witnessing his continued success in the field.",
      author: "Prahlad Dixit",
      designation: "Software Developer",
    },
    {
      cover: "abhisikita",
      title: "Abhisikita reported directly to Ajaj",
      content: "He is a very supportive and helpful person. Task explaining capability is good, he managed the team very well. Highly recommended",
      author: "Abhisikta Dey",
      designation: "Experienced Web Developer with Demonstrated Knowledge in HTML, CSS, JAVASCRIPT, jQuery, PHP, WORDPRESS",
    },
    {
      cover: "sanjay",
      title: "Sanjay reported directly to Ajaj",
      content: "I had the privilege of working closely with Ajaj Rajguru as my tech lead during our time at Kilowott. I can confidently say that he is one of the most exceptional tech leads I've had the pleasure of collaborating with. He fosters a positive and collaborative work environment where team members feel valued and empowered. His excellent communication skills, both technical and interpersonal, ensured that everyone on the team was on the same page and working cohesively toward our objectives. I am genuinely grateful for the opportunity to work under Ajaj Rajguru's leadership, and I can confidently say that he has had a lasting and positive impact on my career. Ajaj Rajguru is not only a brilliant tech lead but also a fantastic mentor and colleague.",
      author: "Sanjay Rajoriya",
      designation: "Software Developer at Kilowott",
    },
    {
      cover: "amit",
      title: "Amit worked with Ajaj on the same team",
      content: "Ajaj is the type of developer you can always count on. During our collaboration at kilowott. His deep understanding of front-end technologies and frameworks was instrumental in delivering high-quality websites and applications. In Addition mentoring of junior developers and proactive involvement in code reviews. His attention to detail and dedication to writing clean, maintainable code greatly contributed to the success of our projects. I am confident that Ajaj will continue to make meaningful contributions in their career and can be a true asset to any development team.",
      author: "Amit Adav",
      designation: "UI-UX Lead at Unified Infotech | Webflow Expert | Framer | Minder and Humble Designer | Mentor",
    },
    {
      cover: "nausheen",
      title: "Nausheen reported directly to Ajaj",
      content: "Right from the start, Ajaj was there whenever I needed help, even when he had a lot going on. His tips for handling work challenges and sharing his own experiences were really valuable to me. He made it comfortable for us to talk openly, which made it easier in learning and feeling more confident. He also helped me improve in my work, and his encouragement even inspired me to think about becoming a mentor myself someday.",
      author: "Nausheen Sayyed",
      designation: "Designer and developer at kilowott",
    },
    {
      cover: "narayan",
      title: "Narayan worked with Ajaj on the same team",
      content: "Ajaj is very talented developer and very good human being. I had pleasure of working closely with ajaj for last few years. His exceptional development skills, attention to minute details, knowlege about subject and work dedication really stands out.Ajaj leadership skill is highly commendable and his ability to mentor team member, fostering an environment of continuous learning and innovation. I surely endorse ajaj as a dynamic leader and a highly talented developer who consistently strive to produce outstanding result.",
      author: "Narayan Mulik",
      designation: "Senior Full Stack Developer at Kilowott",
    },
    {
      cover: "utkarsh",
      title: "Utkarsh reported directly to Ajaj",
      content: "I've had the privilege of working closely with Ajaj for the past and can wholeheartedly vouch for his exceptional skills and leadership qualities. His role as a Frontend Technical Lead has been instrumental in the success of our projects. Ajaj not only brings his technical expertise to the table, but he also demonstrates exceptional leadership skills. He has a knack for guiding the team with a clear vision, setting achievable goals, and ensuring that each member's strengths are utilized effectively. His dedication to continuous learning sets a precedent for the team to strive for excellence.",
      author: "Utkarsh Bokade",
      designation: "Frontend Developer at TenTwenty",
    }
  ]

  const imageSize = 80;

  const positionStyles = [
    { bottom: -imageSize / 2, left: 0 },
    { top: -imageSize / 2, left: 0 },
    { bottom: -imageSize / 2, right: 0 },
    { top: -imageSize / 2, right: 0 },
  ];

  const randomizedPositions = recommendations.map((_, idx) => positionStyles[idx % positionStyles.length]);

  return (
    <FadeInWrapper>
    <section className="recommendations py-20 overflow-x-hidden">
      <div className="container relative after:content-[''] after:absolute after:left-[98%] after:top-0 after:w-[500px] after:h-full after:blur-md after:bg-background">
        {/* <div className="flex gap-20"> */}

        <h2 className="text-[2.5rem] md:text-[3rem] py-8 font-medium">
        What do colleagues say about <span className='gradient-text font-semibold'>Ajaj</span> <br /> and what recommendations has he received? 🙌🏻
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnMouseEnter: true,
              stopOnInteraction: false
            }),
          ]}
          className="w-full">
          {/* Carousel dots */}
          <CarouselDots className="justify-end py-8" />

          <CarouselContent className="-ml-4 py-20">

            {recommendations.map((item, idx) => (
              <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-2/5 select-none">
                <div className="p-4 h-full">
                  <div className="bg-foreground rounded-3xl h-full py-20 px-8 relative bg-[linear-gradient(154deg,_#ec489900,_#ffc25c_600px)]">
                    <div className="flex gap-5 h-full">
                      <div className="cover flex-none">
                        <Image
                          src={`/${item.cover}.jpg`}
                          alt={item.cover}
                          width={imageSize}
                          height={imageSize}
                          className="rounded-full aspect-square mx-auto outline-foreground outline"
                          style={{
                            position: 'absolute',
                            ...randomizedPositions[idx],
                          }}
                        />
                      </div>
                      <div className="flex-1 text-background flex flex-col gap-5 justify-between">
                        <div className="flex-1 flex flex-col gap-5">
                          <h2 className="text-2xl md:text-4xl font-bold">{item.title}</h2>
                          <p className="text-[1.15rem] md:text-[1.4rem] leading-[1.5] md:leading-9">{item.content}</p>
                        </div>
                        <div className="recommended-by">
                          <h3 className="text-[1.2rem] md:text-[1.4rem] uppercase font-bold">{item.author}</h3>
                          <p className="text-[1.2rem] md:text-[1.4rem] designation">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

            ))}

          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}

        </Carousel>


        {/* {/* </div> */}
      </div>




    </section>
    </FadeInWrapper>
  );
};

export default Recommendations;
