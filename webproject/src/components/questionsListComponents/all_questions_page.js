import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "./question_card";
import Filter from "./filter";
import { Link } from "react-router-dom";
import Footer from "../globalComponent/footer";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const AllQuestionPage = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [isFilter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const getTags = () => {
    let tags = [];
    questions.forEach((q) => {
      tags = tags.concat(q.tags);
    });

    tags = [...new Set(tags)];
    return tags;
  };

  const applyFilter = (selectedTags) => {
    selectedTags.length > 0
      ? setFilteredQuestions(
          questions.filter((q) => {
            return q.tags.some((tag) => selectedTags.includes(tag));
          })
        )
      : setFilteredQuestions(questions);
  };


  const getQuestions = () => {
    console.log(id);
    if(id){
      localStorage.setItem("token",id);
    }
    axios
      .get(`http://localhost:5000/questions/infintescrollquestions/0`, {headers: {
        'Authorization': localStorage.getItem("token") 
      }})
      .then((response) => {
        setTotalQuestions(response.data.totalQuestions);
        setQuestions(response.data.questions);
        setFilteredQuestions(response.data.questions);
      })
      .catch((err) => alert("Error While Retrieving Questions"))
      .finally(() => setLoading(true));
  };

  const fetchMoreData = async () => {
    axios
    .get(`http://localhost:5000/questions/infintescrollquestions/${pageNumber}`, {headers: {
      'Authorization': localStorage.getItem("token") 
    }})
    .then((response) => {
        setQuestions([...questions, ...response.data.questions]);
        setFilteredQuestions([...filteredQuestions, ...response.data.questions]);
        setLoading(false);
        setPageNumber(pageNumber + 1);
    })
    .catch((err) => {console.log(err);} ).finally(() => {if (!loading) setLoading(true)});
  }

  useEffect(() => {
    if (loading)
      getQuestions();
  }, []);

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
            <h1 className="text-start" style={{ fontSize: "30px" }}>
              All Questions
            </h1>
            <Link to={"/questions/ask"}>
              <button className="btn btn-primary d-flex justify-content-end">
                Ask Question
              </button>
            </Link>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between">
            <p className="text-start" style={{ fontSize: "24px" }}>
              {filteredQuestions.length} questions
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFilter(!isFilter);
              }}
              className="btn btn-outline-secondary d-flex justify-content-end"
              style={{ height: "40px", fontWeight: "bold" }}
            >
              {isFilter ? "Remove Filter" : "Filter"}
            </button>
          </div>
        </div>

        {isFilter ? (
          <Filter getTags={getTags} applyFilter={applyFilter} />
        ) : null}

        <hr />

        <InfiniteScroll
          dataLength={filteredQuestions.length}
          prefill={true}
          next={fetchMoreData}
          hasMore={filteredQuestions.length < totalQuestions}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
          {
            
            filteredQuestions?.map((question, index) => {
              return (
                <div className="container mb-2" style={{ padding: "3px" }}>
                  <QuestionCard key={question.question_id} question={question} />
                  <hr />
                </div>
              )
            }) 
          }
          </div>
        </InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
};

export default AllQuestionPage;
