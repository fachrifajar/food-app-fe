import React from "react";

const IngredientsList = (props) => {
  const { ingredients, descriptions, index } = props;
  return (
    <div>
      <li key={index}>
        <b>{ingredients}:</b> {descriptions}
      </li>
    </div>
  );
};
export default IngredientsList;
