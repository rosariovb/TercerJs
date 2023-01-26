const shop = [
    {
        id: 1,
        nombre: "Glitter en gel 01",
        descripcion: "Ideal para cualquier tipo de evento evento",
        imagen: "./img/violet.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 600
    },

    {
        id: 2,
        nombre: "Glitter en gel 02",
        descripcion: "Ideal para cualquier tipo de evento evento",
        imagen: "./img/verde.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 600
    },


    {
        id: 3,
        nombre: "Glitter en gel 03",
        descripcion: "Ideal para cualquier tipo de evento evento",
        imagen: "./img/lil.jpeg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 600
    },

    {
        id: 4,
        nombre: "Glitter en gel 04",
        descripcion: "Ideal para peinados",
        imagen: "./img/dorado.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 600
    },

    {
        id: 5,
        nombre: "Combo glitters",
        descripcion: "Ideal para peinados",
        imagen: "./img/combo.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 1500
    },

    {
        id: 6,
        nombre: "Glitter en polvo",
        descripcion: "Ideal para peinados",
        imagen: "./img/polvo.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },
        precio: 500
    },

    {
        id: 7,
        nombre: "Tatuajes",
        descripcion: "Ideal para peinados",
        imagen: "./img/tatoo.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",
        },

        precio: 400
    },

    {
        id: 8,
        nombre: "Stickers",
        descripcion: "Ideal para peinados",
        imagen: "./img/facee.jpg",
        categoria: {
            nombre: "Glitter",
            id: "Glitter",

        },

        precio: 300
    },

]


/* DOM */

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonCategoria = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let number = document.querySelector("#number");





function cargarShop(producto) {

    contenedorProductos.innerHTML = "";

    shop.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}">
            <div class="producto-detalles">
              <h3 class="producto-nombre">${producto.nombre}</h3>
              <p class="producto-precio">$${producto.precio}</p>
               <button class="producto-agregar"id="agregar-${producto.id}">Agregar</button>
            </div>

        `;

        contenedorProductos.append(div);




    })
    actualizarBotonesagregar();

}

cargarShop(shop);


botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = shop.find(producto.categoria.id === e.currentTarget.id);
            const productosBoton = (producto => producto.categoria.id === e.currentTarget.id);
            cargarShop(productosBoton);
        } else {

            cargarShop(shop);
        }


    });

});

function actualizarBotonesagregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);


    });


}

const productoEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    let productoAgregado = shop.find(producto => producto.id === idBoton);

    if (productoEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productoEnCarrito.findIndex(producto => producto.id === idBoton);
        productoEnCarrito[index].cantidad++;

    } else {
        productoAgregado = cantidad = 1;
        productoEnCarrito.push(productoAgregado);


    }
    actualizarNumber()
}

function actualizarNumber() {
    let number = productoEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    number.innerText = nuevoNumber;
}




