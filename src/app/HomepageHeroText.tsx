"use client";
import { useState, useEffect } from "react";

const titles = [
  "tech enthusiast",
  "react fanatic",
  "next.js nerd",
  "typescript maven",
  "tailwind convert",

  "hip-hop head",
  "k-pop stan",
  "wannabe dj",
  "coffee drinker",
  "deep thinker",
];

export default function HomepageHeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancel = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function loop() {
      if (cancel) return;
      timeoutId = setTimeout(() => {
        setIndex((prevIndex) => {
          if (prevIndex === titles.length - 1) return 0;

          return prevIndex + 1;
        });
        loop();
      }, 5000);
    }
    loop();
    return () => {
      cancel = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const title = titles[index];

  return (
      <div key={title} className="animate-swipe-in">
        {title}
        <br />
      </div>
  );
}
