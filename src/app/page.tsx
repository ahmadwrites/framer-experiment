import React from "react";
import Section from "@/components/section/Section";
import localFont from "next/font/local";

import classes from "./page.module.css";
import "./global.css";

const noctis = localFont({
  src: [
    {
      path: "../../public/fonts/Noctis-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noctis-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noctis-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noctis-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <>
      <main className={`${noctis.className} ${classes.main}`}>
        <Section
          title="Hi Firdaus. I want this text"
          highlight={["Firdaus."]}
        />
        <Section
          title="To slowly fade in and out based on scroll."
          highlight={["scroll."]}
        />
        <Section
          title="The more I scroll, the more faded out it should get."
          highlight={["faded", "out."]}
        />
        <Section
          title="Eventually new sentence should fade in and replace it."
          highlight={["fade", "in."]}
        />
        <Section
          title="But now, there's a moment of emptiness."
          highlight={["emptiness."]}
        />
      </main>
    </>
  );
}
