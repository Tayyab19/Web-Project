import {Link} from 'react-router-dom'
import Footer from "../global_component/footer";
import QuestionForm from './question_form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateReputation} from '../utlis'


const AddQuestion = ({}) => {

    const sendInvites = (invited,qid) => {
        axios.post('http://localhost:5000/users/addQuestionToList',{userList:invited,qid:qid})
        .then(()=>{console.log('success')})
    }

    const checkAskedBadge = (count) => {
        let val = '';
        if (count==1)
            val = 'asked1'
        else if (count==5)
            val = 'asked5'

        if (val!='')
            axios.patch("http://localhost:5000/users/addBadge", {badge:val},{headers: {
                'Authorization': localStorage.getItem("token") 
                }})
    }

    const makeQuestionObject = async (title, body, tags, invites, radioValue) => {
        const q = {
            "title": title,
            "body": body,
            "tags": tags,
            "private": radioValue,
            "archive": false,
            "invited": invites,
        };
        await axios.post("http://localhost:5000/questions", q, {headers: {
            'Authorization': localStorage.getItem("token") 
          }}).then(res => {
            toast.success('Question Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                console.log(res);
                console.log(q)
            if (radioValue)
                sendInvites(q.invited, res.data._id)
            console.log(res.data.count)
            checkAskedBadge(res.data.userCount);
            //Has Problems
            //updateReputation(res.data.username, 3);
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