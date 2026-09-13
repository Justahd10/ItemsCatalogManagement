import { createContext, useState, useRef } from "react"



export const DialogContentContext = createContext()

export const DialogContentProvider = ({ children })=>{
  // Referência para abertura e fechamento do modal
  const dialogRef = useRef(null)

  // Contexto do conteúdo do modal
  const [dialogContent, setDialogContent] = useState({
    'type': "createItem",
    'itemDatas': {}
  })

  return (
    <DialogContentContext.Provider value={
      { dialogContent, setDialogContent, dialogRef }
    }>
      {children}
    </DialogContentContext.Provider>
  )
}
