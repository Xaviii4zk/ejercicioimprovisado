console.log("que pasa colega");
import BDJson from './jugadores_barca.json' with { type: 'json' };

console.log(BDJson);

const textoBD = JSON.stringify(BDJson);
console.log(textoBD);

const objeto = JSON.parse(textoBD);
console.log(objeto);

const recuperacion = localStorage.getItem("miBD");
localStorage.setItem("miBD", textoBD);
console.log(recuperacion);
