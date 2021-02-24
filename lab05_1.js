let buttonList = document.querySelectorAll(".button");

let extraMessage = "Why did you press me?";

buttonList.forEach(button => {
    button.addEventListener('click', function() {
        button.style.background = "black";
        button.style.color = "white";
        window.alert(button.textContent + " says: " + extraMessage);
    }); 
});

let secretTrigger = document.querySelector("#secretTrigger");
secretTrigger.addEventListener('click', doSecret);

let secretList = document.querySelectorAll(".secret");
function doSecret() {
    secretList.forEach(elem => {
        elem.innerHTML = "Hi you found a secret!";
    });
}