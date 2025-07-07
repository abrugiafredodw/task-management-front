import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
    const [user, setUser] = useState(() => {
    const savedToken = localStorage.getItem("token")
    return savedToken ? jwtDecode(savedToken) : null
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    setUser(jwtDecode(newToken));
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => useContext(AuthContext)

export { useAuth }