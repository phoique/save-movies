import React from 'react';

function Pagination({ pages, url }) {
  return (
    <div className="row justify-content-center">
      <nav>
        <ul className="pagination">
          {
            (pages > 1) ? Array(pages).map(
              number => 
              <li className="page-item">
                <a className="page-link" href="/">
                { number + 1 }
                </a>
              </li>) : null
          }
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
