// Contextos
import { useFormContext } from "react-hook-form"



export const NameField = ({ currentValue })=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">Nome</span>
      <input className="" placeholder="Ex: Meu novo item" 
      value={currentValue || ""}
      {...register("item_name")}
      />
    </label>
  )
}

export const SelectionField = ({ label, name, children })=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">{label}</span>
      <select className="" name={name}
      {...register(label)}
      >
        {children}
      </select>
    </label>
  )
}