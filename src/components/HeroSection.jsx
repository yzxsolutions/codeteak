import { Badge } from "@mantine/core";
import BlurText from "./ui/BlurText";
import { MacbookScroll } from "./ui/MacbookScroll";
import RotatingText from "./ui/RotatingText";
import { TextHoverEffect } from "./ui/TextHoverEffect";
import Magnet from "./ui/Magnet";

import { AnimatedTooltipPreview } from "./AnimatedToolTip";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/svg/hero-bg.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-10 before:transform before:-translate-x-1/2">
      <div className="relative z-10 max-w-[85rem] h-full flex  gap-6 flex-col items-center justify-start mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        {/* <div className="flex justify-start">
      <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300" href="#">
        PRO release - Join to waitlist
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div> */}
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-4xl text-center mx-auto ">
  <h1 className="block w-full font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
    <BlurText
      text="Let's Build Together "
      delay={150}
      animateBy="words"
      direction="top"
      className="text-5xl md:text-7xl font-langits gap-2 justify-center font-medium"
    />
  </h1>
  <h2 className="text-xl mt-5 flex items-center justify-center font-medium font-wave">
    Build Your Dream
    <RotatingText
      texts={["Website", "Mobile App", "UI Design", "Software Solution"]}
      mainClassName="px-3 sm:px-2 md:px-3 text-red-500 font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </h2>
</div>

        {/* End Title */}

       <div className="mt-5 max-w-3xl text-center mx-auto">
  <BlurText
    text="We are a full-fledged product & service-based IT company, offering tailored web, mobile, software, and cloud solutions. Whether you're launching a new product or scaling your business digitally, we build powerful, scalable tech that drives results. Let’s create something impactful—together."
    delay={250}
    animateBy="words"
    direction="top"
    className="text-lg text-gray-600 font-wave"
  />
</div>


        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Magnet padding={200} disabled={false} magnetStrength={5}>
            <Link
              to={"/services"}
              className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border  text-red-600 text-sm font-bold rounded-md focus:outline-hidden focus:from-violet-600 focus:to-blue-600 py-3 px-4"
              href="#"
            >
              Get started
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </Magnet>
        </div>
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
};

export default HeroSection;
