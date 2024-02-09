import React from "react";
import CardWrapper from "../atoms/card-wrapper";
import { IoMdEye } from "react-icons/io";
import { INFO } from "../constant";
const ListInfoCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
      {INFO.map((item, index) => (
        <CardWrapper key={index}>
          <div className="flex gap-4 items-center">
            <div className="bg-blue-100 rounded-xl h-16 w-16 flex justify-center items-center text-blue-500">
              {item.icon}
            </div>
            <div>
              <h1 className="font-semibold text-xl">{item.value}</h1>
              <p className="text-xs">{item.title}</p>
            </div>
          </div>
        </CardWrapper>
      ))}
    </div>
  );
};

export default ListInfoCard;
