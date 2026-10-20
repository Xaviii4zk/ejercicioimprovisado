
import Partidos from './partidos.json' with { type: 'json' };

const divPartidos = document.querySelector(".Partidoos");

let recuperacion = localStorage.getItem("misPorras");
let datosPartidos = recuperacion ? JSON.parse(recuperacion) : Partidos;

for (let i = 0; i < datosPartidos.length; i++) {
    divPartidos.innerHTML += `
        <div class="Pronostico">
            <h2>${datosPartidos[i].visitante} vs ${datosPartidos[i].local}</h2>

            <div class="Nombre">
                <h3>Nombre</h3>
                <input type="text" class="inputN">
            </div>

            <div class="Resultados">
                <div>
                    <input type="number" class="NumeroVisitante">
                    <h3>${datosPartidos[i].visitante}</h3>
                </div>

                <div>
                    <input type="number" class="NumeroLocal">
                    <h3>${datosPartidos[i].local}</h3>
                </div>
            </div>

            <button class="Enviar">Enviar</button>
            <button class="VerPorras">Ver porras</button>

            <div class="ListaPorras" style="display: none;"></div>
        </div>
    `;
}

let Enviar = document.querySelectorAll('.Enviar');
let Nombre = document.querySelectorAll('.inputN');
let NumeroVisitante = document.querySelectorAll('.NumeroVisitante');
let NumeroLocal = document.querySelectorAll('.NumeroLocal');
let VerPorras = document.querySelectorAll('.VerPorras');
let ListaPorras = document.querySelectorAll('.ListaPorras');

function mostrarPorras(i) {
    ListaPorras[i].innerHTML = "";

    for (let j = 0; j < datosPartidos[i].porra.length; j++) {
        ListaPorras[i].innerHTML += `
            <p>${datosPartidos[i].porra[j].nombre}: ${datosPartidos[i].porra[j].Resultado}</p>
        `;
    }
}

for (let i = 0; i < Enviar.length; i++) {
    mostrarPorras(i);

    Enviar[i].addEventListener('click', function () {
        datosPartidos[i].porra.push({
            nombre: Nombre[i].value,
            Resultado: NumeroLocal[i].value + "-" + NumeroVisitante[i].value
        });

        localStorage.setItem("misPorras", JSON.stringify(datosPartidos));

        mostrarPorras(i);

        Nombre[i].value = "";
        NumeroVisitante[i].value = "";
        NumeroLocal[i].value = "";
    });

    VerPorras[i].addEventListener('click', function () {
        if (ListaPorras[i].style.display === "none") {
            mostrarPorras(i);
            ListaPorras[i].style.display = "block";
            VerPorras[i].textContent = "Ocultar porras";
        } else {
            ListaPorras[i].style.display = "none";
            VerPorras[i].textContent = "Ver porras";
        }
    });
}
