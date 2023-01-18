const saveElem = document.getElementById("save-el");
const countElem = document.getElementById("count-el");
const decreaseElem = document.getElementById("count-el")
let count = 0;



function increment() {
    count += 1;
    countElem.textContent = count;
}




function save() {
    saveElem.textContent += ` ${count} _`;
    countElem.textContent = 0;
    count = 0;
}

function reset() {
  saveElem.textContent = "Previous entries:";
}
