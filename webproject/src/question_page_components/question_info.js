import { useState } from "react";
import { useParams } from "react-router-dom";
import AnswerInfo from "./answer_info";
import voteUpLogo from "./voteup.png";
import "./questionstyle.css";

const QuestionInfo = ({
  upVoteForAnswers,
  upVote,
  getAnswers,
  getQuestion,
  username,
  addAnswer,
  answerID,
}) => {
  const { qID } = useParams();
  const [question] = useState(getQuestion(qID)[0]);
  const [answers, setAnswers] = useState(getAnswers(qID));
  const [body, setBody] = useState("");

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const isValid = () => {
    return body.length > 10 ? true : false;
  };

  const setVote = (qID) => {
    const q = upVote(qID);
    return q.votes;
  };

  const setAnswerVote = (aID, votes) => {
    upVoteForAnswers(aID, votes);
  };

  const submitAnswer = (body) => {
    const a = {
      answer_id: answerID,
      question_id: parseInt(qID, 10),
      votes: 0,
      username: username.name,
      string: body,
    };
    setAnswers([...answers, a]);
    addAnswer(a);
  };

  return (
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="Question col-sm-8 row" style={{ paddingTop: "40px" }}>
        <div className="col-sm-2" style={{ textAlign: "center" }}>
          <div
            className="voteUpQuestion"
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h5>
              <b>{question.votes}</b>
            </h5>
            <img
              src={voteUpLogo}
              style={{
                width: "40px",
                height: "auto",
                paddingLeft: "10px",
                marginTop: "-2px",
              }}
            ></img>
          </div>
          <button
            className="btn btn-primary questionButton"
            style={{ width: "100%", display: "inline-block" }}
            onClick={() => {
              setVote(qID);
            }}
          >
            Up
          </button>
        </div>
        <div className="col-sm-10">
          <h3>{question.title}</h3>
          <h6 style={{ padding: "20px" }}>{question.body}</h6>
        </div>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <h4>Answers:</h4>
        <br></br>
        <br></br>

        {answers?.map((answer) => {
          return (
            <div className="container" style={{ padding: "5px" }}>
              <br></br>
              <AnswerInfo
                key={answer.answer_id}
                answer={answer}
                upVoteForAnswers={setAnswerVote}
              />
              <br></br>
              <hr />
            </div>
          );
        })}

        <form className="p-5 mb-5">
          <h6>Add New Comment:</h6>
          <h8>Please enter more than 10 characters</h8>
          <div className="mb-5">
            <textarea
              style={{ height: "120px", resize: "none" }}
              type="text"
              onChange={(e) => {
                updateBody(e);
              }}
              className="form-control"
              id="QuestionBody"
            />
          </div>
          {isValid() ? (
            <button
              type="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                submitAnswer(body);
              }}
              className={"btn active btn-primary"}
            >
              Add Answer
            </button>
          ) : null}
        </form>
      </div>
      <div className="col-sm-2"></div>
    </div>
  );
};

export default QuestionInfo;
