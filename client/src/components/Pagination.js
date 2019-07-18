import React from 'react';

function Pagination({ pages, url }) {
  return (
    <div className="row justify-content-center">
      <nav>
        <ul className="pagination">
          {
            Array(pages).fill(0).map(
            (number, index) => 
            <li className="page-item" key={index}>
              <a className="page-link" href={`/${ url }/${index+1}`}>
              { index + 1 }
              </a>
            </li>)
          }
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
