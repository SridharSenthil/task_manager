import React, { useState, useEffect } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const handleAddTask = (task) => {
    if (editTask) {
      setTasks(tasks.map(t => (t.id === editTask.id ? { ...t, text: task } : t)));
      setEditTask(null);
    } else {
      const newTask = { id: Date.now(), text: task, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    if (editTask && editTask.id === id) {
      setEditTask(null);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
  };

  return (
    <div>
      <p className="task-heading">Your Tasks</p>
      <TaskForm onAddTask={handleAddTask} editTask={editTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
