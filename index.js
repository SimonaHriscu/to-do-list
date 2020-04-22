const addList = () => {
    let userInput = document.querySelector("#userText").value;
    console.log(userInput);
    let newElem = document.createElement("li");
    let textLine = document.createTextNode(userInput);
    newElem.appendChild(textLine);
    document.querySelector(".result").appendChild(newElem);
    document.querySelector("#userText").value = "";


const colorGen=()=>{
    let result = "#"
    let colorCode= "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
       result += colorCode[Math.floor(Math.random()*16)];
        
    }
    return result;
}
//console.log(colorGen());


let items = document.querySelectorAll("li");
console.log(items);

items.forEach((item) => {
    item.style.color = colorGen();  
    
});
}