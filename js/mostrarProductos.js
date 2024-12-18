import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(id, nombre, precio, imagen) {
    const card = document.createElement("div");
    card.className = "productCard";

    card.innerHTML = `<img
                src="${imagen}"
                class="productImg"
                alt="${nombre}"
              />
              <p class="productName">${nombre}</p>
              <div class="flex_row">
                <p class="productPrice">$ ${precio}</p>
                <img src="assets/papelera.svg" class="image4" alt="Eliminar" data-id="${id}"/>
              </div>`;

    //Código para eliminar un cuadro desde el botón "papelera"
    const botonEliminar = card.querySelector(".image4");
    botonEliminar.addEventListener("click", () => {
        conexionApi.borrarProducto(id)
            .then(() => {
                card.remove();
            })
            .catch(err => console.log(err));
    });


    lista.appendChild(card);
    return card;
}

const producto = async () => {
    try {
        const listaApi = await conexionApi.listarProductos()

        listaApi.forEach(card => {
            lista.appendChild(
                crearCard(
                    card.id,
                    card.nombre,
                    card.precio,
                    card.imagen)
            );
        });

    } catch (error) {
        console.log(error)
    };

};

producto()