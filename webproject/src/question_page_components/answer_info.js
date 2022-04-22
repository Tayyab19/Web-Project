import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const AnswerInfo = ({answer, upVoteForAnswers}) => {
    const [currAnsVote, setCurrAnsVote] = useState(answer.votes);

    useEffect(() => {
        upVoteForAnswers(answer.answer_id ,currAnsVote)
    }, [currAnsVote]);

    return(
        <div className="row">
            <div className="answerButton col-sm-2" style={{textAlign:"center"}}>
                <p>{currAnsVote} likes</p>
                <button onClick={e => {e.preventDefault(); setCurrAnsVote(currAnsVote + 1)}} className="btn btn-primary">Like</button>
            </div>
            <div className="col-sm-10" style={{
                display:"flex",
                alignItems:"center"
            }}>
                {answer.string}
            </div>
        </div>
    )
}
export default AnswerInfo;