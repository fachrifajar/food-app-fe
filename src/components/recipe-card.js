import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { src, title } = props;
  return (
    <div>
      <Link to="/detail-recipe">
        <div className="clickable-image mb-4">
          <img
            src={src || "/images/home/chicken-kare.jpg"}
            height="100%"
            width="100%"
            loading="lazy"
            alt={title}
          />
          <h2 className="image-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
