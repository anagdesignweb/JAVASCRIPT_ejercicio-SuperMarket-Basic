    window.onload=inicio;
    let carrito=[];
    let tipologias=[];

function inicio(){
    mostrarProducto();
    arreglarTipologias();
    buscarTipologias();
}
function arreglarTipologias(){
    tipos.forEach(convertir);
    //tipos.forEach((valor,indice)=>{let correcto=valor.substring(0,1).toUpperCase()+valor.substring(1).toLowerCase();tipos[indice]=correcto});
}

function convertir(valor,indice){
    let correcto=valor.substring(0,1).toUpperCase()+valor.substring(1).toLowerCase();       
    tipos[indice]=correcto;
}

//const buscarTipologias=()=>{...}
function buscarTipologias(){
    for (tipo of tipos){
        if (tipologias.indexOf(tipo)==-1){
            tipologias.push(tipo);
        }
    }
    crearSelect();
}
function crearSelect(){
    document.querySelector("body").insertAdjacentHTML("afterbegin","<select id='selector'><option>Todos</option></select>");
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

function mostrarProducto(){
for(let g=0;g<nombres.length;g++){
    document.querySelector("section").insertAdjacentHTML("beforeend",
    `<article id="${g}">
        <div class="imatge">
            <img src="images/${imagenes[g]}" alt="${nombres[g]}"/>
            <div class="preu">
                ${precios[g]}€
            </div>
            <button class="comprar">Comprar</button>
        </div>        
        <div class="nom">
            ${nombres[g]}
        </div>        
    </article>`);
    document.querySelectorAll(".comprar")[g].onclick=comprar;
 }
}
function comprar(){
    let id=this.parentNode.parentNode.getAttribute("id"); 
    carrito.push(id);
    document.querySelector(".carrito").insertAdjacentHTML("beforeend",`
    <div class="producto"><img src="images/${imagenes[id]}"/></div>`)
}