import Checkout from "./Checkout"
import { useState,useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { or } from "firebase/firestore"


const CheckoutContainer = () => {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        phone: ''
    })

    const {cart, totalPrice} = useContext(CartContext)

    const handleChangeForm = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const orden = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }
        console.log(orden)
    }


    return (
        <Checkout dataForm={dataForm} eventSubmit={handleSubmit} eventOnChange={handleChangeForm} />
    )
}
export default CheckoutContainer