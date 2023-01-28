import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../store/recipes/index";
import { useNavigate } from "react-router-dom";

const PopularCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { src, name, url } = props;

  return (
    <div>
      <div
        className="card clickable-image mb-4"
        onClick={() => {
          axios
            .get(
              `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/${url}`
            )
            .then(({ data }) => {
              dispatch(
                recipeReducer.setDetail({
                  data: data?.data?.[0],
                  slug: url,
                })
              );
            });

          navigate(`/detail-recipe/${url}`);
        }}>
        <img
          className="card-img-top"
          src={src}
          height="100%"
          width="100%"
          loading="lazy"
          alt={name}
        />
        <div className="card-body">
          <p className="card-text image-title">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
