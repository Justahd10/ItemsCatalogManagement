// Componentes
import { NameField, SelectionField } from "./ItemDialogFields"
// Hooks nativos
import { useForm, FormProvider } from "react-hook-form"
// Estilização
import "./ItemDialog.css"



const ItemDialogFormRoot = ({ children, dialogType, itemDatas })=>{
  const methods = useForm({'defaultValues': itemDatas})
  const { handleSubmit, formState: { errors } } = methods

  const onSubmit = (data)=>{
    // HTTP Client na criação de item
  }

  return (
    <FormProvider {...methods}>
      <form className="" 
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
