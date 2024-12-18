async function listarProductos(){
    const conexion= await fetch("https://alura-geek-api-lac.vercel.app/productos");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

async function enviarProducto(nombre, precio, imagen){
    return await fetch("https://alura-geek-api-lac.vercel.app/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
};

const borrarProducto = async (id) => {
    try{
        const res= await fetch(`https://alura-geek-api-lac.vercel.app/productos/${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}

export const conexionApi={
    listarProductos,
    enviarProducto,
    borrarProducto
}