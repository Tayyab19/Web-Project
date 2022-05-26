import Footer from "../global_component/footer";
import profile_pic from "./download.jpg";
import "./profile.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChangePasswordModal from "./changePasswordModal";
import ChangePictureModal from "./changePictureModal";
import MyQuestionsModal from "./myQuestionsModal";

//ChangePassword and ChangeProfilePicture should be from App.js
const Profile = ({ username, getUser, updateUser, getQuestions }) => {
  const { uID } = useParams();
  let [userData, setUser] = useState(getUser(uID));
  const [changePassword, setChangePassword] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState(false);
  const [myQuestion, setMyQuestions] = useState(false);
  const [password, setPassword] = useState("a");
  const [picture, setPicture] = useState("b");

  const questions = getQuestions(uID);

  console.log(questions);
  //setPicture(profile_pic);
  //Redirect to 404 Not found

  useEffect(() => {
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
    console.log("Password: " + password);
    console.log(picture);
  });

  const handleUpdate = (value) => {
    setUser({ ...userData, [value.id]: value.value });
  };

  const handleSave = () => {
    updateUser(userData);
    console.log("Done");
  };

  const handleDiscard = () => {
    window.location.reload(false);
  };

  return (
    <>
      {changePassword && (
        <ChangePasswordModal
          setChangePassword={setChangePassword}
          setPassword={setPassword}
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
          picture={profile_pic}
          setChangeProfilePicture={setChangeProfilePicture}
          setPicture={setPicture}
        />
      )}
      <div class="container profile-page">
        <div class="row"></div>
        <div class="row">
          <div class="col-lg-2 col-sm-1"></div>
          <div class="col-md-12 col-lg-4 col-sm-10">
            {/* Fix Image */}
            <img
              class="profile-picture"
              src={profile_pic}
              onClick={() => {
                setChangeProfilePicture(true);
              }}
            />
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <label for="email">Email:</label>
            <input
              id="email"
              class="form-control"
              type="text"
              value={userData.email}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <label for="username">Username: </label>
            <input
              id="username"
              class="form-control"
              type="text"
              value={userData.username}
              disabled
            />
          </div>
          <div class="col-lg-2 col-sm-1"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="reputation">Reputation:</label>
            <input
              id="reputation"
              class="form-control"
              type="text"
              value={userData.reputation}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="badges">Badges:</label>
            <input
              id="badges"
              class="form-control"
              type="text"
              value={userData.Badges}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="firstName">First Name:</label>
            <input
              onChange={(e) => handleUpdate(e.target)}
              id="firstName"
              class="form-control disable"
              type="text"
              value={userData.firstName}
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="lastName">Last Name:</label>
            <input
              id="lastName"
              class="form-control  disable"
              type="text"
              value={userData.lastName}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-sm-4 col-md-4">
            <br />
            <button
              class="btn btn-outline-primary remove"
              onClick={(e) => {
                e.preventDefault();
                setChangePassword(true);
              }}
            >
              Change Password
            </button>
          </div>
          <div class="col-sm-8 col-md-8 col-lg-6">
            <label for="invites">Invites to Answer:</label>
            {/* Handle List */}
            <select
              class="form-select  remove"
              aria-label="Answer Invites"
              id="invites"
              onChange={(e) => handleUpdate(e.target)}
            >
              <option defaultValue>Question Title</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="linkedIn">LinkedIn Address:</label>
            <input
              id="linkedIn"
              class="form-control  disable"
              type="text"
              value={userData.linkedIn}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="gitHub">GitHub Handle:</label>
            <input
              id="gitHub"
              class="form-control  disable"
              type="text"
              value={userData.gitHub}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="company">Company:</label>
            <input
              id="company"
              class="form-control  disable"
              type="text"
              value={userData.company}
              onChange={(e) => handleUpdate(e.target)}
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="stack">Preferred Stack:</label>
            <select
              class="form-select  disable"
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
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-2 col-md-4 col-sm-4 col-4">
            <button class="btn btn-outline-primary remove" onClick={handleSave}>
              Save Changes
            </button>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4 col-4">
            <button
              class="btn btn-outline-dark  remove"
              onClick={handleDiscard}
            >
              Discard Changes
            </button>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4 col-4">
            <button
              class="btn btn-outline-dark  remove"
              onClick={(e) => {
                e.preventDefault();
                setMyQuestions(true);
              }}
            >
              My Questions
            </button>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
