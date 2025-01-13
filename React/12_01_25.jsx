// Slideshow
// https://www.hackerrank.com/challenges/react-slideshow-1/problem

import React from "react";
import { useState } from "react";

function Slides({ slides }) {
  let [slideDataActualIndex, setSlideDataActualIndex] = useState(0);

  const restartButtonAction = () => {
    setSlideDataActualIndex(0);
  };

  const prevButtonAction = () => {
    slideDataActualIndex != 0 &&
      setSlideDataActualIndex(slideDataActualIndex - 1);
  };

  const nextButtonAction = () => {
    slideDataActualIndex < 4 &&
      setSlideDataActualIndex(slideDataActualIndex + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={restartButtonAction}
          disabled={slideDataActualIndex === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={slideDataActualIndex === 0}
          onClick={prevButtonAction}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={slideDataActualIndex === 4}
          onClick={nextButtonAction}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slideDataActualIndex].title}</h1>
        <p data-testid="text">{slides[slideDataActualIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
