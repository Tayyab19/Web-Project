import { Link } from "react-router-dom";

const Pagination = ({pageNumber, totalPages}) => {

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-sm">
                <li className={pageNumber == 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" href={`/questions/page/${pageNumber-1}`} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>

                {pageNumber - 2 > 1 ? <li class="page-item"><Link to={`/questions/page/1`} className="page-link">1</Link></li> : null}

                {pageNumber - 2 > 0 ? <li class="page-item"><Link to={`/questions/page/${pageNumber-2}`} className="page-link">{pageNumber-2}</Link></li> : null} 
                {pageNumber - 1 > 0 ? <li class="page-item"><Link to={`/questions/page/${pageNumber-1}`} className="page-link">{pageNumber-1}</Link></li> : null} 
                {pageNumber > 0 ? <li class="page-item active"><Link to={`/questions/page/${pageNumber}`} className="page-link">{pageNumber}</Link></li> : null} 
                {+pageNumber + +1 <= totalPages ? <li class="page-item"><Link to={`/questions/page/${+pageNumber+ +1}`} className="page-link">{+pageNumber+ +1}</Link></li> : null} 
                {+pageNumber + +2 <= totalPages ? <li class="page-item"><Link to={`/questions/page/${+pageNumber+ +2}`} className="page-link">{+pageNumber+ +2}</Link></li> : null} 

                {+pageNumber + +3 == totalPages ? <li class="page-item"><Link to={`/questions/page/${totalPages}`} className="page-link">{totalPages}</Link></li> : null}

                <li className={pageNumber == totalPages ? "page-item disabled" : "page-item"}>
                <a className="page-link" href={`/questions/page/${+pageNumber + +1}`} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;