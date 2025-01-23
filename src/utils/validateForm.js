import { object, string, number } from 'yup';

let userSchema = object({
    fullname: string().required("El nombre completo es requerido"),
    email: string().email().required("El email es requerido"),
    phone: number().positive("El numero tiene que tener solo numeros enteros positivos").required("El teléfono es requerido")
})

const validateForm = async (dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return { status: "success", message: 'Formulario validado' }
    }
    catch(error){
        return { status: "error", message: error.message }
    }
}

export default validateForm;