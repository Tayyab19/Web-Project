import {Link} from 'react-router-dom'
import Footer from "../global_component/footer";
import QuestionForm from './question_form';

const AddQuestion = ({addQuestion, questionID, username}) => {

    const makeQuestionObject = (title, body, tags) => {
        const q = {
            "question_id": questionID,
            "title": title,
            "body": body,
            "tags": tags,
            "username": username.name,
            "reputation": username.reputation,
            "votes": username.votes,
            "answers": username.answers,
            "views": username.views
        };
        addQuestion(q);
    }

    return (
        <div>
            <div className="container mt-4">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-between">
                        <h1 className="text-start" style={{fontSize: '30px'}}>Ask a public question</h1>
                        <Link to={'/questions/page/1'}><button className="btn btn-primary d-flex justify-content-end">Back to Questions</button></Link>
                    </div>
                </div>
                <QuestionForm submitQuestion={makeQuestionObject}/>
            </div>
            <Footer />
        </div>
    )
    
}

export default AddQuestion;