import { useState } from "react"
import { useParams } from "react-router-dom"

const QuestionInfo = ({getQuestion, username}) => {
    const { qID } = useParams(); 
    const [question, setQuestion] = useState(getQuestion(qID)[0])
    const [votes,increaseVotes] = useState(getQuestion(qID)[0].votes)

    return (
        <div class="row">
        <div class="col-sm-2"></div>
        <div class="Question col-sm-7 row" style={{paddingTop:'40px'}}>

            <div class="col-sm-2">
                <h5>{votes} People liked this</h5>  {/* question.votes to be updated */}
                <button onClick={() => increaseVotes(votes+1)}>Upvote</button>
            </div>
            <div class="col-sm-10">
                <h3>{question.title}</h3>
                <h6>{question.body}</h6>
            </div>
        </div>
        <div class="col-sm-3"></div>
        </div>
    )
}

export default QuestionInfo;