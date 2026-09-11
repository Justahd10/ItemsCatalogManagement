import "./ItemDialog.css"



const closeIcon =(
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
)

const ItemDialogHeader = ({ dialogRef, label })=>{  
  return (
    <div className="">
      <h3 className="">{label}</h3>

      <button className="" 
      onClick={()=> dialogRef.current.close()}
      >
        {closeIcon}
      </button>
    </div>
  )
}

export default ItemDialogHeader