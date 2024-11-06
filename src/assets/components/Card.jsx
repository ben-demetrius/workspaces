import React from "react";

const Card = ({ author, date, title, description }) => {
  return (
    <div className="pfa-card">
      <p>{author}</p>
      <p>{date}</p>
      <div className="pfa-texts">
        <div className="pfa-titles">
          <h3>{title}</h3>
          <p className="pfa-titles__p">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
