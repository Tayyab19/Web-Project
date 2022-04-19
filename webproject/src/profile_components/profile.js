import Footer from "../global_component/footer";
import Navbar from "../global_component/navbar";
import profile_pic from "./download.jpg";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-md-4 col-lg-5 col-sm-6">
            {/* Fix Image */}
            <img class="profile-picture" src={profile_pic} />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <input
              class="form-control disabled"
              type="text"
              placeholder="Email"
              readonly
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-3">
            <input
              class="form-control"
              type="text"
              placeholder="Username"
              readonly
            />
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-md-3 col-sm-3">Reputation</div>
          <div class="col-lg-2 col-md-3 col-sm-3">Badges</div>
          <div class="col-lg-2 col-md-3 col-sm-3">First Name</div>
          <div class="col-lg-2 col-md-3 col-sm-3">Last Name</div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-2 col-sm-4 col-md-4">
            Change Password. Open Modal
          </div>
          <div class="col-sm-8 col-md-8 col-lg-6">Address</div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-6">LinkedIn</div>
          <div class="col-lg-4 col-md-6 col-sm-6">GitHub</div>
          <div class="col-lg-2"></div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 col-md-6 col-sm-6">Company</div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            Prefered Stack.One Option. Select from Dropdown
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
