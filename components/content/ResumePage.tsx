"use client"
import React, {useState} from "react";
import {useRouter} from "next/router";
import { Manrope } from 'next/font/google'
import Image from "next/image";
const inter = Manrope({weight: '700', subsets:['latin']});
import {Document, Page, pdfjs} from "react-pdf"
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



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
    const options = {
        standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
        renderMode: 'canvas'
    };


    return (
        <>
            <div className="content flex justify-center">
                <div className="w-6/12">
                    <Document options={options} file="/static/pdf/resume.docx.pdf" >
                        <Page scale={1.2} pageNumber={1} />
                    </Document>
                </div>
            </div>
        </>
    );
};

export default ResumePage;
