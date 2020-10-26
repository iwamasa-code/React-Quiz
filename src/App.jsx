import React, { useState } from "react";
// import { Quiz } from "./components/Quiz";
import "./styles.css";

export const App = () => {
  const QUIZ = [
    {
      question: "日本の四季の正しい順番を答えて!",
      correct: ["春", "夏", "秋", "冬"],
    },
    {
      question: "正しい円周率を答えて！",
      correct: ["3.14"],
    },
    {
      question: "ジャンケンで相手がパーを出した時、こっちが勝てる手は?",
      correct: ["チョキ"],
    },
  ];
  const [questionTitle, setQuestionTitle] = useState(QUIZ[0].question);
  const [correct, setCorrect] = useState(QUIZ[0].correct);
  const [answerText, setAnswerText] = useState("");

  let num = 0;

  const onChangeAnswerText = (e) => {
    setAnswerText(e.target.value);
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    if (answerText.match(QUIZ[num].correct)) {
      correct = true;
    }

    if (correct) {
      alert("正解");
      num++;
      setQuestionTitle(QUIZ[num].question);
      setCorrect(QUIZ[num].correct);
    }
    if (answerText === "") {
      alert("入力してください");
    } else if (!correct) {
      alert("不正解...");
    }

    setAnswerText("");
  };

  return (
    <>
      <div className="question-area">
        <p className="title">{questionTitle}</p>
      </div>

      <div className="answer-area">
        <input
          placeholder="解答を入力する"
          value={answerText}
          onChange={onChangeAnswerText}
          className="text"
        />
        <button onClick={onClickAdd}>解答する</button>
      </div>
    </>
  );
};
