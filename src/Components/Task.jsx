import React from "react";
import "./Task.css";

const Task = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <>
    <div className="task-container">
      <ul>
        <li>
          <span
            className="task-text"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button className="edit-btn" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Task;

