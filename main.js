

let jefePregunta = prompt('si ha cometido un delito y quiere confesarlo , escriba si , si no es asi escriba no')
const arrayJefe = ['ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla para su casa', ' estamos enviando una patrulla esta yendo su casa ']

if (jefePregunta === 'si') {
    alert(arrayJefe [1])
} else alert(arrayJefe[0])

console.log (arrayJefe.includes ('ha pulsado no, osea que si ha cometido un delito, pero no quiere confesarlo un auto patrulla para su casa', ' estamos enviando una patrulla esta yendo su casa ') );
console.log (arrayJefe,includes(' estamos enviando una patrulla esta yendo su casa '));