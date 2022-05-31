import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllQuestionPage from "./questions_list_components/all_questions_page";
import QuestionInfo from "./question_page_components/question_info";
import AddQuestion from "./add_question_components/add_question";
import Profile from "./profile_components/profile";
import { useEffect, useState } from "react";
import Navbar from "./global_component/navbar";
import Login from "./login_components/Login";
import Signup from "./login_components/Signup";
import ForgotPassword from "./login_components/ForgotPassword";
import SyntaxNav from "./syntaxes_components/SyntaxNav";
import NotFound from "./global_component/notFound";
import SignUpRedirect from "./login_components/SignupRedirect";
import ResetPassword from "./login_components/ResetPassword";

function App() {
  const [renderLogin, setRenderLogin] = useState(false);

  const [currUsername, setCurrUsername] = useState({
    name: "",
  });

  const verifyLogin = (accessToken) => {
    // setCurrUsername(returnedUser);
    // console.log(returnedUser);
    console.log(accessToken.accessToken);
    localStorage.setItem("token", accessToken.accessToken);
    setRenderLogin(true);
    return true;
  };

  const getSearchQuestion = (searchTerm, questions) => {
    let myQuestions = [];
    for (const element of questions) {
      if (element.title.includes(searchTerm)) myQuestions.push(element);
    }
    return myQuestions;
  };

  return (
    <>
      <Router>
        {renderLogin && (
          <Navbar
            username={currUsername}
            renderLogin={renderLogin}
            getSearchQuestion={getSearchQuestion}
          />
        )}
        <Routes>
          <Route path="/" element={<Login verifyLogin={verifyLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {renderLogin && (
            <>
              <Route path="/syntaxes" element={<SyntaxNav />} />
              <Route
                path="/questions/page/:pageNumber"
                element={<AllQuestionPage />}
              />
              <Route
                path="/questions/question/:qID"
                element={<QuestionInfo username={currUsername} />}
              />
              <Route
                path="/questions/ask"
                element={
                  <AddQuestion
                    username={currUsername} //Will remove after jwt token is implemented
                  />
                }
              />
              <Route
                path="/profile/:uID"
                element={<Profile username={currUsername} />}
              />
              <Route
                path="/verify/:token"
                element={<SignUpRedirect />}
              />
              <Route
                path="/resetPassword/:token"
                element={<ResetPassword />}
              />
              <Route
                path="/notFound"
                element={<NotFound username={currUsername} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
