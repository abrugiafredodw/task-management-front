import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Layout } from "../components/Layout"
import { TaskManagement } from "../pages/TaskManagement"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { PaginaNoEncontrada } from "../pages/PaginaNoEncontrada"
import { AuthProvider } from '../context/authContext';
import { PrivateRoute } from "./PrivateRoute";


const RouterApp = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/task" element={
                            <PrivateRoute>
                                <TaskManagement/>
                            </PrivateRoute>
                        } />
                        <Route path="*" element={<PaginaNoEncontrada/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    )
}

export { RouterApp }