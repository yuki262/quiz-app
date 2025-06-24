import { useState } from "react";
import "./Answer.css";

interface Answer {
  text: string;
}

const Answer: React.FC<Answer> = ({ text }) => {
  const [click, setClicked] = useState<number>(0);

  const handleClick = () => {
    setClicked(click + 1);
    console.log("Click:", click);
  };

  return (
    <div className="answerBox" onClick={handleClick}>
      {text}
    </div>
  );
};

export { Answer };
