import { useState } from "react";
import { Link } from "react-router-dom";
import "../questions_list_components/question.css"

const QuestionForm = ({submitQuestion}) => {

    const [title, setTitle] = useState("");

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const [body, setBody] = useState("");
    
    const updateBody = (e) => {
        setBody(e.target.value);
    }

    const [tags, setTags] = useState([]);

    const updateTags = (e) => {
        setTags(e.target.value.split(','));
    }

    const isValid = () => {
        return (title.length <= 10 ? true : false);
    }

    return (
        <form className="bg-white p-5 mb-5">
            <div class="mb-5">
                <label for="QuestionTitle" className="form-label fw-bold">Title</label> <br/>
                <label for="QuestionTitle" className="form-label small">Be specific and imagine you’re asking a question to another person</label>
                <input type="text" class="form-control" id="QuestionTitle" onChange={e => {e.preventDefault(); updateTitle(e)}} placeholder="e.g. How do you add item in a python list?"/>
                {isValid() ?
                <div class="alert alert-danger" role="alert">
                    Atleast 10 character for your title
                </div>
                :
                null
                }
            </div>

            <div class="mb-5">
                <label for="QuestionBody" className="form-label fw-bold">Body</label> <br/>
                <label for="QuestionBody" className="form-label small">Include all the information someone would need to answer your question</label>
                <textarea style={{height:'120px', resize:'none'}} type="text" onChange={e => {e.preventDefault(); updateBody(e)}} class="form-control" id="QuestionBody"/>
            </div>


            <div class="mb-3">
                <label for="QuestionTags" className="form-label fw-bold">Tags</label> <br/>
                <label for="QuestionTags" className="form-label small">Add upto a maximum of 5 tags (Seperated by a comma)</label>
                <input type="text" class="form-control" id="QuestionTags" onChange={e => {e.preventDefault(); updateTags(e)}} placeholder="e.g. java, c++"/>
            </div>
            <Link to={"/questions/page/1"} className={isValid() ? 'disabled-link' : ''}><button type="btn" onClick={e => {submitQuestion(title, body, tags)}} class={isValid() ? "btn disabled btn-primary" : "btn active btn-primary"}>Add Question</button></Link>
        </form>
    )
}

export default QuestionForm;