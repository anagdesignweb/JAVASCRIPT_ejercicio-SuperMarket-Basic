window.onload=inicio;
carrito=[];
let tipologias=[];

function inicio(){
    mostrarProducto();
    arreglarTipologias();
    buscarTipologias();
}

function mostrarProducto(){

    for(let g=0;g<nombres.length;g++){
        document.querySelector("section").insertAdjacentHTML("beforeend",
        `<article id="${g}">
            <div class="imatge">
                <img class="imgProducto" src="img/${imagenes[g]}" alt=""/>
            </div>
            <div class="cajatexto">
                <div class="nombre">${nombres[g]}</div>
                <div class="textoDescripcion">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut quos, hic fugiat voluptatibus
                </div>
                <div class="preu">${precios[g]} €</div>
                <div class="cajaPrecio">
                    <div>
                        <label for="cantidad">cantidad </label>
                        <input type="number" name="cantidad" class="cantidad" required value="" placeholder="1"
                        pattern="^\d{2}$">
                    </div>
                    <button class="botonAgregarItem">Comprar
                    </button>
                </div>
            </div>
        </article>`);
        document.querySelectorAll("button")[g].onclick=agregarCarro;
    }    

} 

function agregarCarro(){
    alert(carrito);
    let id=this.parentNode.parentNode.parentNode.getAttribute("id");
    carrito.push(id);
    document.querySelector(".carrito").insertAdjacentHTML("beforeend", 
    `<div class="imatge">
    <img class="imgCarritoSmall" src="img/${imagenes[id]}" alt=""/>
    <div class="preu">${precios[id]} €</div>
    </div>`);

}
function arreglarTipologias(){
    SubCategoria.forEach(convertir);
    //tipos.forEach((valor,indice)=>{let correcto=valor.substring(0,1).toUpperCase()+valor.substring(1).toLowerCase();tipos[indice]=correcto});
}

function convertir(valor,indice){
    let correcto=valor.substring(0,1).toUpperCase()+valor.substring(1).toLowerCase();       
    SubCategoria[indice]=correcto;
}
function buscarTipologias(){
    for (tipo of SubCategoria){
        if (tipologias.indexOf(tipo)==-1){
            tipologias.push(tipo);
        }
    }
    crearSelect();
}
function crearSelect(){
    document.querySelector("nav").insertAdjacentHTML("afterbegin","<select id='selector'><option>Todos</option></select>");
    document.querySelector("#selector").onchange=seleccionar;
    for (tipo of tipologias){
        document.querySelector("#selector").insertAdjacentHTML("beforeend",`
        <option>${tipo}</option>`)
    }
}
function seleccionar(){
    let miSeleccion=document.querySelector("#selector").value;
    alert(miSeleccion)
    //funcion222(miSeleccion);
}
