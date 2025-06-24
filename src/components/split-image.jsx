
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { ImageSplit } from "./ui/image-split";
 
export default function ImageSplitDemo() {
  const { theme } = useTheme();
  const [borderOpacity, setBorderOpacity] = useState(0.3);
  const [borderColor, setBorderColor] = useState("#FFFFFF");
  const [imageSrc, setImageSrc] = useState(
    "/images/productPresentation.png"
  );
 
  useEffect(() => {
    setBorderColor(theme === "dark" ? "#FFFFFF" : "#000000");
    setBorderOpacity(theme === "dark" ? 0.2 : 0.1);
    setImageSrc(
      theme === "dark"
        ? "/images/productPresentation.png"
        : "/images/productPresentation.png"
    );
  }, [theme]);
 
  return (
    <div className="overflow-y-auto relative">
      <div className="h-[450px] inset-x-0 top-0 absolute flex items-center justify-center gap-2">
        <span className="font-gilroy text-3xl text-foreground">
          Scroll to reveal
        </span>
      </div>
      <div className="pt-[750px] px-6 sm:px-8 pb-6 sm:pb-8">
        <ImageSplit
          src={imageSrc}
          className="rounded"
          borderColor={borderColor}
          initialBorderOpacity={borderOpacity}
          sections={9}
        />
      </div>
    </div>
  );
}