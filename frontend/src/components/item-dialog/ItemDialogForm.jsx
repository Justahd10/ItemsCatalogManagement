// Componentes
import { NameField, SelectionField } from "./ItemDialogFields"
// Hooks nativos
import { useForm, FormProvider } from "react-hook-form"
// Estilização
import "./ItemDialog.css"



const ItemDialogFormRoot = ({ children })=>{
  const methods = useForm({
    'defaultValues': {
      'item_name': "", 
      'brand': "apple", 
      'category': "smartphones"
    }
  })
  
  const { handleSubmit } = methods

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