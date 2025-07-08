import { useState, useEffect, useRef } from "react";
import { obtenerTareas,eliminarTarea,actualizarTarea, crearTarea } from "../services/taskService";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [isListening, setIsListening] = useState(false);

  const [loader, setLoader] = useState(false);

  const [error, setError] = useState('');

  const recognitionRef = useRef(null);

 

  useEffect(() => {  
    fetchTasks();
  }, []);

    const fetchTasks = async () => {
      setLoader(true);
      try {
        const response=await obtenerTareas();
        setTasks(response.tareas);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Error al cargar las tareas. Por favor, inténtalo de nuevo más tarde.");
      }finally{
        setLoader(false);
      }
    };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "es-AR";
    recognition.interimResults = false;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript.trim();
      addTask(transcript.charAt(0).toUpperCase() + transcript.slice(1) + '.');
    };
    recognitionRef.current = recognition; 
  }, []);

   const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop()
    } else {
      recognitionRef.current.start()
    }
    setIsListening(!isListening)
  }

   const addTask = async (text) => {
    if (text.trim() === "") return;
    const newTask = {
      text: text,
      completed: false,
    };
    try {
      const data = await crearTarea(newTask);
      setTasks(prevTasks => [...prevTasks, data.tarea]);
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Error al agregar la tarea. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const handleToggleComplete = async (id, completed,text) => {
    try {
       const editTask = {
        text: text,
        completed: completed ? false : true,
       };
      const data = await actualizarTarea(id, editTask);
      setTasks(
        tasks.map((task) =>
          task._id === id ? data.tarea : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Error al actualizar la tarea. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await eliminarTarea(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Error al eliminar la tarea. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return {
    tasks,
    loader,
    isListening,
    error,
    toggleListening,
    handleToggleComplete,
    handleDeleteTask,
  };
};

export { useTasks };
