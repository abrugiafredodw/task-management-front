import { BrowserRouter,Routes, Route } from "react-router-dom"


const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h2>Pagina principal</h2>}/>
                <Route path="/login" element={<h2>Pagina login</h2>}/>
                <Route path="/register" element={<h2>Pagina register</h2>}/>
                <Route path="*" element={<h2>No se encontro la pagina</h2>}/>
            </Routes>
        </BrowserRouter>
    )

}

export { RouterApp }