const fontSizeInput = document.querySelector("input#font-size-control");
const textToStyle = document.querySelector("span#text");
 
fontSizeInput.addEventListener("input", (event) => {
 
  const inputValue = event.currentTarget.value;
  
  console.log(inputValue);

  textToStyle.style.fontSize = `${inputValue}px`;
});