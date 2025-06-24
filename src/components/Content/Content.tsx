import { Answers } from "../Answers/Answers";
import { Question } from "../Question/Question";

import "./Content.css";

const Content = () => {
  return (
    <div className="contentArea">
      <Question />
      <Answers />
    </div>
  );
};

export { Content };
