import React, { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

export const App = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const QUIZ = [
    {
      question: "日本の四季の正しい順番を答えて!",
      correct: ".*春.*夏.*秋.*冬.*",
    },
    {
      question: "正しい円周率を答えて！",
      correct: ".*3.14.*",
    },
    {
      question: "ジャンケンで相手がパーを出した時、こっちが勝てる手は?",
      correct: ".*チョキ.*|.*ちょき.*",
    },
  ];
  const [questionTitle, setQuestionTitle] = useState(QUIZ[0].question);
  const [correct, setCorrect] = useState(QUIZ[0].correct);
  const [num, setNum] = useState(1);
  let quizLength = QUIZ.length;

  const onClickAdd = (data) => {
    const answer = data.text;
    const reg = new RegExp(correct);
    console.log(reg);
    console.log(data);
    console.log(num);
    if (reg.test(answer)) {
      alert("正解！！");
      if (num < quizLength) {
        setNum(num + 1);
        setCorrect(QUIZ[num].correct);
        setQuestionTitle(QUIZ[num].question);
      } else {
        alert("終了");
      }
      reset();
    }
  };

  return (
    <>
      <div className="question-area">
        <p className="title">{questionTitle}</p>
      </div>

      <div className="answer-area">
        <form onSubmit={handleSubmit(onClickAdd)}>
          <input
            placeholder="解答を入力する"
            name="text"
            className="text"
            ref={register({ required: true })}
          />
          {errors.text && alert("解答を入力してください")}
          <button>解答する</button>
        </form>
      </div>
    </>
  );
};
