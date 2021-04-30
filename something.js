function hello()
{
    alert("alert");
}

console.log("hi");
var name = window.prompt("Enter your name: ");
if(name == "Nikolay")
{
    alert("Your name is " + name);
}

var tower = document.getElementById("tower");
var tower_button = document.getElementById("btn");

function openTest() {
    tower.style.display = "block";
}

tower_button.addEventListener('tower', openTest);
tower_button.style.height="200px";
tower_button.style.fontSize="14pt";
tower.style.display ="none";