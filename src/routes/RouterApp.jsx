import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Layout } from "../components/Layout"
import { TaskManagement } from "../pages/TaskManagement"


const RouterApp = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<h2>Pagina login</h2>} />
                    <Route path="/register" element={<h2>Pagina register</h2>} />
                    <Route path="/task" element={<TaskManagement/>} />
                    <Route path="*" element={<h2>No se encontro la pagina</h2>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )

}

export { RouterApp }