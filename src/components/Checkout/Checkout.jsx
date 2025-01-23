import './checkout.scss'
import Button from '../button/Button'
const Checkout = ({dataForm,eventSubmit,eventOnChange}) => {
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form onSubmit={eventSubmit}>
                <span>
                    <label>Nombre Completo: </label>
                    <input type="text" placeholder="Nombre Completo" value={dataForm.fullname} name="fullname" onChange={eventOnChange} />
                </span>
                <span>
                    <label>Email: </label>
                    <input type="email" placeholder="Email" name="email" value={dataForm.email} onChange={eventOnChange} />
                </span>
                <span>
                    <label>Celular: </label>
                    <input type="phone" placeholder="323205448" name="phone" value={dataForm.phone} onChange={eventOnChange} />
                </span>
                <Button buttonName="Finalizar Compra" buttonFunction="submit" />
            </form>
        </div>
    )
}
export default Checkout