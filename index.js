const text = document.querySelector(".text2");

const textLoad= () =>{
  setTimeout(() =>{
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() =>{
    text.textContent = "Graphic Designer";
  }, 4000);
  setTimeout(() =>{
    text.textContent = "Programmer";
  },8000);
}

textLoad();
setInterval(textLoad, 12000);