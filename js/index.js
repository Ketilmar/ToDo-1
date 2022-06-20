
const input = document.querySelector("#input")
const inputBtn = document.querySelector("#input-btn")
const todoList = document.querySelector(".todo-list")

//--------------------------------------------------------
// this is part of my test to store input in an object ---

let todoId = 0
let savedTodo = []

function newTodoObj(id, date, title, text, tags, li) {
    return {
        id,
        date,
        title,
        text,
        tags,
        node: li
    }
}

// -------------------------------------
//      LOAD LOCALSTORAGE
// -------------------------------------

window.addEventListener('load', () => {
    const dataFromStorage = JSON.parse(localStorage.getItem('todos'))
    console.log(dataFromStorage)

    dataFromStorage.forEach(liObj => {
        addTodo(liObj.text)
        console.log(liObj.text);
    })
})

//------- end ---------


// listen for click on "save now" button. Runs addTodo() function and clears input field
document.getElementById("input-btn").addEventListener("click", (e) => {

    addTodo()
    input.value = ""
})

// listen for keydown, with guard clause to return for all other keys than Enter
document.getElementById("input").addEventListener("keydown", (e) => {
    if(e.code !== "Enter") return;
    
    addTodo()
    input.value = ""

    // testing
    // let htmlDocument = e.path[e.path.length - 2]
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

    
    liEl.append(date.toLocaleString("no-NO"), ":  " , pEl, buttonEl)
    todoList.append(liEl);


    //------------------------------------------
    //-------- testing object storing ----------

    todoId++
    const ourObj = newTodoObj(todoId, date.toLocaleString(), "tullball", "tull", "tull, ball, tullball", liEl);

    console.log(ourObj);
    savedTodo.push(ourObj)

    //--------------------
    // Local storage
    //--------------------
    localStorage.setItem("todos", JSON.stringify(savedTodo));
    console.log(localStorage);
    console.log(savedTodo);

    // -----------------
    // ------ debug ----
    // console.log(date.toLocaleDateString(), date.toLocaleTimeString());
}; // end addTodo()





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


// sort function. Sorting by timestring of "todo-list > li"
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


// sort alphabetic function
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



// console.log(newTodoObj(0,0,0,"test",0,0));

//-------------------------------
// div testing and junk
//-------------------------------

// // forsøk på å teste en annen metode til å lage dynamisk innhold. Har ikke fått det helt til mtp. plassering av knapper
// // Kommer tilbake til dette på et senere tidspunkt
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