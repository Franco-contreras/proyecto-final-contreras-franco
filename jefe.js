// const  jefeDialogos =[
//     {
//         pregunta: "https://drive.google.com/file/d/1IzuNFBNSyKTbfA84bZZMDLmIAfa56uq4/view",
//         respuestaNo: "https://drive.google.com/file/d/1YGJtfJZBCbdmkTpdvVnhmbQhNTqXotxx/view",
//         respuestaSi: "https://drive.google.com/file/d/1nR4Y7A8Xa7K8sk8TU-yi-cbQgYXU_3e8/view"

//     }
// ]


const alerts = ['<h3>si ha cometido un delito y quiere confesarlo , pulse si , si no es asi pulse no</h3>']

let contQ = document.querySelector(".contQ").innerHTML = (alerts[0])

let burbujaNo = document.createElement("p");
burbujaNo.innerHTML = "<h3> ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa</h3>"
let burbujaYes = document.createElement("p");
burbujaYes.innerHTML = "<h3> estamos mandando un movil a su ubicacion</h3>"

const divJefe = document.querySelector(".jefe");
console.log(divJefe)

const botonYes = document.querySelector("#yes")



const botonNo = document.querySelector("#no")


botonNo.onclick = () => { document.querySelector(".jefe").innerHTML = "<h4> ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa</h4>" ;
Swal.fire(' ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa');}

botonYes.onclick = () => {
    document.querySelector(".jefe").innerHTML = "<h4> estamos mandando un movil a su ubicacion</h4>"
;Swal.fire('estamos mandando un movil a su ubicacion'); }


console.log(botonNo);
console.log(botonYes);


let contCar = document.querySelector(".contCar").innerHTML = localStorage.getItem('auto')
console.log(contCar)


localStorage.setItem('auto', '<img class="car" src="multimedia/auto.png" alt="patrulla">')

const jefeDialogos = {
    dialogo1: 'estamos todos arrestados',
    dialogo2: 'y mientras espera , puede comprar una gorra , una camiseta , tiene derecho a permanecer fabuloso',
    dialogo3: 'bienvenido a la policia web de springfield',
}


const enJson = JSON.stringify(jefeDialogos)

console.log(typeof enJson)

localStorage.setItem("producto1", enJson)

const dialogosJson = JSON.parse(enJson)

console.log(typeof enJson)

let remeras = document.querySelector(".remeras").innerHTML = ('<h4> y mientras espera . puede comprar una gorra , una camiseta , tiene derecho a permanecer fabuloso </h4>')

// const enJson =JSON.stringify(dialogo2)
// console.log(typeof enJson)

// localStorage.setItem("producto1", enJson)



/*---------------------------------------------------------------------------------
--------------------------- FUNCION TERNARIA---------------------------------------
-----------------------------------------------------------------------------------*/

const jefeRemeras = (jefeDialogos.dialogo3 ='bienvenido a la policia web de springfield') ? true :false

jefeRemeras ?Swal.fire('bienvenido a la policia web de springfield') : Swal.fire(' ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa')


