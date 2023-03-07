import style from "./recipe.module.css";

const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Calories: {Math.floor(calories)} cals</p>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
