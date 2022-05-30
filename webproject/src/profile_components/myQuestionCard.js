import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuestionCard from "../questions_list_components/question_card.js";
import axios from 'axios'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyQuestionsCard = ({question, myAccount}) => {
    const archiveQuestion = (_id) => {
        axios({
          method: "patch",
          url: `http://localhost:5000/questions/archive/${_id}`,
          Headers: { "Content-Type": "application/json" },
        }).catch((err) => {
          console.log(err);
        });
      };
  
      
    let [flag, setValue] =  useState(question.archive)

    return (
        <>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
                <div className="container mb-2" style={{ padding: "3px" }}>
                <QuestionCard question={question} />
                <br/>
                {myAccount && (!question.private ? (
                    <button
                    className="btn btn-outline-primary remove"   
                    onClick={(e) => {
                        e.preventDefault();
                        archiveQuestion(question._id);
                        setValue(!flag);
                    }}
                    style={{marginLeft:'35%'}}
                    >
                    {!flag
                        ? "Archive Question"
                        : "Un-Archive Question"}
                    </button>
                ) : (
                    <button
                    className="btn btn-outline-danger remove"
                    onClick={(e) => {
                        e.preventDefault();
                        toast.warning('Private Question Can\'t be Archived', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }}
                    style={{marginLeft:'35%'}}
                    >
                    Private Question
                    </button>
                ))}
                <hr />
                </div>
            <ToastContainer />
        </>
      );
}

export default MyQuestionsCard;