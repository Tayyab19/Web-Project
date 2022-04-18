import { useState } from "react"
import { useParams } from "react-router-dom"

const QuestionInfo = ({getQuestion}) => {
    const { qID } = useParams(); 
    const [question, setQuestion] = useState(getQuestion(qID)[0])

    return (
        <div>
            <h3>{question.title}</h3>
            <h6>{question.body}</h6>
        </div>
    )
}

export default QuestionInfo;