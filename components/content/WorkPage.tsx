import React from "react";
import { useRouter } from "next/router";
import { Roboto_Flex } from "next/font/google";
import Card from "@/components/ui/Card";
const inter = Roboto_Flex({ weight: "800", subsets: ["latin"] });

const projects = [
  {
    id: 1,
    image: "/static/img/work1.png",
    url: "https://scout.spacesium.com/login",
    name: "Scout 3D Mapping Platform",
    description:
      "Spacesium’s data-first digital twins are designed to be highly customisable and adaptable to your needs.",
  },
  {
    id: 2,
    image: "/static/img/work2.png",
    url: "https://www.spacesium.com/",
    name: "Spacesium Landing",
    description: "NextJS website with SEO",
  },
  {
    id: 3,
    image: "/static/img/work6.png",
    url: "https://scanx.jp/",
    name: "Scanx 3D Mapping Platform",
    description:
      "Anyone can edit and parse gently online point processing software",
  },
  {
    id: 4,
    image: "/static/img/work3.png",
    url: "https://trial-app-rho.vercel.app/",
    name: "Figma to HTML 1",
    description: "Figma to HTML created by NextJS",
  },
];
const WorkPage: React.FC<{}> = () => {
  const router = useRouter();

  const redirectToUrl = (project: any) => {
    window.open(project.url, "_blank");
  };
  return (
    <>
      <div className="content grid grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <button
            className="h-full"
            onClick={() => redirectToUrl(project)}
            key={index}
          >
            <Card key={index} details={project} />
          </button>
        ))}
      </div>
    </>
  );
};

export default WorkPage;
