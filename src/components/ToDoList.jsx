import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }
  function handleRemove(index) {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  }
  function handleAdd() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleDown(index) {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        setTasks(updatedTasks);
      }
  }

  return (
    <div
      className="flex flex-col
    gap-10 border-zinc-100 p-20 text-zinc-50 justify-center items-center h-full bg-zinc-800"
    >
      <h1 className="text-6xl font-bold text-center">To-Do List</h1>
      <div className="border w-96 p-4 rounded-lg flex justify-between items-center">
        <input
          className=" outline-none text-white bg-zinc-800"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInput}
        />
        <button
          className="bg-zinc-900 rounded-md px-4 p-2 "
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="border rounded-lg p-4 w-96 flex items-center justify-between"
          >
            <span>{task}</span>
            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => handleUp(index)}>up</button>
              <button onClick={() => handleDown(index)}>down</button>
              <button
                className="bg-red-900 px-4 py-2 rounded-lg"
                onClick={() => handleRemove(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
