import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerInfo from "./answer_info";
import voteUpLogo from "./voteup.png";
import "./questionstyle.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionInfo = ({ username }) => {
  const { qID } = useParams();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [body, setBody] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  const loadData = () => {
    //For loading question info
    axios
      .get(`http://localhost:5000/questions/question/${qID}`)
      .then((question) => {
        setQuestion(question.data[0]);
      })
      .catch((err) => alert(err));

    //For loading all answer of that question
    axios
      .get(`http://localhost:5000/answers/question/${qID}`)
      .then((answer) => {
        setAnswers(answer.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const isValid = () => {
    return body.length > 10 ? true : false;
  };

  const addAnswer = async (answerBody) => {
        const a = {
            "question_id": qID,
            "username": username.name, 
            "body": answerBody,
            "votes": 0,
            "username_of_voters": [],
        }
        setAnswers([...answers, a]);
        await axios.post("http://localhost:5000/answers", a).then(res => {
            setAnswers([...answers, res.data]);
            toast.success('Answer Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }).catch(err => {
            toast.error('Error While Adding Answer', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })});
  }

  
  const setVote = (qID) => {
    setQuestion({
      ...question,
      votes: question.votes + 1,
      username_of_voters: [...question.username_of_voters, username],
    });
    setIsVoted(true);
    axios
      .put(`http://localhost:5000/questions/${qID}`, {
        ...question,
        votes: question.votes + 1,
        username_of_voters: [...question.username_of_voters, username],
      })
      .then((response) => {
        console.log("Updated");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    loadData();
  })

useEffect(() => {
        if (question != undefined){
            question.username_of_voters.forEach(q => {
                if(q.name == username.name){
                setIsVoted(true);
                }
            });
            setIsQuestion(true);
            setIsAnswer(true);
        }
  }, [question]);

    return (
        (isQuestion && isAnswer) ? 
        <div>
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
              disabled={isVoted}
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

            {
                answers?.map((answer) => {
                    return(
                    <div className="container" style={{padding: '5px'}}>
                        <br></br>
                            <AnswerInfo key={answer._id} answer={answer} username={username.name}/>
                            <br></br>
                        <hr />
                    </div>
                    )
                })
                
            }
            
            <form className="p-5 mb-5">
            <h6>Add New Comment:</h6>
            <h8>Please enter more than 10 characters</h8>
            <div class="mb-5">
                <textarea style={{height:'120px', resize:'none'}} type="text" onChange={e => { updateBody(e);}} class="form-control" id="QuestionBody"/>
            </div>
            {isValid()?
                <button type="btn btn-primary" onClick={e => {e.preventDefault(); addAnswer(body)}} className={"btn active btn-primary"}>Add Answer</button>
            :
            null
            }
            </form>
        </div>
        <ToastContainer />
      </div>
      <div className="col-sm-2"></div>
    </div> 
    : <h1 className="my-5 text-center fw-bolder">Loading ...</h1>
  );
};
export default QuestionInfo;
