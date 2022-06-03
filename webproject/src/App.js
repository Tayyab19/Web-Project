import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllQuestionPage from "./components/questionsListComponents/all_questions_page";
import QuestionInfo from "./components/questionPageComponents/question_info";
import AddQuestion from "./components/addQuestionComponents/add_question";
import Profile from "./components/profileComponents/profile";
import { useEffect, useState } from "react";
import Navbar from "./components/globalComponent/navbar";
import Login from "./components/loginComponents/Login";
import Signup from "./components/loginComponents/Signup";
import ForgotPassword from "./components/loginComponents/ForgotPassword";
import SyntaxNav from "./components/syntaxesComponents/SyntaxNav";
import NotFound from "./components/globalComponent/notFound";
import SignUpRedirect from "./components/loginComponents/SignupRedirect";
import ResetPassword from "./components/loginComponents/ResetPassword";

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
          <Route path="/verify/:token" element={<SignUpRedirect />}/>
          <Route path="/resetPassword/:token" element={<ResetPassword />}/>
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