import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Layout } from "../components/Layout"
import { TaskManagement } from "../pages/TaskManagement"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { PaginaNoEncontrada } from "../pages/PaginaNoEncontrada"


const RouterApp = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/task" element={<TaskManagement/>} />
                    <Route path="*" element={<PaginaNoEncontrada/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )

}

export { RouterApp }