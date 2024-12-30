"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
export default function Charater() {
  const words = para.split(" ");
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end center"],
  });

  return (
    <p
      ref={element}
      className="flex flex-wrap gap-x-1 leading-[100%] text-2xl font-medium"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <SingleWord range={[start, end]} progress={scrollYProgress} key={i}>
            {word}
          </SingleWord>
        );
      })}
    </p>
  );
}

const SingleWord = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span>
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <SingleCharacter range={[start, end]} progress={progress} key={i}>
            {character}
          </SingleCharacter>
        );
      })}
    </span>
  );
};

const SingleCharacter = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
