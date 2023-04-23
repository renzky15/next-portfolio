import React, {useEffect} from "react";
import {useRouter} from "next/router";
import { Manrope } from 'next/font/google'
import Image from "next/image";
const inter = Manrope({weight: '700', subsets:['latin']});

const skills =['ReactJS','Next','VueJS','Nuxt','React Redux','Zustand','TypeScript','TailwindCSS','CSS3', 'Web3','Source Code Management (Git)',]
const experiences =[
    {
        companyName: 'Spacesium PTE LTD',
        position: 'Frontend Developer',
        year: 'February 2022 - Present'
    },
    {
        companyName: 'ScanX PTE LTD',
        position: 'Frontend Developer',
        year: 'March 2021 - February 2022'
    },
    {
        companyName: 'StackTrek',
        position: 'Backend Developer',
        year: 'January 2021 - March 2021'
    },
    {
        companyName: 'StackTrek',
        position: 'QA Automation',
        year: 'October 2019 - January 2021'
    },
    {
        companyName: 'V-Systems PTE LTD',
        position: 'Frontend Developer',
        year: 'August 2019 - October 2019'
    }
]
const ResumePage: React.FC<{}> = () => {

    const router = useRouter();
    return (
        <>
            <div className="content">
                <div className="w-full h-full bg-white flex ">
                    <div className="w-8/12 h-full relative space-y-10 p-10">
                        <div className="flex items-center relative">
                            <div className="overflow-hidden w-[300px] h-[300px] grayscale">
                                <Image alt={'me'} src="/static/img/sideview.jpeg" width="0" height="0" sizes="100vw"
                                       className="w-full h-full object-center"  />
                            </div>
                            <div className="flex flex-col items-end gap-2  w-full ">
                                <h1 className="text-title text-grey">Frontend Developer</h1>
                                <h1 className="text-header text-right text-primary">Renz Owen Santillan</h1>
                                <div className="flex flex-col items-end mt-2">
                                    <h3 className="text-lg text-grey">Lot 1, Blk. 1 Roseville Subdivision, Brgy. Ma-ao Sugar Central</h3>
                                    <h3 className="text-lg text-grey">Bago City, Negros Occidental</h3>
                                    <h3 className="text-lg text-grey">+639952687925</h3>
                                    <h3 className="text-lg text-grey">renzowensantillan@gmail.com</h3>
                                    <h3 className="text-lg text-grey">September 15, 1997</h3>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-4 border-grey"></div>
                        <p className="text-xl text-justify text-grey">Greetings! I am a web developer specialized into various frontend development work. I have vast experience in using the latest frontend frameworks and is knowledgeable in the latest Web technology development practices.  I am a developer who always aims to provide the utmost quality and ensures that the code is clean and manageable. I also have experienced working with teams and I am a good team player.  Coding has been my passion throughout my career history and always strives to be better with what I do. The frontend frameworks that I use are: NextJS, Vue, Angular, KnockoutJS and I have been using various libraries that will speed up the development time. Other work that I do is converting Figma/PSD designs to W3C standards and I practice SOLID and DRY principles.  </p>
                        <div className="flex flex-col">
                            <h1 className="text-3xl text-primary">HIGHEST EDUCATIONAL ATTAINMENT</h1>
                            <h1 className="text-3xl text-grey mt-2">Tertiary: Bachelor of Science in Information Technology</h1>
                            <span className="text-xl text-grey">University of Negros Occidental Recoletos</span>
                            <span className="text-xl text-grey">54 Lizares St., Bacolod City, Negros Occidental, 6100</span>
                            <span className="text-xl text-grey">S.Y. 2015 - 2019</span>
                        </div>
                    </div>
                    <div className="bg-primary w-1/3 h-auto p-5">
                        <div className="mt-10">
                            <h1 className={`${inter.className} text-xl text-white`}>SKILLS</h1>
                            <ul className="list-disc px-10 grid grid-cols-3 gap-1">
                                {
                                    skills.map((skill:string, index:number) => (
                                        <li className="text-white text-lg" key={index}>{skill}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mt-10">
                            <h1 className={`${inter.className} text-xl text-white`}>EXPERIENCES</h1>
                            <ul className="list-disc grid grid-cols-2 gap-5  mt-5">
                                {
                                    experiences.map((exp:any, index:number) => (
                                        <li className="text-white flex flex-col items-start " key={index}>
                                            <span className={`text-lg ${inter.className}`}>{exp.position}</span>
                                            <span className="">{exp.companyName}</span>
                                            <span className="text-sm">{exp.year}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePage;
