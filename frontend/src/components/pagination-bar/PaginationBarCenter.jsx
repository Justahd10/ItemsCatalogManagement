// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearchContext"
// Hooks nativos
import { useContext } from "react"
// Estilização
import "./PaginationBar.css"



const PaginationBarCenter = ({ totalItems })=>{
  // Contexto da pesquisa de itens
  const {
    handlePagination, urlParams: { pagination: { currentPage, perPage } }
  } = useContext(ItemsSearchContext)

  // Calcula total de páginas
  let totalPages = Math.ceil(totalItems / perPage)
  if (totalPages === 0) totalPages = 1

  return (
    <div className="">
      <button className="" type="button"
      onClick={()=>{
        handlePagination({'currentPage': 1})
      }}
      >
        1
      </button>

      <span className="">
        Página: {currentPage}
      </span>

      <button className="" type="button"
      onClick={()=>{
        handlePagination({'currentPage': totalPages})
      }}
      >
        {totalPages}
      </button>
    </div>
  )
}

export default PaginationBarCenter