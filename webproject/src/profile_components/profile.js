import Footer from "../global_component/footer";
import Navbar from "../global_component/navbar";
import profile_pic from "./download.jpg";
import "./profile.css";
import ChangeModal from "./changeModal";

const Profile = () => {
  const changes = true;
  const userData = {
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
  };
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row"></div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-md-4 col-lg-4 col-sm-6">
            {/* Fix Image */}
            <img class="profile-picture" src={profile_pic} />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="email">Email:</label>
            <input
              id="email"
              class="form-control"
              type="text"
              placeholder={userData.email}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="username">Username: </label>
            <input
              id="username"
              class="form-control"
              type="text"
              placeholder={userData.username}
              disabled
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="reputation">Reputation:</label>
            <input
              id="reputation"
              class="form-control"
              type="text"
              placeholder={userData.reputation}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="badges">Badges:</label>
            <input
              id="badges"
              class="form-control"
              type="text"
              placeholder={userData.Badges}
              disabled
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="firstName">First Name:</label>
            <input
              id="firstName"
              class="form-control"
              type="text"
              placeholder={userData.firstName}
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <label for="lastName">Last Name:</label>
            <input
              id="lastName"
              class="form-control"
              type="text"
              placeholder={userData.lastName}
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-sm-4 col-md-4">
            Change Password. Open Modal
          </div>
          <div class="col-sm-8 col-md-8 col-lg-6">
            <label for="address">Address:</label>
            <input
              id="address"
              class="form-control"
              type="text"
              placeholder={userData.addrress}
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="linkedIn">LinkedIn Address:</label>
            <input
              id="linkedIn"
              class="form-control"
              type="text"
              placeholder={userData.linkedIn}
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="gitHub">GitHub Handle:</label>
            <input
              id="gitHub"
              class="form-control"
              type="text"
              placeholder={userData.gitHub}
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
              class="form-control"
              type="text"
              placeholder={userData.company}
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <label for="company">Preferred Stack:</label>
            <select class="form-select" aria-label="Preferred Stack" id="stack">
              <option selected>{userData.preferredStack}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3"></div>
          <div class="col-lg-3 col-md-3 col-sm-3">
            {/* if true enable else disable */}
            <button class="btn btn-outline-primary" type="submit">
              Save Changes
            </button>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3">
            <button class="btn btn-outline-dark" type="submit">
              Discard Changes
            </button>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
