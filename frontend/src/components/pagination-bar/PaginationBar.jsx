// Componentes
import PaginationBarStepper from "./PaginationBarStepper"
import PaginationBarCenter from "./PaginationBarCenter"
// Estilização
import "./PaginationBar.css"



const PaginationBarRoot = ({ children })=>{
  return <nav className="">{children}</nav>
}


const PaginationBar ={
  'Root': PaginationBarRoot,
  'Stepper': PaginationBarStepper,
  'Center': PaginationBarCenter
}

export default PaginationBar