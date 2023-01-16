import React from "react";

// const IngredientsList = (props) => {
//   const { ingredients, descriptions, index } = props;
//   return (
//     <div>
//       <li key={index}>
//         <b>{ingredients}:</b> {descriptions}
//       </li>
//     </div>
//   );
// };

const IngredientsList = (props) => {
  const { ingredients, index } = props;
  return (
    <div>
      <li key={index}>{ingredients}</li>
    </div>
  );
};
export default IngredientsList;
