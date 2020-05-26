import React from "react";

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handle_ingredient_delete,
  } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handle_ingredient_delete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
