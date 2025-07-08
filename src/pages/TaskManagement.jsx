import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTasks } from "../hooks/useTask";

const TaskManagement = () => {
    const {
        tasks,
        loader,
        toggleListening,
        isListening,
        handleToggleComplete,
        handleDeleteTask
    } = useTasks()

  if (loader) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="60vh">
        <CircularProgress color="secondary" />
        <Typography variant="h6" mt={2}>Cargando...</Typography>
      </Box>
    );
  }
 
  return (
    <Box maxWidth={500} mx="auto" mt={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Gestor de Tareas
      </Typography>
      <Box
        component="div"
        display="flex"
        gap={2}
        mb={3}
      >
      <Button  variant="contained" color="secondary" onClick={toggleListening}>{isListening ? "Grabando..." : "Grabar"}</Button>
      </Box>
      <Paper elevation={3}>
        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: 500
          }}
        >
          {tasks.length === 0 && (
            <ListItem>
              <ListItemText primary="No hay tareas aún." />
            </ListItem>
          )}
          {tasks.map((task) => (
            <ListItem
              key={task._id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(task._id,task.completed,task.text)}
                color="primary"
              />
              <ListItemText
                primary={task.text}
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export { TaskManagement };
