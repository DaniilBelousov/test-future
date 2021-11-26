import React, { useEffect } from "react";
import "./BookCard.css";
import { Book } from "../redux/types";

interface Props {
  data: Book;
};

const BookCard = (props: Props) => {
  const { data } = props;

  return (
    <div className="container-book card">
      <div className="container-image">
        <img className="image-book card-img-top" src={data.imageLinks} alt={data.title} />
      </div>
      <div className="card-body card-body-book">
        <div>
          <p className="card-text fst-italic">{data.categories ? data.categories[0] : ""}</p>
          <h5 className="card-title">{data.title ? data.title : "Untitled"}</h5>
          <p className="card-text mb-3">{data.authors ? data.authors.join(", ") : " The author is unknown"}</p>
        </div>
        <div className="btn-book">
          <a href="#" className="btn btn-primary">Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;