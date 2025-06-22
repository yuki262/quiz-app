import { useState } from "react";
import "./Answer.css";

const Answer = () => {
  const [click, setClicked] = useState<number>(0);

  const handleClick = () => {
    setClicked(click + 1);
    console.log("Click:", click);
  };

  return (
    <div className="answerBox" onClick={handleClick}>
      This is an answer
    </div>
  );
};

export { Answer };
