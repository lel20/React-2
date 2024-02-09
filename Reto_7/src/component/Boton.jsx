import { Link } from "react-router-dom";
function Boton({categorias,link}) {
  return (
      <Link to={link}
      className="min-h-[200px] text-slate-200 rounded-xl flex justify-center items-center hover:bg-orange-600">
       {categorias}
      </Link> 
      
      
   
   
      
  );
}

export default Boton;