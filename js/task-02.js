const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const itemList = ingredients.map(ingredient => {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredient;
  return newElement;
});

list.append(...itemList);