import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllQuestionPage from "./components/questionsListComponents/all_questions_page";
import QuestionInfo from "./components/questionPageComponents/question_info";
import AddQuestion from "./components/addQuestionComponents/add_question";
import Profile from "./components/profileComponents/profile";
import Navbar from "./components/globalComponent/navbar";
import Login from "./components/loginComponents/Login";
import Signup from "./components/loginComponents/Signup";
import ForgotPassword from "./components/loginComponents/ForgotPassword";
import SyntaxNav from "./components/syntaxesComponents/SyntaxNav";
import NotFound from "./components/globalComponent/notFound";
import SignUpRedirect from "./components/loginComponents/SignupRedirect";
import ResetPassword from "./components/loginComponents/ResetPassword";

function App() {
  const verifyLogin = (accessToken) => {
    // setCurrUsername(returnedUser);
    // console.log(returnedUser);
    console.log(accessToken.accessToken);
    localStorage.setItem("token", accessToken.accessToken);
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
        <Routes>
          <Route path="/" element={<Login verifyLogin={verifyLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verify/:token" element={<SignUpRedirect />}/>
          <Route path="/resetPassword/:token" element={<ResetPassword />}/>
          <Route path="/syntaxes" element={<><Navbar getSearchQuestion={getSearchQuestion} /><SyntaxNav /></>} />
          <Route path="/questions" element={<><Navbar getSearchQuestion={getSearchQuestion} /><AllQuestionPage /></>}/>
          <Route path="/questions/question/:qID" element={<><Navbar getSearchQuestion={getSearchQuestion} /><QuestionInfo /></>}/>
          <Route path="/questions/ask" element={<><Navbar getSearchQuestion={getSearchQuestion} /><AddQuestion /></>}/>
          <Route path="/profile/:uID" element={<><Navbar getSearchQuestion={getSearchQuestion} /><Profile /></>}/>
          <Route path="/notFound" element={<><Navbar getSearchQuestion={getSearchQuestion} /><NotFound  /></>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;