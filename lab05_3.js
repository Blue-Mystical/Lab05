let isNight = false;

let button = document.querySelector("#button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
button.addEventListener('click', switchMode);

let toggleable = document.querySelectorAll(".toggleable");
function switchMode() {

    if (isNight == false) {
        toggleable.forEach(elem => {
            elem.classList.add("night");
        });
        button.innerHTML = "Activate the day mode";
        h1.innerHTML = "GOOD NIGHT";
        h2.innerHTML = "This is night time.";
        isNight = true;
    }
    else {
        toggleable.forEach(elem => {
            elem.classList.remove("night");
        });
        button.innerHTML = "Activate the night mode";
        h1.innerHTML = "GOOD MORNING";
        h2.innerHTML = "This is day time.";
        isNight = false;
    }
    
}