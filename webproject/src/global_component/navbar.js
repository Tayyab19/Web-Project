import profile_logo from "./profile_logo.png";
import logout_logo from "./logout_logo.png";
import question_logo from "./question_logo.png";
import list_logo from "./list_logo.png";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";

const Navbar = ({ username }) => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light row"
        style={{
          backgroundColor: "#e49b35",
          color: "white",
          position: "sticky",
          top: "0",
          zIndex: "100",
          width: "auto",
        }}
      >
        <div class="container-fluid">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-collapse collapse col-6 col-md-4"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li class="nav-item mt-2">
                <Link to={`/profile/${username.name}`}>
                  <img
                    data-tip="Profile"
                    class="logo-icon"
                    src={profile_logo}
                  />
                </Link>
              </li>
              <li class="nav-item mt-2">
                <Link to={"/questions/ask"}>
                  <img
                    class="logo-icon"
                    src={question_logo}
                    data-tip="Ask a Question"
                  />
                </Link>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#">
                  <img
                    class="logo-icon"
                    src={list_logo}
                    data-tip="View Syntax List"
                  />
                </a>
              </li>
              <li class="nav-item mt-2">
                <Link to={"/"}>
                  <img class="logo-icon" src={logout_logo} data-tip="Logout" />
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to={"questions/page/1"}
            className={
              "mx-5 fw-bolder text-dark p-1 text-center col-6 col-md-2"
            }
            style={{
              fontSize: "18px",
              textDecoration: "none",
              backgroundColor: "orange",
            }}
          >
            FAST FLOW
          </Link>
          <form class="d-flex justify-content-center col-12 col-md-6 mt-3 mt-md-0 mx-5 mx-md-0" style ={{width: 'auto'}}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "12em" }}
            />
            <button
              class="btn btn-outline-dark"
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* <ReactTooltip effect="solid" place="bottom" /> */}
    </>
  );
};

export default Navbar;
