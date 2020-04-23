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

  let span1 = document.createElement("span");
  let closeButton = document.createTextNode("✗");
  span1.className = "close";
  span1.appendChild(closeButton);
  items.forEach((item) => {
    item.style.color = colorGen();
  });

  let span2 = document.createElement("span");
  let checkButton = document.createTextNode("✓");
  span2.className = "check";
  span2.appendChild(checkButton);
  items.forEach((item) => {
    item.appendChild(span1);
    item.appendChild(span2);
  });

  Object.assign(span1, {
    onclick: function () {
      newElem.classList.add("invisible");
      // span1.style.display = "none";
    },
  });
  span2.addEventListener("click", () => {
    newElem.classList.toggle("solved");
  });

  // Object.assign(span2, {
  //   onclick: function () {
  //     newElem.classList.toggle("solved");
  //    // span1.style.display = "none";
  //   }
  // })
};
