// Componentes
import { NameField, SelectionField } from "./ItemDialogFields"
// Hooks nativos
import { useForm, FormProvider } from "react-hook-form"
// Hooks customizados
import useDialogFormRequest from "../../services/useDialogFormRequest"
// Estilização
import "./ItemDialog.css"



const ItemDialogFormRoot = ({ children, dialogType, itemDatas })=>{
  // Estado do formulário do dialog
  const methods = useForm({'defaultValues': itemDatas})
  const { handleSubmit } = methods

  // Estado da requisição
  const { mutation } = useDialogFormRequest(dialogType, itemDatas.id)
  
  // Envio dos dados
  const onSubmit = (data)=> mutation.mutate(data)
  
  return (
    <FormProvider {...methods}>
      <form className="" 
      id={`dialog-form-${itemDatas.id}`}
      onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}


const ItemDialogForm ={
  'Root': ItemDialogFormRoot,
  'NameField': NameField,
  'SelectionField': SelectionField
}

export default ItemDialogForm
