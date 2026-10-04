"use client";
import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="uppercase text-xl text-foreground font-bold font-display  ">
        <span className="bg-red-600 w-3 h-3 inline-block me-1"></span>
        Techly
        <span className="text-sm font-mono  text-muted-foreground">/Tech</span>
      </h1>
    </div>
  );
};

export default Logo;
