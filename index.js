const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};


const userList = document.querySelector("ol");
const listInput = document.querySelector("#userText");
const addListButton = document.querySelector("button")


const addList =() => {
 // create DIV
 const toDoDiv = document.createElement("div");
 toDoDiv.classList.add("todo");
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent); // the value i append to LI
  toDoDiv.appendChild(newLi);//LI i append to DIV
  userList.appendChild(toDoDiv);//DIV i append to OL
  document.querySelector("#userText").value = "";

  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.style.color = colorGen();
  });

  //Delete Button + Checked
  const completedButton = document.createElement('button');
  completedButton.innerHTML = "✓";
  completedButton.classList.add("completed-btn");
  toDoDiv.appendChild(completedButton);// button is appended to the div

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "✗";
  deleteButton.classList.add("delete-btn");
  toDoDiv.appendChild(deleteButton);// button is appended to the div

  const checkMe =() =>{
    newLi.classList.toggle("check");
  }
  const deleteMe =() =>{
    toDoDiv.remove();
  }
deleteButton.addEventListener("click", deleteMe);
completedButton.addEventListener("click", checkMe);
}

function keyPressFunction(event){
  if(event.key == "Enter") addList();
}

addListButton.addEventListener("click", addList);
let inputKey = document.querySelector("#userText");
inputKey.addEventListener("keypress", keyPressFunction);


