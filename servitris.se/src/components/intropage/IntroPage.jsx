import React from "react";
import IntroDescContainer from "./IntroDescContainer";

import introimg from "../../assets/profileimg2.jpg";

export default function IntroPage() {
  return (
    <section className="intro-section">
      <IntroDescContainer />
      <img className="intro-section-img" src={introimg} alt="" />
    </section>
  );
}
