import { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Paper } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    // Por ahora solo mostramos los datos en consola
    console.log({ email, password });
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Link href="#" underline="hover">
              ¿Olvidaste tu contraseña?
            </Link>
            <Button component={Link} href="/register" variant="contained" color="secondary" size="small">
              Registrarse
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export { Login };