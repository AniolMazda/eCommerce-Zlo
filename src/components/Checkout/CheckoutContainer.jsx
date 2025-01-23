import Checkout from "./Checkout"
import CheckoutEmpty from "./CheckoutEmpty"
import { useState,useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"


const CheckoutContainer = () => {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        phone: ''
    })
    const [orderId, setOrderId] = useState(null)

    const {cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeForm = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const orden = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        //Primeramente se valida el formulario
        const responseForm = await validateForm(dataForm)
        console.log(responseForm)
        if(responseForm.status === 'success'){
            await uploadOrder(orden)
        }else{
            toast.warn(responseForm.message)
        }
        
    }

    const uploadOrder = async (newOrden) => {
        try{
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrden)
            setOrderId(response.id)
            deleteCart()
        }
        catch(error){
            console.log(error)
        }
    }

    if(orderId){
        return (
            <CheckoutEmpty orderId={orderId} />
        )
    }

    return (
        <Checkout dataForm={dataForm} eventSubmit={handleSubmit} eventOnChange={handleChangeForm} />
    )
}
export default CheckoutContainer