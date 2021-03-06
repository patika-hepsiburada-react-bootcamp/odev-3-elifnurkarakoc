import React from "react";
import Question from "../components/Question";
import Chart from "../components/Chart";
import Summary from "../components/Summary";
import { useSocket } from "../contexts/SocketContext";
import { useQuestion } from "../contexts/QuestionContext";
import { useEffect } from "react";
const Content = () => {
  const { connectSocket, subscribeVote } = useSocket();
  const { options, setOptions } = useQuestion();

  useEffect(() => {
    connectSocket();
    subscribeVote((options) => {
      setOptions(options);
    });
  }, []);

  return (
    <div>
      <Summary />
      <div className="flex justify-around">
        <Question />
        <Chart />
      </div>
    </div>
  );
};

export default Content;
