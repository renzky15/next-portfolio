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

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    const nextHandler = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    }
    const prevHandler = () => {
        setPageNumber(pageNumber - 1);
    }


    return (
        <>
            <div className="content flex justify-center">
                <div className="w-8/12">
                    <Document className="text-white" options={options} file="/static/pdf/CV-RenzOwenSantillan.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page scale={1.2} pageNumber={pageNumber} />
                    </Document>
                    <div className="w-full flex items-center gap-5 justify-center">
                        <button disabled={pageNumber === 1 } className={`${pageNumber === 1 ? 'text-[#d3d3d3]' : ''} text-white`} onClick={prevHandler}>Prev</button>
                        <button className="text-white" onClick={nextHandler}>Next</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ResumePage;
