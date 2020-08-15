// const buttonList = document.querySelectorAll("button");
// buttonList.forEach((button) => {
//   button.addEventListener("click", () => {
//     const li = button.closest("li");
//     li.classList.add("done");
//   });
// });

// const li = document.querySelectorAll("li");
// button.addEventListener("click", (e) => {
//   li.classList.add("done");
// // });
// const addTodoButton = document.querySelector("#add-button");
// addTodoButton.addEventListener("click", () => {
//   const input = document.querySelector("#new-todo");
//   const text = input.value; //ここら辺がわからない
//   input.value = "";

//   const newLi = document.createElement("li");
//   newLi.innerText = text;
//   const newButoon = document.createElement("button");
//   newButoon.innerText = "done";

//   newLi.appendChild(newButoon);
//   newButoon.addEventListener("click", () => {
//     const li = newButoon.closest("li");
//     li.classList.add("done");
//   });
//   document.querySelector("ul").appendChild(newLi);
// });

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
