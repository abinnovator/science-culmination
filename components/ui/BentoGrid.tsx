'use client'

import { cn } from "@/lib/utils/cn";
import { BackgroundGradientAnimation } from "./BackroundGradientAnimation";
import  { GlobeDemo }  from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/Confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FlipWords } from './ChangingText'
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [copied, setcopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('abtheinnovator@gmail.com');
    setcopied(true);
  };
  const stacks1 = ['React.js','IOT','Next.js'];
  const stacks2 = ['IFTTT','MQTTT'];
  const stacks3 = ['Javascript','C++','VueJS'];
  const stacks4 = ['Firebase','Pandas'];
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,9,21) 0%, rgba(12,14,35,1) 100% )'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} key={img} className={cn(imgClassName, 'object-cover object-center')} />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (<img key={spareImg} src={spareImg} alt={spareImg} className={'object-cover, object-center w-full h-full'} />)}
        </div>

        <div>
          {id === 6 && (
            <BackgroundGradientAnimation className="" key={id}> 
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
            </BackgroundGradientAnimation>
          )}
          <div className={cn(
            titleClassName, 'group-hover/bento-translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
            
            {id === 2 && <GlobeDemo />}
              {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2" key={id}>
                  <div className="flex flex-col gap-3 lg:gap-8">
                  {['HTML/CSS', <FlipWords words={stacks1} key='stacks1' />, <FlipWords words={stacks2} key='stacks2' />].map((item, index) => (
                    <span key={index} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                      <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" key={id} />
                  {[<FlipWords words={stacks3} key='stack3' />, <FlipWords words={stacks4} key={'stack4'} />, 'Python'].map((item, index) => (
                    <span key={index} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                  </div>
                </div>
              )}
            {id === 6 && (
              <div className="mt-5 relative" key={id}>
                <div className="absolute -bottom-5 right-0">
                  <Lottie options={{
                    loop:copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                    
                  }} />
                </div>
                <MagicButton 
                title = {copied ? 'Email copied' : 'copy my email'} icon={<IoCopyOutline />} position='left' 
                otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
              </div>
            )}
        </div>
      </div>
    </div>
    </div>

  );
};
