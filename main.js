
function preguntaJefe(espera) {

    alert(espera);
}

// let laPregunta = 'Si usted ha cometido un delito pulse sí, de lo contrario pulse no';

let espera = 'y Mientras espera compre una gorra , una camiseta de policia , tiene derecho a permanecer FABULOSO!!';




let jefePregunta = prompt('si ha cometido un delito y quiere confesarlo , escriba si , si no es asi escriba no')
const arrayJefe = ['ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla para su casa', ' estamos enviando una patrulla esta yendo su casa ']

if (jefePregunta === 'si') {
    alert(arrayJefe[1])
} else alert(arrayJefe[0])

console.log(arrayJefe.includes('ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla para su casa', ' estamos enviando una patrulla esta yendo su casa '));
console.log(arrayJefe.includes(' estamos enviando una patrulla esta yendo su casa '));

preguntaJefe(espera)

const jefeG = {
    nombre: "jefe gorgory",
    dialogo: "Estamos todos arrestados",
    advertencia: "ya pasaron 5 segundos",
}
// bucle de tiempo por que no se a que ponerle un bucle 
var tiempo = 0
for (i = 0; i >= 5000; i++) {
    if (i === 1000)
        tiempo += 1
    if (i === 2000)
        tiempo += 1
    if (i === 3000)
        tiempo += 1
    if (i === 4000)
        tiempo += 1
    if (i === 5000)
        tiempo += 1

}

console.log(jefeG.advertencia + tiempo)




console.log(jefeG.dialogo);



