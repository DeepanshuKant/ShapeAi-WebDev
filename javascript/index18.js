console.log("Hello world");
document.querySelector("#heading").innerHTML = "Why is not";

console.log(document.getElementsByClassName("Paragraphs"));

const ChildNodeAnything = document.createElement("div");
ChildNodeAnything.classList.add("myStyle");
ChildNodeAnything.innerHTML = "Hello how are you doing";
document.querySelector(".Paragraphs").appendChild(ChildNodeAnything);
