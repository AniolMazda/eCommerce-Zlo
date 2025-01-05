import './button.scss'

function Button({buttonName}) {
    
  return (
    <>
      <button className="boton-default">
        <div className="top"><span>{buttonName}</span></div>
        <div className="bottom"><span>{buttonName}</span></div>
      </button>
    </>
  )
}

export default Button