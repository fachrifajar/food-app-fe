import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../store/recipes/index";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const RecipeCard = (props) => {
//   const { src, name, url } = props;
//   return (
//     <div>
//       <Link to={`/detail-recipe/${url}`}>
//         <div className="clickable-image mb-4">
//           <img
//             src={src || "/images/home/chicken-kare.jpg"}
//             height="100%"
//             width="100%"
//             alt={name}
//           />
//           <h2 className="image-title">{name}</h2>
//         </div>
//       </Link>
//     </div>
//   );
// };

const RecipeCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { src, name, url } = props;
  return (
    <div>
      <div
        className="clickable-image mb-4"
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

            navigate(`/detail-recipe/${url}`)
        }}>
        <img
          src={src || "/images/home/chicken-kare.jpg"}
          height="100%"
          width="100%"
          alt={name}
        />
        <h2 className="image-title">{name}</h2>
      </div>
    </div>
  );
};

export default RecipeCard;
