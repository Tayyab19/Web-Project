import profile_logo from "./profile_logo.png";
import logout_logo from "./logout_logo.png";
import question_logo from "./questionflag.png";
import list_logo from "./list_logo.png";
import MyQuestionsModal from "../profileComponents/myQuestionsModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

const Navbar = ({ renderLogin }) => {
  const [myQuestion, setMyQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchQuestion(e.target.searchInput.value);
    setMyQuestions(true);
  };

  const getSearchQuestion = async (searchTerm) => {
    await setQuestions([]);
    axios
      .get(`http://localhost:5000/questions/${searchTerm}`, {headers: {
        'Authorization': localStorage.getItem("token") 
      }}).then((response1) => { 
        setQuestions(response1.data.questions);
        axios
        .post("http://localhost:5000/questions/search/search",{searchTerm:searchTerm}, {headers: {
          'Authorization': localStorage.getItem("token") 
         }}).then((response) => { setQuestions(questions.concat(response.data.questions))})
        .catch((err) => {})
      })
        .catch((err) => {          
          axios
          .post("http://localhost:5000/questions/search/search",{searchTerm:searchTerm}, {headers: {
            'Authorization': localStorage.getItem("token") 
           }}).then((response) => { setQuestions(response.data.questions)})
          .catch((err) => {})})
        .finally(()=>{          })
  }

  return (
    <>
      {myQuestion && (
        <MyQuestionsModal
          questions={questions}
          setMyQuestions={setMyQuestions}
        />
        //Alternatively Delete Buttons if search performed from NavBar
        //Should redirect to Filter Page. Shoul Not Use MyQuestions Modal.
      )}
      <nav
        className="navbar navbar-expand-lg navbar-light row"
        style={{
          backgroundColor: "#e49b35",
          color: "white",
          position: "sticky",
          top: "0",
          zIndex: "100",
          width: "auto",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse col-4 col-md-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li className="nav-item mt-2" style={{ paddingLeft: "17px" }}>
                <Link to={`/profile/${localStorage.getItem("token")}`}>
                  <img
                    data-tip="Profile"
                    className="logo-icon"
                    src={profile_logo}
                    style={{ width: "40px" }}
                  />
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ paddingLeft: "13px", marginTop: "0px !important" }}
              >
                <Link to={"/questions/ask"}>
                  <img
                    className="logo-icon"
                    src={question_logo}
                    style={{ width: "50px" }}
                    data-tip="Ask a Question"
                  />
                </Link>
              </li>
              <li className="nav-item mt-2 " style={{ paddingLeft: "13px" }}>
                <Link to={"/syntaxes"}>
                  <img
                    className="logo-icon"
                    src={list_logo}
                    data-tip="View Syntax List"
                    style={{ width: "40px" }}
                  />
                </Link>
              </li>
              <li className="nav-item mt-2" style={{ paddingLeft: "17px" }}>
                <Link to={"/"} onClick={(e) => renderLogin(false)}>
                  <img
                    className="logo-icon"
                    src={logout_logo}
                    style={{ width: "40px" }}
                    data-tip="Logout"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/questions"}
            className={
              "mx-5 fw-bolder text-dark p-1 text-center col-4 col-md-3"
            }
            style={{
              fontSize: "18px",
              textDecoration: "none",
              backgroundColor: "orange",
            }}
          >
            FAST FLOW
          </Link>
          <form
            className="d-flex justify-content-center col-3 col-md-4 mt-3 mt-md-0 mx-5 mx-md-0"
            style={{ width: "auto" }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "12em" }}
              id="searchInput"
            />
            <button
              className="btn btn-outline-dark mx-2"
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* <ReactTooltip effect="solid" place="bottom" /> */}
    </>
  );
};

export default Navbar;
