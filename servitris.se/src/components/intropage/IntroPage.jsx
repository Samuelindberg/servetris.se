import React from "react";
import IntroDescContainer from "./IntroDescContainer";

import placeholder from "../../assets/icons/placeholderimg.svg";

export default function IntroPage() {
  return (
    <section className="intro-section">
      <IntroDescContainer />
      <img className="intro-section-img" src={placeholder} alt="" />
    </section>
  );
}
