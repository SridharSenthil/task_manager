import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      <div className="scrollable-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="text">No tasks available !</p>
      )}
      </div>
    </div>
  );
};

export default TaskList;
