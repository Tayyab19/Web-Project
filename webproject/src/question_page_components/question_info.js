import { useState } from "react"
import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
import { useParams } from "react-router-dom"
import AnswerInfo from "./answer_info";

const QuestionInfo = ({upVote,getAnswers,getQuestion, username}) => {
    const { qID } = useParams(); 
    const [question, setQuestion] = useState(getQuestion(qID)[0])
    const [votes,increaseVotes] = useState(getQuestion(qID)[0].votes)
    const [answers, setAnswers] = useState(getAnswers(qID))
    //const [votes, setVote] = useState(upVote(qID)) This line isnt working, turning full screen white

    const setVote2 = (qID) => {
        const q = upVote(qID);
        return q.votes;
    };

    return (
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="Question col-sm-7 row" style={{paddingTop:'40px'}}>

            <div className="col-sm-2" style={{textAlign:"center"}}>
                <h5>{question.votes} People liked this</h5>  {/* question.votes to be updated */}
                <button className="btn btn-primary" style={{width:'100%'}} onClick={() => setVote2(qID)}>Upvote</button>
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
                            <AnswerInfo key={answer.answer_id} answer={answer}/>
                            <br></br>
                        <hr />
                    </div>
                    )
                })
                
            }
        </div>
        <div className="col-sm-3"></div>
        </div>
    )
}

export default QuestionInfo;