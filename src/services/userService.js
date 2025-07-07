const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:4000/api';

const registerService = async (userData) =>{
    try {
        const response = await fetch(`${API_URL}/usuarios/registro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        });
    
        if (!response.ok) {
        throw new Error('Error al registrar el usuario');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en el registro:', error);
        throw error;
    }
}

const loginService = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const data2 = await response.json();
            throw new Error(data2.mensaje || 'Error al iniciar sesión');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        throw error;
    }
}

export {registerService, loginService};