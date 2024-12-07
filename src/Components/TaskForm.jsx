import React, { useState, useEffect } from "react";
import './TaskForm.css';

const TaskForm = ({ onAddTask, editTask }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editTask) {
      setInput(editTask.text);
    }else{
      setInput("")
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask(input.trim());
      setInput("");
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <p className="input-title">Set Your Tasks</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        className="form-input"
      />
      <button className="form-button" type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
    </div>
  );
};

export default TaskForm;
