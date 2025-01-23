
import { AgendaProvider } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendario from "./componentes/calendario/Calendario";
import CalendarioForm from "./componentes/calendarioForm/CalendarioForm";
import SidebarMenu from "./componentes/sidebarMenu/SidebarMenu";



const App = () => {
  return (

  <>
  <AgendaProvider >

  <SidebarMenu />
  <Router>
    <Routes>
      <Route path="/" element={<Calendario />} />
      <Route path="/calendarioform" element={<CalendarioForm />} />

    </Routes>
  </Router>
  
  </AgendaProvider>
    
  </>

  )
}

export default App