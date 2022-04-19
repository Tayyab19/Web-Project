import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './login_components/Login';
import AllQuestionPage from './questions_list_components/all_questions_page';
import { useState } from 'react';
import QuestionInfo from './question_page_components/question_info';
import AddQuestion from './add_question_components/add_question';

function App() {

  const [questions, setQuestions] = useState([
    {
        "question_id": 1,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 2,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 3,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 4,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 5,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 6,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 7,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 8,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 9,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 10,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 11,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 12,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 13,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 14,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 15,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 16,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 17,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 18,
       "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 19,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 20,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 21,
        "title": "Why do we need to follow programming conventions?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "tags": ['java', 'php', 'python'],
        "username": 'Rick Peters',
        "reputation": 2,
        "votes": 1,
        "answers": 0,
        "views": 2
    },
    {
        "question_id": 22,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 23,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Nick',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    },
    {
        "question_id": 24,
        "title": "What is MVC framework?",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "tags": ['java', 'javascript', 'python'],
        "username": 'Micheal',
        "reputation": 12,
        "votes": 4,
        "answers": 1,
        "views": 22
    }
])

  const currUsername = {
    "name": "Ten Hag",
    "reputation": 112,
    "votes": 22,
    "answers": 11,
    "views": 44
  };

  const updateQuestion = (q) => {
    setQuestions(questions.map(question => {
      question.question_id == q.question_id ? q : question;
    }));
  }

  const getQuestion = (id) => {
    const q = questions.filter(q => {
      return (q.question_id == id)
    });
    return q;
  }

  const addQuestion = (q) => {
    setQuestions([...questions, q]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/questions/page/:pageNumber" element={<AllQuestionPage questions={questions} username={currUsername} />} />
        <Route path="/questions/question/:qID" element={<QuestionInfo getQuestion={getQuestion} username={currUsername} />} />
        <Route path="/questions/ask" element={<AddQuestion addQuestion={addQuestion} questionID={+questions.length+ +1} username={currUsername} />} />
      </Routes>
    </Router>
  );
}

export default App;
