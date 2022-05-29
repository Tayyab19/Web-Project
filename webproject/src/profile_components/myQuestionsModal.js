import { Button, Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionCard from "../questions_list_components/question_card.js";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const MyQuestionsModal = ({ questions, setMyQuestions }) => {
  const archiveQuestion = (_id) => {
    axios({
      method: "patch",
      url: `http://localhost:5000/questions/archive/${_id}`,
      Headers: { "Content-Type": "application/json" },
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      {console.log(questions)}
      <Modal size="auto" show={true} onHide={() => setMyQuestions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions.map((question) => {
            return (
              <div className="container mb-2" style={{ padding: "3px" }}>
                <QuestionCard key={question._id} question={question} />
                <button
                  class="btn btn-outline-primary remove"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Edit Question
                </button>
                <button
                  class="btn btn-outline-secondary remove"
                  style={{ float: "right" }}
                  onClick={(e) => {
                    e.preventDefault();
                    archiveQuestion(question.question_id);
                  }}
                >
                  Archive Question
                </button>
                <hr />
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMyQuestions(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyQuestionsModal;
