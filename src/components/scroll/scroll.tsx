import "./scroll.scss";
import React, { useRef } from "react";
import useScroll from "../../hooks/useScroll";
import Forecast from "../forecast/forecast";

/**
 *(Function) that returns the forecast card list to scroll with mouse wheel
 */
const ScrollBox = (): JSX.Element => {
  const scrollWrapperRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { listenScrollEvent } = useScroll(scrollWrapperRef);

  return (
    <div className="scroll">
      <div
        className="scroll__wrapper"
        ref={scrollWrapperRef}
        onWheel={listenScrollEvent}
      >
        <div className="scroll__container" role="list">
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
