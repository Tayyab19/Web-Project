import { useEffect, useReducer, useState } from "react"
import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
import { useParams } from "react-router-dom"
import AnswerInfo from "./answer_info";
import { Link } from "react-router-dom";
import { OverlayTrigger } from "react-bootstrap";

const QuestionInfo = ({upVoteForAnswers, upVote,getAnswers,getQuestion, username,addAnswer, answerID}) => {
    const { qID } = useParams(); 
    const [question, setQuestion] = useState(getQuestion(qID)[0])
    const [votes,increaseVotes] = useState(getQuestion(qID)[0].votes)
    const [answers, setAnswers] = useState(getAnswers(qID))
    //const [votes, setVote] = useState(upVote(qID)) This line isnt working, turning full screen white
    const [body, setBody] = useState("");
    const updateBody = (e) => {
        setBody(e.target.value);
    }

    const setVote = (qID) => {
        const q = upVote(qID);
        return q.votes;
    };

    const setAnswerVote = (aID, votes) => {
        upVoteForAnswers(aID, votes);
    };

    const submitAnswer = (body) => {
        const a = {
        "answer_id": answerID,
        "question_id": parseInt(qID, 10),
        "votes": 0,
        "username": username.name, 
        "string": body
        }
        addAnswer(a);
        setAnswers([...answers, a]);
    }; 


    return (
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="Question col-sm-7 row" style={{paddingTop:'40px'}}>

            <div className="col-sm-2" style={{textAlign:"center"}}>
                <h5>{question.votes} People liked this</h5>  {/* question.votes to be updated */}
                <button className="btn btn-primary" style={{width:'100%'}} onClick={() => {setVote(qID);}}>Upvote</button>
            </div>
            <div className="col-sm-10">
                <h3>{question.title}</h3>
                <h6>{question.body}</h6>
            </div>
            <hr></hr><br></br><br></br><br></br>
            <h4>Answers:</h4><br></br><br></br>

            {
                answers?.map((answer) => {
                    return(
                    <div className="container" style={{padding: '5px'}}>
                        <br></br>
                            <AnswerInfo key={answer.answer_id} answer={answer} upVoteForAnswers={setAnswerVote}/>
                            <br></br>
                        <hr />
                    </div>
                    )
                })
                
            }
            
            <form className="bg-white p-5 mb-5">
            <h6>Add New Comment:</h6>
            <div class="mb-5">
                <label for="QuestionBody" className="form-label fw-bold">Body</label> <br/>
                <label for="QuestionBody" className="form-label small">Include all the information someone would need to answer your question</label>
                <input style={{lineHeight: "8em"}} type="text" onChange={e => { updateBody(e);}} class="form-control" id="QuestionBody"/>
            </div>
                <button type="btn btn-primary" onClick={e => {e.preventDefault(); submitAnswer(body)}} className={"btn active btn-primary"}>Add Answer</button>
            </form>
        </div>
        <div className="col-sm-3"></div>
        </div>
    )
}

export default QuestionInfo;