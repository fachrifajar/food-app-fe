import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { src, name, url } = props;
  return (
    <div>
      <Link to={`/detail-recipe/${url}`}>
        <div className="clickable-image mb-4">
          <img
            src={src || "/images/home/chicken-kare.jpg"}
            height="100%"
            width="100%"
            loading="lazy"
            alt={name}
          />
          <h2 className="image-title">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
