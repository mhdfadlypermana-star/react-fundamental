import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Maem","Eak"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return(
    <div className="to-do-list">
        
        <h1>To Do List</h1>

        <div>
            <input type="text" 
                    placeholder="Enter a task" 
                    onChange={handleInputChange} 
                    value={newTask} />
            <button className="add-button">Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                            onClick={() => deleteTask(index)}>🗑️
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskUpTask(index)}>👆
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskUpDown(index)}>👇
                    </button>
                </li>
            )}
        </ol>
    </div>
  )
}


export default ToDoList;
