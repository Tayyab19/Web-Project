import { Link } from "react-router-dom";

const Pagination = ({ pageNumber, totalPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm">
        <li className={pageNumber == 1 ? "page-item disabled" : "page-item"}>
          <Link
            to={pageNumber == 1 ? "#" : `/questions/page/${pageNumber - 1}`}
          >
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </Link>
        </li>

        {pageNumber - 2 > 1 ? (
          <li className="page-item">
            <Link to={`/questions/page/1`} className="page-link">
              1
            </Link>
          </li>
        ) : null}

        {pageNumber - 2 > 0 ? (
          <li className="page-item">
            <Link
              to={`/questions/page/${pageNumber - 2}`}
              className="page-link"
            >
              {pageNumber - 2}
            </Link>
          </li>
        ) : null}
        {pageNumber - 1 > 0 ? (
          <li className="page-item">
            <Link
              to={`/questions/page/${pageNumber - 1}`}
              className="page-link"
            >
              {pageNumber - 1}
            </Link>
          </li>
        ) : null}
        {pageNumber > 0 ? (
          <li className="page-item active">
            <Link to={`/questions/page/${pageNumber}`} className="page-link">
              {pageNumber}
            </Link>
          </li>
        ) : null}
        {+pageNumber + +1 <= totalPages ? (
          <li className="page-item">
            <Link
              to={`/questions/page/${+pageNumber + +1}`}
              className="page-link"
            >
              {+pageNumber + +1}
            </Link>
          </li>
        ) : null}
        {+pageNumber + +2 <= totalPages ? (
          <li className="page-item">
            <Link
              to={`/questions/page/${+pageNumber + +2}`}
              className="page-link"
            >
              {+pageNumber + +2}
            </Link>
          </li>
        ) : null}

        {+pageNumber + +3 == totalPages ? (
          <li className="page-item">
            <Link to={`/questions/page/${totalPages}`} className="page-link">
              {totalPages}
            </Link>
          </li>
        ) : null}

        <li
          className={
            pageNumber == totalPages ? "page-item disabled" : "page-item"
          }
        >
          {console.log(pageNumber, totalPages)}
          <Link
            to={
              pageNumber == totalPages
                ? "#"
                : `/questions/page/${+pageNumber + +1}`
            }
          >
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
