
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

