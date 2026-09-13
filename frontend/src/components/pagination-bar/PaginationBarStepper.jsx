// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearchContext"
// Hooks nativos
import { useContext } from "react"
// Estilização
import "./PaginationBar.css"



const buttonsIcons ={
  'previus': (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </svg>
  ),
  'next': (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
  )
}


const PreviusButton = ()=>{
  // Contexto da pesquisa de itens
  const { 
    handlePagination, urlParams: { pagination: { currentPage } }
  } = useContext(ItemsSearchContext)



  return (
      <button className="" type="button"
      onClick={()=>{
        handlePagination({'currentPage': currentPage - 1})
      }} disabled={currentPage === 1}
      >
          {buttonsIcons.previus}
      </button>
  )
}

const NextButton = ({ totalItems })=>{
  // Contexto da pesquisa de itens
  const {
    handlePagination, urlParams: { pagination: { currentPage, perPage } }
  } = useContext(ItemsSearchContext)

  // Cálculo do total de páginas
  let totalPages = Math.ceil(totalItems / perPage)
  if (totalPages === 0) totalPages = 1

  return (
      <button className="" type="button"
      onClick={()=>{
        handlePagination({'currentPage': currentPage + 1})
      }} disabled={currentPage === totalPages}
      >
          {buttonsIcons.next}
      </button>
  )
}


const PaginationBarStepper ={
  'Previus': PreviusButton,
  'Next': NextButton
}

export default PaginationBarStepper