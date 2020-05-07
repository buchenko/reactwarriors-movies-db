import React from "react";
import classNames from 'classnames'

class Pagination extends React.Component {
    render() {
        const {currentPage, total_pages, updateCurrentPage} = this.props;
        const lastClass = () => classNames('page-item',{'disabled': currentPage === total_pages});
        const firstClass = () => classNames('page-item',{'disabled': currentPage === 1});

        const handleFirst = () => {
            return event => {
                updateCurrentPage(1);
            };
        };

        const handleLast = () => {
            return event => {
                updateCurrentPage(total_pages);
            };
        };

        const handleNext = () => {
            return event => {
                const page = Math.min(total_pages, currentPage+1)
                updateCurrentPage(page);
            };
        };

        const handlePrev = () => {
            return event => {
                const page = Math.max(1, currentPage-1)
                updateCurrentPage(page);
            };
        };

        return (
            <nav aria-label="..." className="toggle mt-md-2 mr-md-2">
                <ul className="pagination">
                    <li
                        className="page-item"
                        onClick={handleFirst()}
                    >
                        <a className="page-link" href="#">First</a>
                    </li>

                    <li
                        className={firstClass()}
                        onClick={handlePrev()}
                    >
                        <a className="page-link" href="#">Previous</a>
                    </li>

                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">Page: {currentPage} of {total_pages} pages</a>
                    </li>

                    <li
                        className={lastClass()}
                        onClick={handleNext()}
                    >
                        <a className="page-link" href="#">Next</a>
                    </li>
                    <li
                        className="page-item"
                        onClick={handleLast()}
                    >
                        <a className="page-link" href="#">Last</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;