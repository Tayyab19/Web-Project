import { useState } from "react"
import { useParams } from "react-router-dom"

const AnswerInfo = ({answer}) => {
    return(
        <div className="row">
            <div className="answerButton col-sm-2" style={{textAlign:"center"}}>
                <p>{answer.votes} likes</p>
                <button className="btn btn-primary">upvote</button>
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