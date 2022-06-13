
const input = document.querySelector("#input")
const inputBtn = document.querySelector("#input-btn")
const todoList = document.querySelector(".todo-list")
// const newItem = document.createTextNode("hei. Dette er en test")


// listen for click on "save now" button. Then runs addTodo() function
document.getElementById("input-btn").addEventListener("click", (e) => {
    console.log(e);
    console.log(input.value);
    // document.createElement("li").appendChild(newItem)

    console.log(todoList);
    if (!input.value){
        end;
    }
    addTodo()
    input.value = ""
})

// her lager jeg en eventlistener for å slette oppføringer
document.getElementById()

// creates 3 new elements and adds the value from input field
function addTodo() {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button");
    let date = new Date()    
    button.classList = "delete-btn"
    p.textContent = input.value
    todoList.append(div)
    div.append(date.toLocaleDateString(), ": " , p, button)

    console.log(date.toTimeString());
}


function deleteTodo() {

}
// input1.addEventListener("click", (inputBtn) => {
//     console.log(inputBtn);
// })
 
// function testFunc1() {
//     console.log(input2.value);
//     input2.value = ""
// }