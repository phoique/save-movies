import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pages, ShowPage }) {
  return (
    <div className="row justify-content-center">
      <nav>
        <ul className="pagination">
          {
            Array(pages).fill(0).map(
              (number, index) => 
                <li className="page-item" key={index}>
                  <div
                    style={{cursor: 'pointer'}} 
                    className="page-link" 
                    onClick={() => ShowPage(index + 1)} 
                  >

                    { index + 1 }

                  </div>
                </li>)
          }
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  ShowPage: PropTypes.func.isRequired
};

export default Pagination;
