// let todo1 = document.getElementById('todo1');
let btn = document.getElementById('btn');
let todoElement = document.getElementById('item');
let DeadlineElement = document.getElementById('Deadline');
let priorityElement = document.getElementById('dropdown');



let  addTodo = ()=>{
      let todo =  todoElement.value;
      let deadline = DeadlineElement.value;
      let priority = priorityElement.value;
      
      let date = new Date(deadline);
      console.log("todo",todo,)
}

btn.addEventListener('click',addTodo);





