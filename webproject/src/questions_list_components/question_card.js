import './question.css'
import {Link} from 'react-router-dom'

const QuestionCard = ({question}) => {

    return (
        <div className='row'>
            <div className="col-12 col-md-2 text-end">
                <div className="d-md-none row">
                    <p className='questionText'>{question.votes} votes  {question.votes} votes  {question.views} views</p>
                </div>
                <div className="d-none d-md-flex row">
                    <p className='questionText'>{question.votes} votes</p>
                </div>
                <div className="d-none d-md-flex row">
                    <p className='questionText'>{question.answers} answers</p>
                </div>
            </div>
            <div className='col-12 col-md-10 row'>

                <div className="col-12">
                    <Link className='titleLink' to={`/questions/question/${question.question_id}`}>{question.title}</Link>
                </div>

                <div className="col-12">
                    <p className='questionText bodyText'>{question.body}</p>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        {
                            question.tags.map(tag => {
                                return (<span className='mx-1' style={{fontSize:'12px', backgroundColor:'#ADD8E6', padding:'6px'}}>{tag}</span>)
                            })
                        }
                    </div>
                    <div className='col-2'>
                        <p style={{fontWeight:'bolder', fontSize:'12px'}}>
                            <Link className='usernameLink' to={`/profile/${question.username}`}>{question.username}</Link> {question.reputation}
                        </p>
                    </div>
                </div>

            </div>

            

        </div>
    )
}

export default QuestionCard;