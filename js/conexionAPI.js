async function listarProductos(){
    const conexion= await fetch("http://localhost:3001/productos");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

async function enviarProducto(nombre, precio, imagen){
    return await fetch("http://localhost:3001/productos",{
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
        const res= await fetch(`http://localhost:3001/productos/${id}`,{
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