import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Maem","Eak"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== ""){
    setTasks(tasks => [...tasks, newTask]);
    setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_,i) => i !== index);
    setTasks(updateTasks); 
  }

  function moveTaskUp(index) {
    
    if(index > 0){
        const moveUp =[...tasks];
        [moveUp[index],moveUp[index - 1]]=
        [moveUp[index - 1], moveUp[index]];
        setTasks(moveUp);
    }
  }

  function moveTaskDown(index) {

    if(index < tasks.length -1){
        const moveDown =[...tasks];
        [moveDown[index],moveDown[index + 1]]=
        [moveDown[index + 1], moveDown[index]];
        setTasks(moveDown);
    }
  }

  return(
    <div className="to-do-list">
        
        <h1>To Do List</h1>

        <div>
            <input type="text" 
                    placeholder="Enter a task" 
                    onChange={handleInputChange} 
                    value={newTask} />
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                            onClick={() => deleteTask(index)}>🗑️
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskUp(index)}>👆
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskDown(index)}>👇
                    </button>
                </li>
            )}
        </ol>
    </div>
  )
}


export default ToDoList;
