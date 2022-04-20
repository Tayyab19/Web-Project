import profile_logo from "./profile_logo.png";
import logout_logo from "./logout_logo.png";
import question_logo from "./question_logo.png";
import list_logo from "./list_logo.png";
import ReactTooltip from "react-tooltip";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light theme">
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
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="navbar-brand" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#">
                  <img
                    data-tip="Profile"
                    class="logo-icon"
                    src={profile_logo}
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img
                    class="logo-icon"
                    src={question_logo}
                    data-tip="Ask a Question"
                  />
                </a>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img class="logo-icon" src={logout_logo} data-tip="Logout" />
                </a>
              </li>
            </ul>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
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
