// Contextos
import { useFormContext } from "react-hook-form"



export const DialogNameField = ({ label })=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">{label}</span>
      <input className=""
      {...register("item_name")}
      />
    </label>
  )
}

export const DialogSelectionField = ({ label, children})=>{
  const { register } = useFormContext()

  return (
    <label className="">
      <span className="">{label}</span>
      <select className=""
      {...register(label)}
      >
        {children}
      </select>
    </label>
  )
}