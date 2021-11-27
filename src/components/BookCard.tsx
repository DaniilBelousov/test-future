import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";
import { Book } from "../redux/types";

interface Props {
  data: Book;
};

const BookCard = (props: Props) => {
  const { data } = props;
  const link = `/book/${data.id}`;

  return (
    <div className="container-book card">
      <div className="container-image">
        <img
          className="image-book card-img-top"
          src={data?.imageLink}
          alt={data.title}
        />
      </div>
      <div className="card-body card-body-book">
        <div>
          <p className="card-text fst-italic">{data.categories ? data.categories[0] : ""}</p>
          <h5 className="card-title">{data.title ? data.title : "Untitled"}</h5>
          <p className="card-text mb-3">{data.authors ? data.authors.join(", ") : " The author is unknown"}</p>
        </div>
        <div className="btn-book">
          <Link to={link} className="btn btn-dark" >Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;