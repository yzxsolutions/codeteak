"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Mubashir Thalipparamban",
    designation: "Founder & Creative Head",
    image:
      "/images/testimonial1.png",
  },
  {
    id: 2,
    name: "Sai",
    designation: "General Manager of Qasar al Haya",
    image:
      "/images/testimonial2.png",
  },
  {
    id: 3,
    name: "Aseem Basha",
    designation: "Founder of Optical World",
    image:
      "/images/testimonial3.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
