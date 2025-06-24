"use client";


import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Adjust this import as needed
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";


export function ExpandableCard({ title, src, description, children, className, classNameExpanded }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const id = React.useId();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/60 backdrop-blur-sm z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center sm:mt-16">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-3xl h-full sm:h-auto flex flex-col overflow-auto sm:rounded-2xl bg-white shadow-lg relative",
                classNameExpanded
              )}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-72 object-cover object-center rounded-t-2xl"
                  />
                </div>
              </motion.div>

              <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-gray-500 text-sm"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="text-2xl font-semibold text-gray-800"
                    >
                      {title}
                    </motion.h3>
                  </div>

                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-600 text-base space-y-4 pb-8"
                >
                  {children}
                </motion.div>
                <div className="pt-4 flex justify-end">
                  <motion.button
                    onClick={() => setActive(true)}
                    whileTap={{ scale: 0.97 }}
                    className="text-sm font-medium text-red-600 hover:underline transition"
                  >
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "p-4 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer transition hover:shadow-md",
          className
        )}
      >
        <div className="flex flex-col gap-3">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="w-full h-48 object-cover rounded-md"
            />
          </motion.div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-sm text-gray-500"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-lg font-semibold text-gray-800"
              >
                {title}
              </motion.h3>
            </div>

            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition"
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}