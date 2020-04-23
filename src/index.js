const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

const addList = () => {
  let userInput = document.querySelector("#userText").value;
  if (userInput == "") {
    return alert("You cannot have an empty task");
  }
  let newElem = document.createElement("li");
  let textLine = document.createTextNode(userInput);
  newElem.appendChild(textLine);
  document.querySelector(".result").appendChild(newElem);
  document.querySelector("#userText").value = "";
  let items = document.querySelectorAll("li");

  let span = document.createElement("span");
  let closeButton = document.createTextNode("X");
  span.className = "close";
  span.appendChild(closeButton);
  items.forEach((item) => {
    item.style.color = colorGen();
    item.appendChild(span);
  });


  
Object.assign(span, {
  onclick: function () {
    span.classList.add("invisible");
   // span.style.display = "none";
    
  }
 
})


 };
