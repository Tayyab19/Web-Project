import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionCard from "../questions_list_components/question_card.js";

const MyQuestionseModal = ({ questions, setMyQuestions }) => {
  return (
    <>
      {console.log(questions)}
      <Modal size="auto" show={true} onHide={() => setMyQuestions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {console.log(2)}
          {questions.map((question) => {
            return (
              <div className="container mb-2" style={{ padding: "3px" }}>
                <QuestionCard key={question.question_id} question={question} />
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

export default MyQuestionseModal;
