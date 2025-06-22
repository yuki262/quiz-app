import { Answers } from "../Answers/Answers";
import { Question } from "../Question/Question";

import "./Main.css";

const Main = () => {
  return (
    <div className="mainArea">
      <Question />
      <Answers />
    </div>
  );
};

export { Main };
