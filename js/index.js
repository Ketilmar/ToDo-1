
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

    // testing
    let htmlDocument = e.path[e.path.length - 2]
    console.log(htmlDocument);

})


// checks for actual input. Creates 3 new elements and adds the value from input field
function addTodo() {
    if (!input.value){
        return;
    }

    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button");
    let date = new Date()    
    button.classList = "delete-btn"
    p.textContent = input.value
    todoList.append(div)
    div.append(date.toLocaleDateString(), ": " , p, button)

    let todoArray = []
    todoArray += div.append(date.toLocaleDateString(), ": " , p, button)
    console.log(todoArray.length);
    input.focus()
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
