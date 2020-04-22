
const addList = () => {
    let userInput = document.querySelector("#userText").value;
    console.log(userInput);
    let newElem = document.createElement("li");
    let textLine = document.createTextNode(userInput);
    newElem.appendChild(textLine);
    document.querySelector(".result").appendChild(newElem);
    document.querySelector("#userText").value = "";
}