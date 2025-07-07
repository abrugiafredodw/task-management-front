import { useState } from 'react';
import { registerService } from '../services/userService';

const useRegister = ()=>{
    const [form, setForm] = useState({
    nombre: '',
    apellido: '',  
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    // Aquí iría la lógica de registro
    const register={
      nombre: form.nombre,
      apellido: form.apellido,
      email: form.email,
      password: form.password
    }
    await registerService(register)
      .then(response => {
        console.log('Registro exitoso:', response);
        // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
        window.location.href = '/login'; // Redirigir a la página de login
      })
      .catch(err => {
        console.error('Error en el registro:', err);
        setError('Error al registrar el usuario');
      });
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit
  };
}

export {useRegister}