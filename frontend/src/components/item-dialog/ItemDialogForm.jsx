// Hooks nativos
import { useForm, FormProvider } from "react-hook-form"



const ItemDialogForm = ({ children })=>{
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
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default ItemDialogForm