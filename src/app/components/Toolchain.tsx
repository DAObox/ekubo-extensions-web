"use client";

import { Badge } from "@/app/components/Badge";
import { Button } from "@/app/components/Button";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "@/app/components/Text";
import { useInView } from "react-intersection-observer";

const tools = [
  {
    name: "Oracle Extension",
    badgeTitle: "Ekubo Inc.",
    description:
      "Torii automatically indexes your game state and exposes GraphQL and gRPC APIs for your world to consume. No longer do you need to write boilerplate code to manage your game state.",
    documentation: "https://book.dojoengine.org/toolchain/torii",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="M96.143 110.763 116.716 80c1.746 2.63 3.981 5.064 6.66 7.209 7.096 5.683 16.722 8.876 26.758 8.876 10.037 0 19.662-3.193 26.759-8.876 2.37-1.898 5.058-4.922 6.702-7.209l19.717 31.38c-14.317 10.708-33.175 16.72-52.821 16.792h60.568a6.52 6.52 0 0 1 5.419 2.895l19.613 29.327H63.909l18.67-29.213a6.519 6.519 0 0 1 5.493-3.009h61.706c-20.021-.074-39.222-6.315-53.635-17.409ZM98.808 181.884V220h32.605v-55.84c-25.933.011-31.577 9.759-32.606 17.724ZM203.163 181.926c-1.014-7.972-6.632-17.753-32.606-17.765V220h32.605l.001-38.074Z"
        />
      </svg>
    ),
  },
  {
    name: "Limit Order Extension",
    badgeTitle: "Ekubo Inc.",
    description:
      "Katana is a high-performance sequencer for onchain game development. Spin up a local sequencer with one command and deploy your world with another.",
    documentation: "https://book.dojoengine.org/toolchain/katana",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill="none"
        className="w-8 sm:w-24"
      >
        <path
          fill="#fff"
          d="m144.429 70 15.777 78.128.006-.007 78.121 16.13-14.059 13.936a39.347 39.347 0 0 1-35.306 10.662l-56.962-11.22L186.34 230h-50.269l-74.404-71.919 21.658-21.942a3.935 3.935 0 0 1 5.53-.07l41.731 40.193-10.971-57.005a39.349 39.349 0 0 1 10.816-35.259L144.429 70Z"
        />
        <path
          fill="#fff"
          d="M191.419 136.173c-10.592 0-19.179-8.589-19.179-19.183 0-10.595 8.587-19.183 19.179-19.183 10.592 0 19.178 8.588 19.178 19.183 0 10.594-8.586 19.183-19.178 19.183Z"
        />
      </svg>
    ),
  },
];

type Direction = "up" | "down";

const variants = {
  initial: (direction: Direction) => {
    return {
      y: direction === "up" ? 100 : -50,
      opacity: 0.2,
    };
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => {
    return {
      y: direction === "up" ? -100 : 100,
      opacity: 0,
    };
  },
};

export function Toolchain() {
  const [selectionTop, setSelectionTop] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("down");
  const hoverRef = useRef(false);

  const selectedTool = tools[selectedIndex];

  return (
    <div
      id="features"
      className="relative z-10 -mt-40 flex flex-wrap items-center justify-center overflow-hidden px-6 pb-24"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div
        style={{
          borderImageSource:
            "linear-gradient(180deg, rgba(100, 82, 222, 0.28) 0%, #151768 100%)",
        }}
        className=" relative w-full  max-w-[1400px] rounded-3xl border border-white/10  from-[rgba(50,28,193,0.03)] to-[rgba(43,24,164,0.31)] p-6 shadow-[0_0_114px_0_#03122ACC] backdrop-blur-2xl sm:p-14 sm:pl-24"
      >
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:gap-32">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={selectedTool.name}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 50 },
                opacity: { duration: 0.1 },
              }}
              custom={direction}
              className="z-[5] order-2 flex  flex-col items-start sm:order-1"
            >
              <div className="mb-4 sm:mb-10">
                <Badge
                  text={selectedTool.badgeTitle}
                  color="yellow"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="none"
                    >
                      <path
                        fill="#03152E"
                        d="M4.76 7.573c0-1.092.888-1.98 1.98-1.98h11.88c1.092 0 1.98.888 1.98 1.98v9.9c0 1.092-.888 1.98-1.98 1.98H6.74a1.982 1.982 0 0 1-1.98-1.98v-9.9Zm9.102 2.225a.74.74 0 0 0 .055 1.048l1.86 1.677-1.863 1.677a.74.74 0 0 0-.056 1.049.74.74 0 0 0 1.05.056l2.474-2.228a.743.743 0 0 0 0-1.101l-2.475-2.228a.74.74 0 0 0-1.049.056l.004-.006Zm-2.417 1.048a.74.74 0 0 0 .056-1.048.74.74 0 0 0-1.049-.056l-2.475 2.227a.743.743 0 0 0 0 1.101l2.475 2.228a.74.74 0 0 0 1.049-.055.74.74 0 0 0-.056-1.05l-1.862-1.67 1.862-1.677Z"
                      />
                    </svg>
                  }
                />
              </div>
              <Text textStyle="headline1" className="mb-4 sm:mb-10">
                {selectedTool.name}
              </Text>
              <Text textStyle="bodyText" className="mb-10">
                {selectedTool.description}
              </Text>
              <div className="space-y-2 sm:space-x-4">
                <a target="_blank" href={selectedTool.documentation}>
                  <Button withArrow variant="default">
                    Documentation
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="relative order-1 grid shrink-0 grid-cols-5 flex-col gap-2 sm:grid-cols-1">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                onMouseEnter={(e) => {
                  const top = e.currentTarget.offsetTop;

                  setSelectionTop(top);
                  setSelectedIndex(i);

                  if (i > selectedIndex) {
                    setDirection("down");
                  } else {
                    setDirection("up");
                  }
                }}
                className={`z-[1] h-14 w-14 cursor-pointer sm:h-[115px] sm:w-[115px] ${tool.name === selectedTool.name ? "bg-[#321CC4] sm:bg-transparent" : ""} flex items-center justify-center rounded-xl`}
              >
                {tool.icon}
              </div>
            ))}
            <motion.div
              className="absolute left-0 right-0 top-0 z-0 hidden  aspect-square rounded-[22px] bg-[#321CC4] sm:block"
              animate={{ y: selectionTop }}
              transition={{ type: "spring", stiffness: 300, damping: 50 }}
            ></motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] rounded-[40px] backdrop-blur-[50px]" />
      </div>
      <div className="absolute top-[50%] z-[-2] h-[200vw] w-[200vw] rounded-full bg-[#1A1479] shadow-[0_0_64px_40px_#1A1479]" />
    </div>
  );
}
