// Contextos
import { useFormContext } from "react-hook-form"



export const NameField = ()=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">Nome</span>
      <input className="" type="text"
      placeholder="Ex: Meu novo item" 
      {...register("name")}
      />
    </label>
  )
}

export const SelectionField = ({ children, label, name })=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">{label}</span>
      <select className="" name={name}
      {...register(name)}
      >
        {children}
      </select>
    </label>
  )
}