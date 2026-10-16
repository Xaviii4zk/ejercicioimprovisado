
import Partidos from './partidos.json' with { type: 'json' };

const divPartidos = document.querySelector(".Partidoos");


let posiciones = [];

for (let i = 0; i < Partidos.length; i++) {
    posiciones.push(i);

    divPartidos.innerHTML += `
        <div class="Pronostico">
            <h2>${Partidos[i].visitante} vs ${Partidos[i].local}</h2>

            <div class="Nombre">
                <h3>Nombre</h3>
                <input type="text" class="inputN">
            </div>

            <div class="Resultados">
                <div>
                    <input type="number" class="NumeroVisitante">
                    <h3>${Partidos[i].visitante}</h3>
                </div>

                <div>
                    <input type="number" class="NumeroLocal">
                    <h3>${Partidos[i].local}</h3>
                </div>
            </div>

            <button class="Enviar">Enviar</button>
        </div>
    `;
}

let Enviar = document.querySelector('.Enviar');
let Nombre = document.querySelector('.inputN');
let NumeroVisitante = document.querySelector('.NumeroVisitante');
let NumeroLocal = document.querySelector('.NumeroLocal');

for (let i = 0; i < Enviar.length; i++) {
    Enviar[i].addEventListener('click', function () {
        Partidos[i].porra.push({
            nombre: Nombre[i].value,
            Resultado: NumeroLocal[i].value + "-" + NumeroVisitante[i].value
        });

        console.log(Partidos[i].porra);
    });
}


const textoBD = JSON.stringify(Partidos);
console.log(textoBD);

const objeto = JSON.parse(textoBD);
console.log(objeto);

localStorage.setItem("misPorras", textoBD);
const recuperacion = localStorage.getItem("misPorras");
console.log(recuperacion);


