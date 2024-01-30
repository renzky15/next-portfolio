import React from "react";
import {useRouter} from "next/router";
import { Roboto_Flex } from 'next/font/google'
import Card from "@/components/ui/Card";
const inter = Roboto_Flex({weight: '800', subsets:['latin']});


const WorkPage: React.FC<{}> = () => {
    const router = useRouter();
    return (
        <>
            <div className="content">
                <Card />
            </div>
        </>
    );
};

export default WorkPage;
