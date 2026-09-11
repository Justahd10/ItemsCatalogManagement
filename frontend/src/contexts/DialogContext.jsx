import { createContext, useState } from "react"



export const DialogContentContext = createContext()

export const DialogContentProvider = ({ children })=>{
  const [dialogContent, setDialogContent] = useState(null)
  const [dialogType, setDialogType] = useState("deleteItem")

  return (
    <DialogContentContext.Provider value={
      { 
        dialogContent, setDialogContent,
        dialogType, setDialogType
      }
    }>
      {children}
    </DialogContentContext.Provider>
  )
}
