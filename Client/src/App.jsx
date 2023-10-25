import { Route, Routes } from "react-router-dom"
import Home from "./Views/Home/Home"
import Landing from "./Views/Landing/Landing"
import Clothes from "./Views/AllClothes/Clothes"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Clothes" element={<Clothes/>}></Route>

      //TODO: Crear ruta para una sola prenda
      
    </Routes>
  )
}

export default App
