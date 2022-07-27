const body = document.querySelector("body");
const button = document.querySelector("button");
const colorName = document.getElementById("colorName");
const heading = document.getElementById("heading");
var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];
button.addEventListener("click", () => {
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    colorName.style.color = colors[colorIndex];
    heading.style.color = colors[colorIndex];
    document.getElementById("colorName").innerHTML = colors[colorIndex];
});