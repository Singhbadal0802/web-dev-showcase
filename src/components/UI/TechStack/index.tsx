"use client";
import React, { useState } from "react";
import style from "./style";
import { techItems, Tech } from "./utility";
import { cn } from "@/utilities/utility";
import ProficiencyBar from "../ProficiencyBar";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <section
      className={`flex flex-row py-4 md:py-8 lg:py-16 gap-2 lg:gap-4 mx-4 lg:mx-auto ${selectedTech ? "w-full lg:!px-24" : ""}`}
    >
      <div
        className={cn({
          [style.wrapper]: true,
          ["w-full"]: selectedTech,
        })}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-[1px] bg-black"></div>
            <div className="text-xs md:text-lg font-bold uppercase tracking-[0.3em] text-text-secondary">
              inventory
            </div>
          </div>
          <div className={style.headingWrapper}>
            <div>Tech</div>
            <div className="text-text-secondary hover:text-black transition-colors duration-500 cursor-default">
              Stack
            </div>
          </div>
        </div>
        <div className="flex flex-row max-h-max gap-4">
          <div className={cn({
            [style.techListWrapper] : true,
            ['max-w-4xl'] : selectedTech
            })}>
            {techItems.map((Tech: Tech) => (
              <button
                onClick={() => {
                  setSelectedTech(Tech);
                }}
                className={style.techItem}
                key={`tech-stack-${Tech.techName}`}
              >
                <img width={40} height={40} src={Tech.imageUrl} />
                <span className={style.techText}>{Tech.label}</span>
              </button>
            ))}
          </div>
          {selectedTech && (
            <div className="flex flex-col rounded-xl text-text-primary border border-2 border-text-secondary">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-28 p-4 overflow-hidden">
                <img src={selectedTech?.imageUrl} style={{width : '5rem', height : '5rem'}}/>
                </div>
                <div className="flex flex-col text-text-primary">
                  <span className="text-3xl font-bold">{selectedTech?.label}</span>
                  {/* <span className="text-md">Proficiency : {selectedTech?.Proficiency}</span> */}
                  <span className="flex flex-row items-center text-md">Proficiency : <ProficiencyBar proficiencyLevel={selectedTech?.Proficiency}/></span>
                </div>
              </div>
              <div className="p-4">{selectedTech?.context?.map((element: any) =>(
                <div className="flex flex-row gap-4" key={`${element?.label}`}>
                  <span className="w-24 font-bold">{`${element?.label}`}</span>
                  <span className="font-bold">:</span>
                  <span className="text-text-secondary">{element?.content}</span>
                </div>
              ))}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
