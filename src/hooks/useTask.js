import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { obtenerTareas,eliminarTarea,actualizarTarea } from "../services/taskService";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const [isListening, setIsListening] = useState(false);

  const [loader, setLoader] = useState(false);

  const recognitionRef = useRef(null);

  const { token } = useAuth();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  useEffect(() => {
    const fetchTasks = async () => {
      setLoader;
      try {
        const response=await obtenerTareas();
        setTasks(response.tareas||[]);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      }finally{
        setLoader(false);
      }
    };

    fetchTasks();
  }, [token]);

  const handleToggleComplete = async (id, completed) => {
    try {
      const data = await actualizarTarea(id, completed);
      setTasks(
        tasks.map((task) =>
          task.id === id ? data : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await eliminarTarea(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return {
    tasks,
    input,
    loader,
    setInput,
    handleAddTask,
    handleToggleComplete,
    handleDeleteTask,
  };
};

export { useTasks };
