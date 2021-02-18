import React from 'react';

interface PaginationInterface {
  selectPage(page: number);
  total: number;
  current: number;
}

const txOnPage = +process.env.REACT_APP_ROWS_ON_PAGE;

const Pagination = ({selectPage, total, current}: PaginationInterface) => {
  if (total < txOnPage) {
    return null;
  }

  const calculateMaxPage = () => {
    return Math.ceil(total / txOnPage);
  };

  const handleClick = (page: number, e) => {
    e.preventDefault();

    let selectedPage = page;
    if (page < 1) {
      selectedPage = 1;
    }

    const maxPage = calculateMaxPage();
    if (page > maxPage) {
      selectedPage = maxPage;
    }

    selectPage(selectedPage);
  };

  const renderPages = () => {
    const pages = calculateMaxPage();

    const rendered = [];
    for (let i = 1; i <= pages; i++) {
      rendered.push(
        <li key={i} className={`page-item ${current === i && 'active'}`} onClick={handleClick.bind(this, i)}><a className="page-link" href="">{i}</a></li>
      );
    }

    return rendered;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={handleClick.bind(this, current - 1)}><a className="page-link" href="#">Previous</a></li>
        {
          renderPages()
        }
        <li className="page-item" onClick={handleClick.bind(this, current + 1)}><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  );
};

export default Pagination;
