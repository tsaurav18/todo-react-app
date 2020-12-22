
import React ,{useState} from "react"
import './App.css';
//Todo render function
function Todo({todo, index, completeTodo, removeTodo}){

  return (
    <div className="todo"  style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>

 {todo.text} <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
    
  )
 
}
//form for todo input 
function TodoForm({addTodo}){
  const [value, setValue] = useState("")
  const handleSubmit=e=>{
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return(
<form className="form-input"onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}


function App() {
  //add todo 
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  //add status of todo 
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  //delete todo 
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
//state of todo 
  const [todos, setTodos] = useState([
      ])
  return (
    <div className="App">
      
      <TodoForm addTodo={addTodo} />
       <div className="todo-list">
      
         {todos.map((todo, index)=>(
           <Todo todo={todo}index={index} key={index} completeTodo={completeTodo} removeTodo={removeTodo} />
         ))}
       </div>
     
    </div>
  );
}

export default App;
