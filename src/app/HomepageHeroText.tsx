"use client";
import { Fragment, useState, useEffect } from "react";
import { shuffle } from "@/utils";

const titles = [
  "software engineer",
  "coding educator",
  "tech enthusiast",

  "coffee drinker",
  "hip-hop head",
  "wannabe dj",

  "react fanboy",
  "next.js fan",
];

export default function HomepageHeroText() {
  const [[first, second, third], setIndices] = useState(titles);

  useEffect(() => {
    let cancel = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    function loop() {
      if (cancel) return;
      timeoutId = setTimeout(() => {
        setIndices((prevState) => shuffle([...prevState]));
        loop();
      }, 15000);
    }
    loop();
    return () => {
      cancel = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Fragment key={first}>
        {first}
        <br />
      </Fragment>
      <Fragment key={second}>
        {second}
        <br />
      </Fragment>
      <Fragment key={third}>
        {third}
        <br />
      </Fragment>
    </>
  );
}
