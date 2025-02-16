import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calendario from "../calendario/Calendario";
import CalendarioForm from "../calendarioForm/CalendarioForm";
import 'bootstrap/dist/css/bootstrap.min.css';



const SidebarMenu = () => {
  return (


    <>
    <Router>

<div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Historias Medicas</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to="/registro" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-person-rolodex text-white" /> <span className="ms-1 d-none d-sm-inline text-white">Registro</span>
                  </Link>
                </li>
                <li>
                  <Link to="/medicos" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-person text-white" /> <span className="ms-1 d-none d-sm-inline text-white">Medico</span> 
                    </Link>               
                </li>
                <li>
                  <Link to="/calendario" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table text-white" /> <span className="ms-1 d-none d-sm-inline text-white">Calendario</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ingresos" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-person-add text-white" /> <span className="ms-1 d-none d-sm-inline text-white">ingresos</span>
                    </Link>
                </li>
                <li>
                  <Link to="/pacientes" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-white" /> <span className="ms-1 d-none d-sm-inline text-white">Pacientes</span> </Link>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://media.istockphoto.com/id/2156382336/es/foto/icono-de-perfil-de-usuario-azul-simple-aislado-sobre-un-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=9nMntkwquh56Vy7M9xLLGAurWM5H_VOV4nSAq_uAxh0=" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">Usuario</span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><Link className="dropdown-item" to="#">Nueva Tarea</Link ></li>
                  <li><Link className="dropdown-item" to="#">Configuracion</Link ></li>
                  <li><Link className="dropdown-item" to="#">Perfil</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" to="#">Salir</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <Routes>
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/calendarioForm" element={<CalendarioForm />} />
            </Routes>
          </div>
        </div>
      </div>

    </ Router>

    </>

  )
}

export default SidebarMenu