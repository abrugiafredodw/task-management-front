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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTasks } from "../hooks/useTask";

const TaskManagement = () => {
    const {
        tasks,
        input,
        setInput,
        handleAddTask,
        handleToggleComplete,
        handleDeleteTask
    } = useTasks()
 
  return (
    <Box maxWidth={500} mx="auto" mt={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Gestor de Tareas
      </Typography>
      <Box
        component="form"
        onSubmit={handleAddTask}
        display="flex"
        gap={2}
        mb={3}
      >
        <TextField
          label="Nueva tarea"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="secondary">
          Agregar
        </Button>
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
              key={task.id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
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
