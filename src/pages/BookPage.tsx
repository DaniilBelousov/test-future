import React, { useEffect } from "react";
import { useParams } from "react-router";

const BookPage = ()=> {
  const { id } = useParams();
  
  useEffect(() => {
    console.log(id)
  }, []);

  return (
    <div>
      <p>123</p>
    </div>
  );
};

export default BookPage;