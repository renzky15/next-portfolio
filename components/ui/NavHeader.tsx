import React, {useState} from "react";
import {earth, ellipse,} from "ionicons/icons";
import {IonIcon} from "@ionic/react";
import {useRouter} from "next/router";
interface Props {
    defaultPage: number;
}
const menu = [{
    title:'Portfolio | Landing',
    path:'/'
}, {
    title:'Portfolio | Sample Works',
    path:'/works'
}, {
    title:'Portfolio | CV / Resume',
    path:'/resume'
}]
const NavHeader: React.FC<Props> = (props) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(props.defaultPage);
    const navClickHandler = (path:string,index:number) => {
        if (activeTab === index) {
           setActiveTab(index) ;
           router.push(path).then();
        }else {
            setActiveTab(index) ;
            router.push(path).then();
        }
    }
    return (
        <>
            <div className="w-full bg-black pt-2 flex">
                <div className="flex items-center gap-2 px-4 pb-4 pt-2">
                    <IonIcon className="stroke-current text-red-500 text-lg" icon={ellipse} />
                    <IonIcon className="stroke-current text-yellow-500 text-lg" icon={ellipse} />
                    <IonIcon className="stroke-current text-green-500 text-lg" icon={ellipse} />
                </div>
                <div className="flex items-center">
                    {
                        menu.map((nav:any, index:number) => (
                            <button onClick={() => navClickHandler(nav.path, index)} className={`${activeTab === index ? 'bg-[#323232]': ''} h-full text-white px-5 rounded-t-xl text-sm flex items-center gap-2`}>
                                <IonIcon className="stroke-current text-white text-lg" icon={earth} /> {nav.title}
                            </button>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default NavHeader;
