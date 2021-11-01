import React from "react";
import { Link } from "react-router-dom";

export default function Panigation({ totalItem, perPage, numberPage ,currentPage}) {
  const totalPage = Math.ceil(totalItem / perPage);
  const page = [];
  for (let i = 0; i < totalPage; i++) {
    page.push(i + 1);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => numberPage(currentPage-1,totalPage)}>
            Trước
          </Link>
        </li>
        {page.map((item) => {
          return (
            <li
              className="page-item"
              key={item}
              onClick={() => numberPage(item,totalPage)}
            >
              <Link className="page-link" to="#">
                {item}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => numberPage(currentPage+1,totalPage)}>
            Sau
          </Link>
        </li>
      </ul>
    </nav>
  );
}
