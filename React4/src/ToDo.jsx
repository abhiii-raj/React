import { useState } from "react";
import { v4 as uuid } from "uuid";
// import "./ToDo"

export default function ToDo() {
    let [todos, setTodo] = useState([{ task: "sample task", id: uuid() }]);
    let [newtodo, setNew] = useState("");

    function addNewTask() {
        setTodo((prevVal) => {
            return [...prevVal, { task: newtodo, id: uuid() }];
        })
        setNew("");
    }

    function updateTodoValue(event) {
        setNew(event.target.value);
    }

    function handleDelete(id){
        setTodo((prevTodo) =>{
            return todos.filter((prevTodo) => prevTodo.id != id);
        }); //returns a new copy
    }

    function handleUpperCase(){
        setTodo(todos.map((task) => {
                return {
                    ...todos, task: task.task.toUpperCase(),
                };
            })
        );
    };
    
    function handleLowerCase(){
        setTodo(todos.map((task) => {
            return {
                    ...todos, task: task.task.toLowerCase(),
                };
            })
        );
    };

    function handleUpperCase1(id){
        setTodo(todos.map((task) => {
            if(task.id === id){
                return {
                    ...todos, task: task.task.toUpperCase(),
                };
            }else{
                return todos;
            }  
            })
        );
    };
    return (
        <div>
            <h4>To Do List</h4>
            <input placeholder="write a task" value={newtodo} onChange={updateTodoValue}></input>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <h4>Tasks</h4>
            <ul>
                {todos.map((item) => (<li key={item.id}>
                    <span>{item.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    &nbsp;&nbsp;
                    <button onClick={() => handleUpperCase1(item.id)}>UpperCase(1)</button>
                </li>))}
            </ul>
            <br />
            <button onClick={handleUpperCase}>UpperCaseAll</button>
            &nbsp;&nbsp;
            <button onClick={handleLowerCase}>LowerCaseAll</button>
        </div>
    );
}