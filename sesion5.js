const jugador1 = {
    nom: "Paco",
    puntos: 27,
    edad: 30,
    partidas: 18,
    equipo: "A",
    sumarPuntos (p) {
        this.puntos = this.puntos + p;
        console.log(this.puntos);
    },

    setPuntos (p) {
        if (p>0) {
          this.puntos=p;
          return this.puntos;
        } else {
          return ("error");
        }
    }


    /*     sumarPuntos2: (p) >= {
        jugador1.puntos = jugador1.puntos + p;
        console.log(jugador1.puntos);
    }*/

};
const ObjectoInfo = document.querySelector('.ObjectoInfo');
jugador1.sumarPuntos(3);
console.log(jugador1.puntos);
console.log(jugador1.setPuntos(10));
const entrades = Object.entries(jugador1);
console.log(entrades);
const valors = Object.values(jugador1);
console.log(valors);
let i=0;
for (const [clau, valor] of Object.entries(jugador1)) {
  ObjectoInfo.innerHTML=`<div>${i}: ${clau}: ${valor}</div>`;
  i++;
}

