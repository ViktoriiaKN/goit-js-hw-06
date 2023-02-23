const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li.outerHTML; 
});

const ingredientsList = document.getElementById("ingredients");
ingredientsList.innerHTML = listItems.join("");


