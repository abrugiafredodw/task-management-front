const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:4000/api';

// Helper to get token from localStorage
const getToken = () => localStorage.getItem('token');

const handleUnauthorized = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
};

export const crearTarea = async (tarea) => {
    const response = await fetch(`${API_URL}/tareas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(tarea)
    });
    if (response.status === 401) return handleUnauthorized();
    if (!response.ok) throw new Error('Error al crear tarea');
    return await response.json();
};

export const obtenerTareas = async () => {
    const response = await fetch(`${API_URL}/tareas`, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    if (response.status === 401) return handleUnauthorized();
    if (!response.ok) throw new Error('Error al obtener tareas');
    return await response.json();
};

export const obtenerTareaPorId = async (id) => {
    const response = await fetch(`${API_URL}/tareas/${id}`, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    if (response.status === 401) return handleUnauthorized();
    if (!response.ok) throw new Error('Error al obtener tarea');
    return await response.json();
};

export const actualizarTarea = async (id, tarea) => {
    const response = await fetch(`${API_URL}/tareas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(tarea)
    });
    if (response.status === 401) return handleUnauthorized();
    if (!response.ok) throw new Error('Error al actualizar tarea');
    return await response.json();
};

export const eliminarTarea = async (id) => {
    const response = await fetch(`${API_URL}/tareas/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    if (response.status === 401) return handleUnauthorized();
    if (!response.ok) throw new Error('Error al eliminar tarea');
    return await response.json();
};

