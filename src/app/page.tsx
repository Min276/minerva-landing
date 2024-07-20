'use client'
import Image from "next/image";
import './fonts.css'
import VideoComponent from "./components/VideoComponent";
import { CardData, projects } from "@/data/static";
import Card from "./components/Card";
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import NormalCard from "./components/Card/NormalCard";



export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start start', 'end end']

  })
  return (
    <main ref={container}>
    <div className="relative pt-4">
      <Image src="/assets/castle.svg" width={350} height={100} alt="castle" className="absolute right-0 -top-24" />
      <Image src="/assets/mountains.svg" width={400} height={100} alt="castle" className="absolute left-0 -bottom-[5rem]" />
      <Image src="/assets/tree.svg" width={170} height={100} alt="castle" className="absolute left-0 -bottom-[13rem]" />
      <div className="main-hero">
      <Image src="/assets/lightning.svg" width={40} height={40} alt="castle" className="absolute top-6" />
        <h2 className="custom-font">
        Welcome to the Hogwarts of 
        <span className="custom-font text-[var(--accent)]"> IELTS </span> Education.
        </h2>
        <p className="w-[550px] text-center my-5">
        Explore rich resources, computer familiarization tests, and a comprehensive 4-skill course designed to enchant your learning journey.
        </p>
        <button className="bg-white text-black font-semibold py-2 px-5 border-[1.5px] border-black rounded">Explore Now</button>
        <Image src="/assets/footstep.svg" width={70} height={70} alt="castle" className="absolute -bottom-20" />
      </div>
    </div>
     <div className="hello relative">
      <h2 className="text-2xl font-semibold mb-7 custom-heading">Meet <span className="custom-heading tracking-wide uppercase">Minerva</span></h2>
      <VideoComponent />
      <div className="absolute top-14">
        <Image src="/assets/video-bg.svg" width={1150} height={300} alt="castle" />
      </div>
     </div>
     <div className="relative mb-12">
     <Image src="/assets/footstep.svg" width={70} height={70} alt="castle" className="absolute top-20 left-44" />
     </div>
     <div className="main-back">
      <div>
     {projects.map( (project, i) => {
         const targetScale = 1 - ( (projects.length - i) * 0.05);

         return (
          <>
         <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        </>
         )
})}
</div>
<div>
{CardData.map((card, index) => (
  <NormalCard key={card.title} card={card} index={index} />
))}
</div>
      </div>

<div className="flex items-center justify-between py-24 gap-16">
  <div className="ml-24">
  <h2 className="custom-set">15 IELTS question sets</h2>
  <p className="custom-des">Practice with cleverly crafted questions sets that will ensure your readiness.</p>
  <button className=" bg-[#FEC047] text-black font-semibold py-2 px-5 border-[1.5px] border-black rounded">
              Get Started Now
            </button>
            </div>
            <div>
              <Image src="/assets/set.svg" width={1300} height={400} alt="questions" />
            </div>
</div>

<div className="py-16">
  <h2 className="custom-course">IELTS 4-skills course</h2>
  <p className="custom-des !text-center">Well designed courses with rich learning resources are coming soon.</p>
   <div className="flex  justify-center px-24">
    <div className="relative">
      <div className="absolute top-[4.5rem] rotate-[357deg] left-[3.7rem]">
      <h6 className="course-card-des">Course</h6>
      <h3 className="course-card-title">Listening</h3>
      </div>
   <Image src="/assets/listening-card.svg" width={350} height={100} alt="castle" />
   </div>
   <div className="relative -mt-4">
    <div  className="absolute top-[4.5rem] rotate-[354deg] left-[4.2rem]">
   <h6 className="course-card-des">Course</h6>
   <h3 className="course-card-title">Reading</h3>
   </div>
   <Image src="/assets/reading-card.svg" width={350} height={100} alt="castle" />
   </div>
   <div className="relative -mt-4">
    <div  className="absolute top-[4.5rem] rotate-[6deg] left-[5.5rem]">
   <h6 className="course-card-des">Course</h6>
   <h3 className="course-card-title">Writing</h3>
   </div>
   <Image src="/assets/writing-card.svg" width={350} height={100} alt="castle" />
   </div>
   <div className="relative">
    <div  className="absolute top-[4.5rem] rotate-[3deg] left-[4.2rem]">
   <h6 className="course-card-des">Course</h6>
   <h3 className="course-card-title">Speaking</h3>
   </div>
   <Image src="/assets/speaking-card.svg" width={350} height={100} alt="castle" />
   </div>
   </div>
    </div>
    <div className="py-16">
    <h2 className="custom-course">How Minerva Works?</h2>
    <div className="flex justify-center mt-5 mb-14">
    <div className="flex bg-[#FED686] p-3 rounded-[8px] items-center gap-4">
    <button className="bg-white text-black font-semibold py-2 px-5 border-[1.5px] border-black rounded">Familiarization Test</button>
    <div className="px-2 font-semibold">IELTS 4 Skills Course</div>
    </div>
    </div>
    <div className="flex justify-center">
    <Image src="/assets/roadmap.svg" width={1000} height={700} alt="roadmap" />
    </div>
    </div>
    </main>
  );
}
