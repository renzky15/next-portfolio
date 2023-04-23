import React from "react";
import {useRouter} from "next/router";
import Banner from "@/components/ui/Banner";
import { Roboto_Flex } from 'next/font/google'
import {IonIcon} from "@ionic/react";
import {mail} from "ionicons/icons";
import Image from "next/image";

const inter = Roboto_Flex({weight: '800', subsets:['latin']});

const LandingPage: React.FC<{}> = () => {
    const router = useRouter();
    return (
        <>
            <div className="content">
                <div className="flex justify-between items-center gap-20 w-full">
                    <div className={`flex flex-col gap-5 `}>
                        <div className={`flex gap-5 ${inter.className}`}>
                            <h1 className="text-title text-white">Hi, I&apos;m</h1>
                            <div className="typewriter">
                                <h1 className="text-title text-primary">Renz Owen Santillan</h1>
                            </div>
                        </div>
                        <h1 className={`text-white text-title ${inter.className}`}>A <span className="text-primary">Tall Dark Frontend Developer</span> based from Philippines.</h1>
                        <p className="text-grey text-2xl text-justify">
                            I am excited to showcase my portfolio, which reflects my passion for web development and my commitment to excellence. I am ready to take on new challenges and create innovative web solutions that make a meaningful impact. Let's collaborate and bring your vision to life!
                        </p>
                        <div className="mt-3"><button className="bg-transparent border-4 border-primary px-5 py-3 flex justify-center gap-2 items-center text-[#f2a93c] text-xl " ><IonIcon className='stroke-current text-[#f2a93c] text-xl' icon={mail} /> renzowensantillan@gmail.com</button></div>
                    </div>
                    <div className="overflow-hidden rounded w-full">
                        <Image alt={'me'} src="/static/img/me.jpg" width="0" height="0" sizes="100vw"
                               className="w-full h-auto object-center"  />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
