import {Link} from 'react-router-dom'
import Footer from "../globalComponent/footer";
import QuestionForm from './question_form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddQuestion = ({username}) => {

    const makeQuestionObject = async (title, body, tags, radioValue) => {
        const q = {
            "title": title,
            "body": body,
            "tags": tags,
            "username": username.name,
            "reputation": username.reputation,
            "private": radioValue,
            "archive": false,
            "invited": [],
        };
        await axios.post("http://localhost:5000/questions", q).then(res => {
            toast.success('Question Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }).catch(err => {
            toast.error('Error While Adding Question', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })});
        
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
                    {/* Same as */
                        <QuestionForm submitQuestion={makeQuestionObject}/>
                    }
                <ToastContainer />
                
            </div>
            <Footer />
        </div>
    )
    
}

export default AddQuestion;