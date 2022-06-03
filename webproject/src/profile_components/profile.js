import Footer from "../global_component/footer";
import "./profile.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChangePasswordModal from "./changePasswordModal";
import ChangePictureModal from "./changePictureModal";
import MyQuestionsModal from "./myQuestionsModal";
import axios from "axios";

const Profile = ({ }) => {
  const getUser = async (username) => {
    axios({
      method: "get",
      url: `http://localhost:5000/users/profile/${username}`,
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setUser(response.data);
        setPicture(response.data.profilePhoto);
        getQuestions(response.data.username);
        setBadges(response.data.badges)
      })
      .catch((err) => {
        if (err.response.status == 404) navigate("/notFound");
        console.log(err);
      });
  };

  const getMyUser = async () => {
    //await fetch({url:`http://localhost:5000/users/myProfile`,headers:{'Authorization': localStorage.getItem("token"),method:'get' }})
    axios.get(`http://localhost:5000/users/myProfile`,{headers: {
      'Authorization': localStorage.getItem("token") 
    }})
      .then((response) => {
        setUser(response.data);
        setPicture(response.data.profilePhoto);
        setMyAccount(true);
        getMyQuestions();
        getInvitedQuestions(response.data.invites);
        setBadges(response.data.badges)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getInvitedQuestions = async (inviteList) =>{
      await axios.post('http://localhost:5000/questions/getListQuestion',{_idList : inviteList})
      .then((response)=>{setInviteQuestions(response.data.questions); console.log(response.data.questions)})
      .catch((err)=>{console.log(err)})
  }

  const setPicture = async (base64) => {
    let newUserData = userData;
    newUserData.profilePhoto = base64;

    await axios.patch(`http://localhost:5000/users//profile/edit`,newUserData,{headers: {
      'Authorization': localStorage.getItem("token") 
    }}).catch((err) => {
      console.log(err);
    });
  };

  const navigate = useNavigate();

  const updateUser = async (newUserData) => {
    await axios.patch(`http://localhost:5000/users//profile/edit`,newUserData,{headers: {
      'Authorization': localStorage.getItem("token") 
    }}).catch((err) => {
      console.log(err);
    });
  };

  const getQuestions = (username) => {
    axios.get(`http://localhost:5000/questions/${username}`,{headers: {
      'Authorization': localStorage.getItem("token") 
    }})
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMyQuestions = () => {
    axios.get(`http://localhost:5000/questions/myQuestions/thisUser`,{headers: {
      'Authorization': localStorage.getItem("token") 
    }})
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { uID } = useParams();
  let [userData, setUser] = useState([]);
  const [changePassword, setChangePassword] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState(false);
  const [myQuestion, setMyQuestions] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  const [viewInvites,setViewInvites] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [inviteQuestions, setInviteQuestions] = useState([])
  const [myBadges, setBadges] = useState([])
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if (!loading){
      setLoading(true);
      if (localStorage.getItem('token') === uID){
        getMyUser();
      }
      else{
          getUser(uID);

          let classList = $(".disable");
          for (const element of classList) {
            element.setAttribute("disabled", "");
          }
          classList = $(".remove");
          for (const element of classList) {
            element.remove();
      }
  }
  }
  }, []);

  const handleUpdate = (value) => {
    setUser({ ...userData, [value.id]: value.value });
  };

  const handleSave = () => {
    updateUser(userData);
  };

  const handleDiscard = () => {
    getUser(userData.username);
  };

  return (
    <>
      {changePassword && (
        <ChangePasswordModal
          setChangePassword={setChangePassword}
        />
      )}
      {myQuestion && (
        <MyQuestionsModal
          questions={questions}
          setMyQuestions={setMyQuestions}
          myAccount={myAccount}
        />
      )}
      {changeProfilePicture && myAccount == true && (
        <ChangePictureModal
          picture={userData.profilePhoto}
          setChangeProfilePicture={setChangeProfilePicture}
          setPicture={setPicture}
        />
      )}
      {viewInvites && myAccount && (
        <MyQuestionsModal
          questions={inviteQuestions}
          setMyQuestions={setViewInvites}
        />
      )}
      <div className="container profile-page">
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-2 col-sm-1"></div>
          <div className="col-md-12 col-lg-4 col-sm-10">
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
            <div id='addBadge'>
              {myBadges.map((val,index) => {
              return (
              <>
              {console.log(require('./' + val + '.png'))}
              <img src={require('./' + val + '.png')} key={index} style={{ height: '40px', width: '40px' }} alt='Text' />
              </>
            )})}
            </div>
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
          <div className="col-lg-3 col-sm-5 col-md-5">
            <br />
            <button
              className="btn btn-outline-primary remove"
              style={{float:'right'}}
              onClick={(e) => {
                e.preventDefault();
                setChangePassword(true);
              }}
            >
              Change Password
            </button>
          </div>
          <div className="col-lg-3 col-sm-5 col-md-5">
            <br />
            <button
              className="btn btn-outline-primary remove"
              onClick={(e) => {
                e.preventDefault();
                setViewInvites(true);
              }}
            >
              View Invites
            </button>
          </div>
          <div className="col-lg-3"></div>
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
              className="btn btn-outline-dark"
              onClick={(e) => {
                e.preventDefault();
                setMyQuestions(true);
              }}
            >
              User Questions
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
