/* PRODUCTOS STOCK */
const tienda = [
    {
        id: 1,
        titulo: "Glitter en gel 01",
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
        titulo: "Glitter en gel 02",
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
        titulo: "Glitter en gel 03",
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
        titulo: "Glitter en gel 04",
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
        titulo: "Combo glitters",
        descripcion: "Ideal para peinados",
        imagen: "./img/combo.jpg",
        categoria: {
            nombre: "todos",
            id: "todos",

        },
        precio: 1500
    },

    {
        id: 6,
        titulo: "Glitter en polvo",
        descripcion: "Ideal para peinados",
        imagen: "./img/polvo.jpg",
        categoria: {
            nombre: "todos",
            id: "todos",

        },
        precio: 500
    },

    {
        id: 7,
        titulo: "Tatuajes",
        descripcion: "Ideal para peinados",
        imagen: "./img/tatoo.jpg",
        categoria: {
            nombre: "todos",
            id: "todos",
        },

        precio: 400
    },

    {
        id: 8,
        titulo: "Stickers",
        descripcion: "Ideal para peinados",
        imagen: "./img/facee.jpg",
        categoria: {
            nombre: "todos",
            id: "todos",

        },

        precio: 300
    },

];




/* DOM */

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let number = document.querySelector("#number");





function cargarTienda(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}">
            <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
               <button class="producto-agregar"id="agregar-${producto.id}">Agregar</button>
            </div>

        `;

        contenedorProductos.append(div);

    })

    actualizarBotonesagregar();
  

}

cargarTienda(tienda);


botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos") {
            const productosCategoria = tienda.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
            const productosBoton = tienda.filter (producto => producto.categoria.id === e.currentTarget.id);
            cargarTienda(productosBoton);
        } else {
            tituloPrincipal.innerText = "Bienvenidos a Malcriadas";

            cargarTienda(tienda);
        }
       
       
    });

});



function actualizarBotonesagregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);


    });


}

let productosEnCarrito;

let productosEnCarritoLS =  localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumber();

} else {
  productosEnCarrito=[];

}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    let productoAgregado = tienda.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);


    }
    actualizarNumber();
    
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

function actualizarNumber() {
    let nuevoNumber = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    number.innerText = nuevoNumber;
}






