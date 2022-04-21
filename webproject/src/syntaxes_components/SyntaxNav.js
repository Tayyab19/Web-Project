import { Link } from "react-router-dom";

const SyntaxNav = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Syntaxes
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/syntaxhtml">Html </Link>
            </li>
            <li class="nav-item">
              <Link to="/syntaxcss">CSS</Link>
            </li>
            <li class="nav-item">
              <Link to="/syntaxjavascript">Javascript </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SyntaxNav;
