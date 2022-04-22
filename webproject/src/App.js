import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login_components/Login";
import AllQuestionPage from "./questions_list_components/all_questions_page";
import QuestionInfo from "./question_page_components/question_info";
import AddQuestion from "./add_question_components/add_question";
import Profile from "./profile_components/profile";
import { useEffect, useState } from "react";
import Navbar from "./global_component/navbar";

function App() {
  const [questions, setQuestions] = useState([
    {
      question_id: 1,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 3,
      views: 2,
    },
    {
      question_id: 2,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 2,
      views: 22,
    },
    {
      question_id: 3,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 4,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 5,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 0,
      views: 2,
    },
    {
      question_id: 6,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 7,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 8,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 9,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 0,
      views: 2,
    },
    {
      question_id: 10,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 11,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 12,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 13,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 0,
      views: 2,
    },
    {
      question_id: 14,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 15,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 16,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 17,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 0,
      views: 2,
    },
    {
      question_id: 18,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 19,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 20,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 21,
      title: "Why do we need to follow programming conventions?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: ["java", "php", "python"],
      username: "Rick Peters",
      reputation: 2,
      votes: 1,
      answers: 0,
      views: 2,
    },
    {
      question_id: 22,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 23,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Nick",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
    {
      question_id: 24,
      title: "What is MVC framework?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["java", "javascript", "python"],
      username: "Micheal",
      reputation: 12,
      votes: 4,
      answers: 1,
      views: 22,
    },
  ]);

  const [answers, setAnswers] = useState([
    {
      answer_id: 1,
      question_id: 1,
      votes: 7,
      username: "TenHang1", 
      string: "The answer is simple, it helps you to work in a team and people dont have to get angry with you and smash you over the head with things"
    },
    {
      answer_id: 2,
      question_id: 1,
      votes: 1,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 3,
      question_id: 1,
      votes: 3,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 4,
      question_id: 2,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 5,
      question_id: 2,
      votes: 4,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 6,
      question_id: 3,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 7,
      question_id: 4,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 8,
      question_id: 3,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 9,
      question_id: 5,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 10,
      question_id: 6,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 11,
      question_id: 7,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 12,
      question_id: 8,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 13,
      question_id: 9,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 14,
      question_id: 10,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 15,
      question_id: 11,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 16,
      question_id: 12,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 17,
      question_id: 13,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 18,
      question_id: 14,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 19,
      question_id: 15,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 20,
      question_id: 16,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 21,
      question_id: 17,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 22,
      question_id: 18,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 23,
      question_id: 19,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 24,
      question_id: 20,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 25,
      question_id: 21,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 26,
      question_id: 22,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 27,
      question_id: 23,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    },
    {
      answer_id: 28,
      question_id: 24,
      votes: 2,
      username: "TenHang1", 
      string: "Helps you to get ready for the industry and face new and upcoming challenges which have never been seen before"
    }

  ]);

  let [users, setUsers] = useState([
    {
      username: "BenHan1",
      firstName: "Ben",
      lastName: "Han",
      reputation: 190,
      badges: ["A", "B"],
      email: "benhan@gmail.com",
      addrress: "221-B Baker Street",
      linkedIn: "benhan12",
      gitHub: "benHan123",
      company: "Softec",
      preferredStack: "MERN",
    },
    {
      username: "TenHang1",
      firstName: "Ten",
      lastName: "Hang",
      reputation: 100,
      badges: ["A", "B", "C"],
      email: "tenhang@gmail.com",
      addrress: "221-B Baker Street",
      linkedIn: "tenHang12",
      gitHub: "tenHang123",
      company: "Softec",
      preferredStack: "MERN",
    },
    {
      username: "GenHang1",
      firstName: "Gen",
      lastName: "Hang",
      reputation: 200,
      badges: ["A", "B", "C", "D"],
      email: "genhang@gmail.com",
      addrress: "221-B Baker Street",
      linkedIn: "genHang12",
      gitHub: "genHang123",
      company: "Softec",
      preferredStack: "MERN",
    },
    {
      username: "WenHang1",
      firstName: "Wen",
      lastName: "Hang",
      reputation: 10,
      badges: ["B", "C"],
      email: "wenhang@gmail.com",
      addrress: "221-B Baker Street",
      linkedIn: "wenHang12",
      gitHub: "wenHang123",
      company: "Softec",
      preferredStack: "MERN",
    },
  ]);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const [filteredAnswers, setFilteredAnswers] = useState(answers);

  const [isFilter, setFilter] = useState(false);

  const getTags = () => {
    let tags = [];
    questions.forEach((q) => {
      tags = tags.concat(q.tags);
    });

    tags = [...new Set(tags)];
    return tags;
  };

  const currUsername = {
    name: "TenHang1",
    reputation: 112,
    votes: 22,
    answers: 11,
    views: 44,
  };

  const updateQuestion = (q) => {
    setQuestions(
      questions.map((question) => {
        //question.question_id == q.question_id ? q : question;
      })
    );
    setFilteredQuestions(questions);
  };

  const getQuestion = (id) => {
    const q = filteredQuestions.filter((q) => {
      return q.question_id == id;
    });
    return q;
  };

  const upVote = (qid) => {
    const q = questions.filter((a)=>{
      return a.question_id == qid
    })
    
    q[0].votes = q[0].votes+1;
    console.log(q[0])
    setQuestions(
      questions.map((a) => {
        return a.question_id === q.question_id? q : a;
      })
    );
    setFilteredQuestions(questions);
    return q;
  };

  const getAnswers = (qid) => {
    const ans = filteredAnswers.filter((a)=>{
      return (a.question_id == qid);
    })
    return ans;
  }

  const getUser = (id) => {
    for (const element of users) {
      if (element.username === id) return element;
    }
    return null;
  };

  const updateUser = (obj) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === obj.username) {
        users[i] = obj;
      }
    }
    console.log(obj);
  };

  const addQuestion = (q) => {
    setFilteredQuestions([...questions, q]);
    setQuestions([...questions, q]);
  };

  const addAnswer = (a) => {
    setFilteredAnswers([...answers,a]);
    setAnswers([...answers,a]);
    console.log(a);
  }

  const applyFilter = (selectedTags) => {
    selectedTags.length > 0
      ? setFilteredQuestions(
          questions.filter((q) => {
            return q.tags.some((tag) => selectedTags.includes(tag));
          })
        )
      : setFilteredQuestions(questions);
  };

  useEffect(() => {}, [filteredQuestions]);

  useEffect(() => {
    //isFilter ? null : setFilteredQuestions(questions);
  }, [isFilter]);

  return (
    <>
    <Router>
      <Navbar username={currUsername}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/questions/page/:pageNumber"
            element={
              <AllQuestionPage
                questions={filteredQuestions}
                username={currUsername}
                getTags={getTags}
                applyFilter={applyFilter}
                isFilter={isFilter}
                setFilter={setFilter}
              />
            }
          />
          <Route
            path="/questions/question/:qID"
            element={
              <QuestionInfo upVote={upVote} getAnswers={getAnswers} getQuestion={getQuestion} username={currUsername} addAnswer={addAnswer} answerID={+answers.length + +1} />
            }
          />
          <Route
            path="/questions/ask"
            element={
              <AddQuestion
                addQuestion={addQuestion}
                questionID={+questions.length + +1}
                username={currUsername}
              />
            }
          />
          <Route
            path="/profile/:uID"
            element={
              <Profile
                username={currUsername}
                getUser={getUser}
                updateUser={updateUser}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
