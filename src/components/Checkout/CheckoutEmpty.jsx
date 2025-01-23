import './checkout.scss'
const CheckoutEmpty = ({orderId}) => {
    return (
        <div className="checkout-empty">
            <h1>¡Orden subida correctamente! Guarde su codigo de seguimiento</h1>
            <p className="order-id">{orderId}</p>
        </div>
    )
}
export default CheckoutEmpty