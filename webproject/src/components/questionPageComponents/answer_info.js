import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import {updateReputation} from '../../utlis'

const AnswerInfo = ({answer, username}) => {
    const [currAnsVote, setCurrAnsVote] = useState(answer.votes);
    const [isLiked, setIsLiked] = useState(false);

    const setAnswerVote = () => {
        setCurrAnsVote(currAnsVote + 1); 
        setIsLiked(true);
        axios.put(`http://localhost:5000/answers/${answer._id}`, {...answer, votes: answer.votes + 1, username_of_voters: [...answer.username_of_voters, username]},{headers: {
            'Authorization': localStorage.getItem("token") 
          }}).then(response => {
            console.log("Updated");
            updateReputation(answer.username, 1);
        }).catch(err => alert(err))
    };

    useEffect(() => {
        answer.username_of_voters.forEach(user => {
            console.log(username);
            if(user === username){
                setIsLiked(true);
            }
        })
    }, [])

    return(
        <div className="row">
            <div className="answerButton col-sm-2" style={{textAlign:"center"}}>
                <p>{currAnsVote} likes</p>
                <button onClick={e => {e.preventDefault(); setAnswerVote()}} className="btn btn-primary" disabled={isLiked}>Like</button>
            </div>
            <div className="col-sm-10" style={{
                display:"flex",
                alignItems:"center"
            }}>
                {answer.body}
            </div>
            <div style={{display:"flex",justifyContent:"right"}}>
                <p><i>~{answer.username}</i></p>
            </div>
        </div>
    )
}
export default AnswerInfo;