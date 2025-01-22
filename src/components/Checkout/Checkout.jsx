import './checkout.scss'
const Checkout = ({dataForm,eventSubmit,eventOnChange}) => {
    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={eventSubmit}>
                <label>Nombre Completo</label>
                <input type="text" placeholder="Nombre Completo" value={dataForm.fullname} name="fullname" onChange={eventOnChange} />
                <label>Email</label>
                <input type="email" placeholder="Email" name="email" value={dataForm.email} onChange={eventOnChange} />
                <label>Celular</label>
                <input type="phone" placeholder="323205448" name="phone" value={dataForm.phone} onChange={eventOnChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Checkout