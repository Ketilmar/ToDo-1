
const input = document.querySelector("#input")
const inputBtn = document.querySelector("#input-btn")
const todoList = document.querySelector(".todo-list")


// listen for click on "save now" button. Then runs addTodo() function
document.getElementById("input-btn").addEventListener("click", (e) => {
    // console.log(e);
    // console.log(input.value);
    // document.createElement("li").appendChild(newItem)

    // console.log(todoList);

    // runs addTodo() function and clears input field
    addTodo()
    input.value = ""
})


// listen for keydown, with guard clause to return for all other keys than Enter
document.getElementById("input").addEventListener("keydown", (e) => {
    if(e.code !== "Enter") return;
    // console.log(e);
    addTodo()
    input.value = ""

    // del av sort testing
    // sortByDate()

    // testing
    let htmlDocument = e.path[e.path.length - 2]
    console.log(htmlDocument);

    // debug 
    console.log(todoList);

})


// Creates an li node with paragraph and button childnodes. Adds the value from input field.
function addTodo() {
    // checks for actual input.
    if (!input.value){
        return;
    }

    const liEl = document.createElement("li");
    const pEl = document.createElement("p");
    const buttonEl = document.createElement("button");
    let date = new Date();

    buttonEl.classList = "delete-btn";
    buttonEl.textContent = "Delete";
    pEl.textContent = input.value;

    todoList.append(liEl);
    // liEl.append(date.toLocaleDateString(), ": " , pEl, buttonEl)
    liEl.append(date.toLocaleTimeString(), ": " , pEl, buttonEl)


    // debug
    // console.log(date.toLocaleDateString(), date.toLocaleTimeString());

    // tester noe med array
    // let todoArray = []
    // todoArray += div.append(date.toLocaleDateString(), ": " , p, button)
    // console.log(todoArray.length);
    // input.focus()
}




// //forsøk på å teste en annen metode til å lage dynamisk innhold. Har ikke fått det helt til mtp. plassering av knapper
// function createNewNode(nodeType, appendNodeTo, classes, text ){
//     // console.log(nodeType, appendNodeTo, classes, text);
//     const ourNode = document.createElement(nodeType)
//     // console.log(appendNodeTo);
//     // ourNode.append(appendNodeTo);
//     ourNode.setAttribute('class', classes);
//     ourNode.textContent = text;
//     const div = document.createElement("div")
//     appendNodeTo.append(div, ourNode);
//     // todoList.append(div);

//     console.log(div, ourNode);
//     // console.log(document.body);
// };
// createNewNode("button", todoList, ".delete-btn", "Dette er en tekst")




// eventListener for deleting todo's.
document.addEventListener('click', (e) => {

    // guard clause to prevent from deleting everything we click except delete-btn
    if (!e.target.classList.contains("delete-btn")) return;

  
    // popup to prevent accidental deleting
    if(confirm("Are u sure you want to delete?")) {
    } 
        else {return};

    // removes the parent of the click event target
    e.target.parentNode.remove();

})


// sort function. Sorting by text content of "todo-list > li" node that 
// is a timestring.
let numericalIndex = false

function sortByDate() {
    let todoArrayDate = [];
    document.querySelectorAll("li").forEach(li => todoArrayDate.push(li))
    todoArrayDate.sort((a, b) => a.textContent.localeCompare(b.textContent))

    numericalIndex = !numericalIndex;
    numericalIndex ? null : todoArrayDate.reverse();

    todoArrayDate.forEach(node => document.querySelector(".todo-list").append(node))

    // debug
    // console.log(todoArray[0].textContent);
    // console.log(todoArrayDate[0]);
    // console.log(document.querySelector(".todo-list"));
}

let alphabeticIndex = false;

function sortByName() {
    let todoArrayName = [];
    // add (push) each element to end of array in sequense
    document.querySelectorAll(".todo-list > li").forEach(li => todoArrayName.push(li));
    // console.log(todoArrayName[0].firstElementChild);
    todoArrayName.sort((a, b) => a.firstElementChild.innerText.localeCompare(b.firstElementChild.innerText));

    alphabeticIndex = !alphabeticIndex;
    alphabeticIndex ? null : todoArrayName.reverse();

    todoArrayName.forEach(node => document.querySelector(".todo-list").append(node));
}
