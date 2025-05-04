import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";

export function MeteorsDemo({
  img,
  title,
  desc,
}: {
  img?: string;
  title?: string;
  desc?: string;
}) {
  return (
    <div className="">
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.70] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-400 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col gap-2 justify-center items-center overflow-hidden rounded-2xl border border-gray-600 bg-[#15181C] px-8 py-8 shadow-xl">
          <div className="relative flex h-full flex-row gap-2 justify-center z-10 items-center">
            <Image
              src={img || "/default-image.png"}
              alt="logo"
              height={40}
              width={38}
              className="rotate-center"
            />

            <h1 className="text-xl font-bold text-blue-400">
              {title ? title : "Prep Pro"}
            </h1>
          </div>
          <p className="z-50 text-base font-normal text-slate-500">
            {desc ? desc : "Your AI Interview Assistant"}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
