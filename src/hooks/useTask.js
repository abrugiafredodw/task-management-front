import { useState,useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  useEffect(() => {
    setTasks([])
  }, [])

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    input,
    setInput,
    handleAddTask,
    handleToggleComplete,
    handleDeleteTask
  };
};

export { useTasks };
