import React from 'react'
import { FlipWords } from './ui/ChangingText'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1> 
            <div className='flex flex-wrap justify-center items-center p-4 gap-16 mt-10'>

                {projects.map(({id,title,img,iconLists,link,des}) => (
                    <PinContainer
                    title={link}
                    href={link}
                    key={id}
                    >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {title}
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          {des}
                        </span>
                      </div>
                      <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                    </PinContainer>
                ))}

            </div>
        </div>
    )
}

export default RecentProjects