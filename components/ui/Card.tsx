import React from "react";
import Image from "next/image";

interface ProjectDetails {
  details: {
    id: number;
    image: string;
    name: string;
    description: string;
  };
}

const Card: React.FC<ProjectDetails> = ({ details }) => {
  return (
    <div className="flex flex-col justify-center w-[400px]">
      <div className="w-full min-h-[200px] flex justify-center items-center">
        <Image
          alt={"scout"}
          src={details.image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-center"
        />
      </div>
      <div className="bg-[#232326] rounded-b-md p-5 text-white">
        <div className="flex justify-between items-center">
          <h1>{details.name}</h1>
          {details.id === 1 && (
            <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
              Recent
            </span>
          )}
        </div>

        <p className="italic text-justify mt-2">{details.description}</p>
      </div>
    </div>
  );
};

export default Card;
