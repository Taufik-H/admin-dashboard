import React from "react";
import CardWrapper from "../atoms/card-wrapper";
import Image from "next/image";
import Avatar from "../atoms/avatar";
import { ACTIVITY } from "../constant";

const Activity = () => {
  return (
    <div className="bg-white rounded-xl mt-5 p-3">
      <div className="flex justify-between items-center">
        <div className="font-bold">Activity</div>
        <div className="text-sm text-blue-500 cursor-pointer">see more</div>
      </div>
      <div className="w-full flex gap-3 mt-5 items-center">
        <Image
          src="/images/avatar.jpg"
          height={50}
          width={50}
          alt="avatar"
          className="object-contain rounded-full  h-fit"
        />
        <div className="flex flex-col">
          <div className="font-semibold text-lg">Farhan Mujib</div>
          <div className="text-sm text-slate-500">
            Buy some product with new...
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500">10m</div>
        </div>
      </div>
      {ACTIVITY.map((item, index) => (
        <div className="w-full flex gap-3 mt-5 items-center " key={index}>
          <Image
            src={`/images/${item.image}`}
            height={50}
            width={50}
            alt="avatar"
            className="object-contain rounded-full  h-fit"
          />
          <div className="flex flex-col">
            <div className="font-semibold text-lg">{item.name}</div>
            <div className="text-sm text-slate-500">{item.activity}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
