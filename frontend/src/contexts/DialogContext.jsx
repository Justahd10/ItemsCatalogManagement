import { createContext, useState } from "react"



export const DialogContentContext = createContext()

export const DialogContentProvider = ({ children })=>{
  const [dialogContent, setDialogContent] = useState({
    'type': "createItem",
    'itemDatas': {}
  })

  return (
    <DialogContentContext.Provider value={
      { dialogContent, setDialogContent }
    }>
      {children}
    </DialogContentContext.Provider>
  )
}
