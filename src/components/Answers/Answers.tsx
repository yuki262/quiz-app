import { Answer } from "../Answer/Answer";

import "./Answers.css";

const Answers = () => {
  return (
    <div className="answerArea">
      <Answer text="She is stupid" />
      <Answer text="Her parents" />
      <Answer text="She is born like that" />
      <Answer text="She is born to be beautiful" />
    </div>
  );
};

export { Answers };
