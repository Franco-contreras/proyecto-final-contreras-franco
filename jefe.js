// const  jefeDialogos =[
//     {
//         pregunta: "https://drive.google.com/file/d/1IzuNFBNSyKTbfA84bZZMDLmIAfa56uq4/view",
//         respuestaNo: "https://drive.google.com/file/d/1YGJtfJZBCbdmkTpdvVnhmbQhNTqXotxx/view",
//         respuestaSi: "https://drive.google.com/file/d/1nR4Y7A8Xa7K8sk8TU-yi-cbQgYXU_3e8/view"
    
//     }
// ]

const alerts = ['si ha cometido un delito y quiere confesarlo , pulse si , si no es asi pulse no']

alert (alerts[0]);

let burbujaNo = document.createElement("p");
burbujaNo.innerHTML = "<h3> ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa</h3>"
let burbujaYes = document.createElement("p");
burbujaYes.innerHTML = "<h3> estamos mandando un movil a su ubicacion</h3>"

const divJefe = document.querySelector(".jefe");
console.log(divJefe)

const botonYes = document.querySelector("#yes")


const botonNo = document.querySelector("#no")


botonNo.onclick =() =>{document.querySelector(".jefe").innerHTML = "<h4> ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla esta yendo para su casa</h4>"}

botonYes.onclick =() =>{document.querySelector(".jefe").innerHTML = "<h4> estamos mandando un movil a su ubicacion</h4>"}


console.log(botonNo);
console.log(botonYes);