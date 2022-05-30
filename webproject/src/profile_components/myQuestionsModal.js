import { Button, Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MyQuestionsCard from "./myQuestionCard.js";

const MyQuestionsModal = ({ questions, setMyQuestions }) => {
  return (
    <>
      <Modal size="auto" show={true} onHide={() => setMyQuestions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions.map((question) => {
            return (
            <MyQuestionsCard key={question._id} question={question} />
          )})}
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
