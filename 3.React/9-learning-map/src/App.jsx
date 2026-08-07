
function App() {
const todoItem=[
{id:1, todoText:"Buy Milk",  todoDate:"30-july-20026"},
{id:2, todoText: "Go to College",  todoDate:"weekday"},
{id:3, todoText: "Exercise",  todoDate:"Everyday"},
];

console.log(".....................Starting using map.................");
 const todoItemsText = todoItems.map(todoItem =>todoItem.todoText);
console.log(todoItemsText);
console.log("................Ending..............");

//  console.log(".....................Starting.................");
//  const todoItemsText =[];
// TodoItems.foeEach(item=>{
//   const str= convertObjectTotodoText(item);
//   todoItemsText.push(str);
// });
// console.log(todoItemsText);
// console.log("................Ending..............");
  return (
    <div className="text-red-400">
      Learning map
    </div>
  )
}

export default App
