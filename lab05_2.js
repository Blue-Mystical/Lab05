let box = document.querySelector("#box");
box.addEventListener('keypress', function(event){
    if (event.keyCode === 13) addToList();
})
let add = document.querySelector("#add");
add.addEventListener('click', addToList);

let thing = "";
function addToList() {
    thing = box.value;
    if (thing == "")
       alert("Please insert a text.")
    else {
        addElement();
    }
}

function addElement() {
    
    var elem = document.createElement("li");

    var span = document.createElement("SPAN");
    var cross = document.createTextNode(" ✖ ");
    span.className = "delete";
    span.appendChild(cross);
    elem.appendChild(span);

    var span2 = document.createElement("SPAN");
    var text = document.createTextNode(thing);
    span2.className = "text";
    span2.appendChild(text);
    elem.appendChild(span2);

    document.getElementById("myList").appendChild(elem);
    document.getElementById("box").value = "";

    updateRemove();
    updateFinish();
}

let i;
let removeList;
let textList;
let remove;
let text;

updateRemove();
updateFinish();

function updateRemove() {
    removeList = document.querySelectorAll(".delete")
    removeList.forEach(remove => {
        remove.addEventListener('click', function() {
            let li = remove.parentElement;
            li.style.display = "none";
        })
    });
}

function updateFinish() {
    textList = document.querySelectorAll(".text")
    textList.forEach(text => {
        text.addEventListener('click', function() {
            let li = text.parentElement;
            if (li.classList.contains("done")) li.classList.remove("done");
            else li.classList.add("done");
        })
    });
}
