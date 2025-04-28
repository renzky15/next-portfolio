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
    <div key={details.id} className="flex flex-col w-full h-full">
      <div className="w-full h-[200px] flex justify-center items-center overflow-hidden">
        <Image
          alt="scout"
          src={details.image}
          width={400}
          height={200}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#232326] rounded-b-md p-5 text-white flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h1>{details.name}</h1>
          {details.id === 1 && (
            <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
              Recent
            </span>
          )}
        </div>

        <p className="italic text-justify mt-2 flex-1">{details.description}</p>
      </div>
    </div>
  );
};

export default Card;
