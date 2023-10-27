let color = document.getElementById("color");
let generate = document.getElementById("generate");

generate.addEventListener('click', () => {
    color.innerHTML = "#" + Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = color.innerHTML;
})