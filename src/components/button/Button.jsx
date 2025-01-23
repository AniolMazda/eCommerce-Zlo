import './button.scss'

function Button({buttonName,buttonFunction}) {
    
  return (
    <>
      <button className="boton-default" type={buttonFunction}>
        <div className="top"><span>{buttonName}</span></div>
        <div className="bottom"><span>{buttonName}</span></div>
      </button>
    </>
  )
}

export default Button