import Footer from "../global_component/footer";
import "./profile.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChangePasswordModal from "./changePasswordModal";
import ChangePictureModal from "./changePictureModal";
import MyQuestionsModal from "./myQuestionsModal";
import axios from "axios";

//ChangePassword and ChangeProfilePicture should be from App.js
const Profile = ({ username }) => {
  const getUser = async (username) => {
    axios({
      method: "get",
      url: `http://localhost:5000/users/profile/${username}`,
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setUser(response.data);
        setUserFetched(true);
        setPicture(response.data.profilePhoto);
      })
      .catch((err) => {
        if (err.response.status == 404) navigate("/notFound");
        console.log(err);
      });
  };

  const setPicture = async (base64) => {
    let newUserData = userData;
    newUserData.profilePhoto = base64;

    axios({
      method: "patch",
      url: `http://localhost:5000/users/profile/edit`,
      Headers: { "Content-Type": "application/json" },
      data: newUserData,
    }).catch((err) => {
      console.log(err);
    });
  };

  const navigate = useNavigate();

  const updateUser = (newUserData) => {
    axios({
      method: "patch",
      url: `http://localhost:5000/users/profile/edit`,
      Headers: { "Content-Type": "application/json" },
      data: newUserData,
    }).catch((err) => {
      console.log(err);
    });
  };

  const getQuestions = (username) => {
    axios({
      method: "get",
      url: `http://localhost:5000/questions/${username}`,
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setQuestions(response.data);
        setQuestionsFetched(true);
      })
      .catch((err) => {
        if (err.response.status == 404) navigate("/notFound");
        console.log(err);
      });
  };

  const { uID } = useParams();
  let [userData, setUser] = useState([]);
  const [changePassword, setChangePassword] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState(false);
  const [myQuestion, setMyQuestions] = useState(false);
  const [userFetched, setUserFetched] = useState(false);
  const [questionsFetched, setQuestionsFetched] = useState(false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!userFetched) getUser(uID);

    if (username.name != uID) {
      let classList = $(".disable");
      for (const element of classList) {
        element.setAttribute("disabled", "");
      }
      classList = $(".remove");
      for (const element of classList) {
        element.remove();
      }
    }
  }, []);

  useEffect(() => {
    getQuestions(uID);
  }, []);

  const handleUpdate = (value) => {
    setUser({ ...userData, [value.id]: value.value });
  };

  const handleSave = () => {
    updateUser(userData);
  };

  const handleDiscard = () => {
    getUser(uID);
  };

  return (
    <>
      {changePassword && (
        <ChangePasswordModal
          setChangePassword={setChangePassword}
          username={username}
        />
      )}
      {myQuestion && (
        <MyQuestionsModal
          questions={questions}
          setMyQuestions={setMyQuestions}
        />
      )}
      {changeProfilePicture && username.name == uID && (
        <ChangePictureModal
          picture={userData.profilePhoto}
          setChangeProfilePicture={setChangeProfilePicture}
          setPicture={setPicture}
        />
      )}
      <div className="container profile-page">
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-2 col-sm-1"></div>
          <div className="col-md-12 col-lg-4 col-sm-10">
            {/* Fix Image */}
            <img
              className="profile-picture"
              src={userData.profilePhoto}
              onClick={() => {
                setChangeProfilePicture(true);
              }}
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label for="email">Email:</label>
            <input
              id="email"
              className="form-control"
              type="text"
              value={userData.email}
              disabled
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label for="username">Username: </label>
            <input
              id="username"
              className="form-control"
              type="text"
              value={userData.username}
              disabled
            />
          </div>
          <div className="col-lg-2 col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2 col-md-3 col-sm-3">
            <label for="reputation">Reputation:</label>
            <input
              id="reputation"
              className="form-control"
              type="text"
              value={userData.reputation}
              disabled
            />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3">
            <label for="badges">Badges:</label>
            <input
              id="badges"
              className="form-control"
              type="text"
              value={userData.badges}
              disabled
            />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3">
            <label for="firstName">First Name:</label>
            <input
              onChange={(e) => handleUpdate(e.target)}
              id="firstName"
              className="form-control disable"
              type="text"
              value={userData.firstName}
            />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3">
            <label for="lastName">Last Name:</label>
            <input
              id="lastName"
              className="form-control  disable"
              type="text"
              value={userData.lastName}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2 col-sm-4 col-md-4">
            <br />
            <button
              className="btn btn-outline-primary remove"
              onClick={(e) => {
                e.preventDefault();
                setChangePassword(true);
              }}
            >
              Change Password
            </button>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-6 remove">
            <label for="invites">Invites to Answer:</label>
            {/* Handle List */}
            <select
              className="form-select"
              aria-label="Answer Invites"
              id="invites"
              onChange={(e) => handleUpdate(e.target)}
            >
              <option defaultValue>
                {userData.invites && userData.invites[0]}
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <label for="linkedInHandle">LinkedIn Address:</label>
            <input
              id="linkedInHandle"
              className="form-control  disable"
              type="text"
              value={userData.linkedInHandle}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <label for="githubHandle">GitHub Handle:</label>
            <input
              id="githubHandle"
              className="form-control  disable"
              type="text"
              value={userData.githubHandle}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <label for="company">Company:</label>
            <input
              id="company"
              className="form-control  disable"
              type="text"
              value={userData.company}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <label for="stack">Preferred Stack:</label>
            <select
              className="form-select  disable"
              aria-label="Preferred Stack"
              id="stack"
              onChange={(e) => handleUpdate(e.target)}
            >
              <option defaultValue>{userData.preferredStack}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4">
            <button
              className="btn btn-outline-primary remove"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4">
            <button
              className="btn btn-outline-dark  remove"
              onClick={handleDiscard}
            >
              Discard Changes
            </button>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-4">
            <button
              className="btn btn-outline-dark  remove"
              onClick={(e) => {
                e.preventDefault();
                setMyQuestions(true);
              }}
            >
              My Questions
            </button>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
