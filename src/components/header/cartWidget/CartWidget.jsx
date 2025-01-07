import './cartwidget.scss'

function CartWidget({quantity}) {

  return (
    <>
      <svg enableBackground="new 0 0 50 50" height="50px" version="1.1" viewBox="0 0 50 50" width="50px">
          <path d="M8,14L4,49h42l-4-35H8z" fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
          <rect fill="none" height="50" width="50"/>
          <path d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8" fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
          <circle cx="34" cy="19" r="2"/>
          <circle cx="16" cy="19" r="2"/>
      </svg>
      <p>{quantity !== 0 && quantity}</p>
    </>
  )
}

export default CartWidget