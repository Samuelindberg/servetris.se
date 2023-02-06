import { React, useEffect } from "react";

export default function IntroHeader() {
  //   const title = ["ä", "l", "k", "o", "m", "m", "e", "n", "!"];
  //   let index = 0;

  //   const titleRef = useRef(null);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       const showLetters = setInterval(() => {
  //         if (index < title.length) {
  //           index++;
  //         } else {
  //           clearInterval(showLetters);
  //         }
  //       }, 1000);
  //     }, 1000);
  //   }, []);
  const text = "Välkommen!";

  return <h1>{text}</h1>;
}
