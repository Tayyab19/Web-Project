import { useEffect, useState } from "react";
import QuestionCard from "./question_card";
import Filter from "./filter";
import {Link} from 'react-router-dom'
import Pagination from "./pagination";
import Footer from "../global_component/footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const AllQuestionPage =  () => {
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    const [isFilter, setFilter] = useState(false);
    const [loading, setLoading] = useState(false);
    const [questionsPerPage, setQuestionsPerPage] = useState(15);
    const { pageNumber } = useParams();

    const getTags = () => {
        let tags = [];
        questions.forEach((q) => {
          tags = tags.concat(q.tags);
        });
    
        tags = [...new Set(tags)];
        return tags;
    }

    const applyFilter = (selectedTags) => {
        selectedTags.length > 0
          ? setFilteredQuestions(
              questions.filter((q) => {
                return q.tags.some((tag) => selectedTags.includes(tag));
              })
            )
          : setFilteredQuestions(questions);
    }

    const getQuestions = () => {
        axios.get("http://localhost:5000/questions").then(questions => {
            setQuestions(questions.data);
            setFilteredQuestions(questions.data);
        }).catch(err => alert("Error While Retrieving Questions")).finally(() => setLoading(true));
    } 

    useEffect(()=>{ getQuestions(); }, []);

    useEffect(() => {
        if (!isFilter) {
          setFilteredQuestions(questions);
        }
      }, [isFilter]);

    return (
        <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <h1 className="text-start" style={{fontSize: '30px'}}>All Questions</h1>
                    <Link to={'/questions/ask'}><button className="btn btn-primary d-flex justify-content-end">Ask Question</button></Link>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 d-flex justify-content-between">
                    <p className="text-start" style={{fontSize: '24px'}}>{filteredQuestions.length} questions</p>
                    <button onClick={e => {e.preventDefault(); setFilter(!isFilter)}} className="btn btn-outline-secondary d-flex justify-content-end" style={{height: '40px', fontWeight:'bold'}} >{isFilter ? "Remove Filter" : "Filter"}</button>
                </div>
            </div>

            {
                isFilter ? <Filter getTags={getTags} applyFilter={applyFilter} /> : null
            }


            <hr />

            {console.log(questions)}
            {
                loading  ? filteredQuestions?.map((question, index) => {
                    return(
                            ( index >= questionsPerPage * (pageNumber-1) && index <= questionsPerPage * pageNumber ?
                            <div className="container mb-2" style={{padding: '3px'}}>
                                    <QuestionCard key={question.question_id} question={question}/>
                                <hr />
                            </div>
                            :
                            null
                            )
                        )
                    }) :    
                            <h1 className="my-5 text-center fw-bolder">Loading ...</h1>
            }

            <div className="row mb-5">
                <div className="col-6">
                    <Pagination pageNumber={pageNumber} totalPages={Math.ceil(filteredQuestions.length/questionsPerPage)}/>
                </div>

                <div className="col-6 d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-sm">

                        <li className= "page-item mx-1"><Link to={'/questions/page/1'}><button onClick={(e) => {setQuestionsPerPage(15)}} className= {questionsPerPage === 15 ? "btn bg-primary text-white" : "btn bg-secondary text-white"} >15</button></Link></li>
                        <li className="page-item mx-1"><Link to={'/questions/page/1'}><button onClick={(e) => {setQuestionsPerPage(30)}} className= {questionsPerPage === 30 ? "btn bg-primary text-white" : "btn bg-secondary text-white"} >30</button></Link></li>
                        <li className="page-item mx-1"><Link to={'/questions/page/1'}><button onClick={(e) => {setQuestionsPerPage(50)}} className= {questionsPerPage === 50 ? "btn bg-primary text-white" : "btn bg-secondary text-white"}>50</button></Link></li> 
                        <p className="mx-1 mt-1" style={{fontWeight:'bold'}}>per page</p>
                        
                    </ul>
                </nav>
                </div>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default AllQuestionPage;