import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="About Us"
        heading="Codeteak"
      >
        <AboutContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <QualityContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ModernContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 font-medium md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-5xl md:text-7xl font-langits text-red-600 tracking-wide font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const AboutContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-langits tracking-wider">
      We Build Digital Experiences That Matter
    </h2>
    <div className="col-span-1 md:col-span-8 font-wave tracking-wider">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Codeteak is a tech powerhouse that transforms ideas into intelligent software products. From custom apps to full-scale enterprise systems, we design, develop, and deliver high-performance solutions tailored for impact.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        With a focus on usability, scalability, and innovation, we collaborate with clients at every stage—from ideation to launch—to deliver results that go beyond code.
      </p>
      
    </div>
  </div>
);


const QualityContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-langits tracking-wider">
      Built for Performance, Designed for Excellence
    </h2>
    <div className="col-span-1 md:col-span-8 font-wave tracking-wider">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl ">
        Every line of code we write is backed by rigorous testing, industry standards, and years of expertise. We follow agile workflows and best practices to ensure each product is secure, fast, and future-proof.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Quality is not a department—it's our culture. Whether you're launching a startup or scaling enterprise systems, we deliver clean, maintainable, and high-quality digital solutions you can trust.
      </p>
    </div>
  </div>
);



const ModernContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-langits tracking-wider ">
      Powered by Modern Tech. Built for Tomorrow.
    </h2>
    <div className="col-span-1 md:col-span-8 font-wave tracking-wider">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        We use the most reliable and modern technology stacks—React, Node.js, Next.js, MongoDB, Tailwind CSS, AWS, Docker, and more—to build robust digital products that scale with your vision.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        From frontend finesse to backend brilliance, we innovate at every layer. Our solutions are optimized for performance, security, and long-term growth—ready for the modern world and future-ready from day one.
      </p>
    
    </div>
  </div>
);
