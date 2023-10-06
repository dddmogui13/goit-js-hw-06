const categoryItems = document.querySelectorAll("ul#categories>li");

const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

for (const categoryItem of categoryItems) {
  const categoryName = categoryItem.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const elementCount = categoryItem.querySelectorAll("li").length;
  console.log(`Elements: ${elementCount}`);
}