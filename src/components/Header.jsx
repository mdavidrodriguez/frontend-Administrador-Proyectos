import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
          Administrador de Proyectos
        </h2>

        <div className="flex items-center gap-2 flex flex-col md:flex-row ">
          <button type="button" className="font-bold uppercase ">
            Buscar Proyecto
          </button>
          <Link to={"/proyectos"} className="font-bold uppercase">
            Proyectos
          </Link>
          <button
            className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
            type="button"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
