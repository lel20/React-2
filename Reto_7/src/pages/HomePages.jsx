import Boton from "../component/Boton";
import { categorias } from "./data";
function HomePages() {
  const {historia,tecnologia,programacion,geografia}=categorias
  return (
    <div className=" min-h-[400px] grid grid-cols-16 gap-6 mt-10 p-4 ">
      <Boton
        link='/historia' 
        categorias={historia} 
      />
      <Boton
        link='/programacion' 
        categorias={categorias.programacion} 
      />
      <Boton 
        link='tecnologia'
        categorias={categorias.tecnologia} 
      />
      <Boton
        link='geografia' 
        categorias={categorias.geografia} 
      />
      
      
    </div>
  );
}

export default HomePages;