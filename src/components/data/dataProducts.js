const products = [
    {
        id:1,
        name:"CD Lógica de la Muerte",
        description:"Presentación de CD del EP-Demo llamado Logica de la muerte",
        category:"CDs",
        image:"/img/cd-logica.png",
        price:20,
        stock:3,
        songs:{
            1:"Logica De La Muerte",
            2:"Post - Mortem",
            3:"Sueño Asfixiante",
            4:"Alter - Ego Sin Suerte",
            5:"Locura Inverosimil",
            6:"Percepción Singular",
            7:"Alivio Interno",
            8:"Diabeł"
        }
    },
    {
        id:2,
        name:"LP Lógica de la Muerte",
        description:"Presentación de LP del EP-Demo llamado Logica de la muerte",
        category:"LPs",
        image:"/img/lp-logica.png",
        price:40,
        stock:2,
        songs:{
            1:"Logica De La Muerte",
            2:"Post - Mortem",
            3:"Sueño Asfixiante",
            4:"Alter - Ego Sin Suerte",
            5:"Locura Inverosimil",
            6:"Percepción Singular",
            7:"Alivio Interno",
            8:"Diabeł"
        }
    }
]
const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }),2000;
    });
}
 export { getProducts }