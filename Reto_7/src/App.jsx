import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from './pages/HomePages'
import Geografia from './pages/Geografia'
import Programacion from "./pages/Programacion";
import Historia from "./pages/Historia"; 
import Tecnologia from "./pages/Tecnologia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/programacion" element={<Programacion />}></Route>
          <Route path="/geografia" element={<Geografia />}></Route>
          <Route path="/historia" element={<Historia />}></Route>
          <Route path="/tecnologia" element={<Tecnologia />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
