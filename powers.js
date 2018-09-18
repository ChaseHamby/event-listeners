
var powerList = document.getElementById('powerList');

function togglePower (newClass) {
    powerList.classList.toggle(newClass)
    console.log("powerList.classList", powerList.classList);
}

document.querySelector("#activate-flight").addEventListener("click", function () {
    togglePower("flight")
});

Test
