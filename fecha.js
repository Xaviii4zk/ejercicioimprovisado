let ahora = new Date();

let e = document.querySelector('.e');

for (let i = 0; i < 15000; i++) {
    e.innerHTML += "hola";
}

let despues = new Date();

let diferencia = despues.getTime() - ahora.getTime();

console.log(`Mi for tarda ${diferencia} milisegundos`);
let select1 = document.querySelector('#select1');
let fechaxtiempo = document.querySelector('#fechaxtiempo');

const dema = new Date(ahora.getTime() + 24 * 60 * 60 * 1000);
console.log(dema);
select1.addEventListener('input', valores);
let hoy = ahora.getDay();
console.log(hoy);
function valores() {
    let valorselect = select1.value;
    const nuevafecha = new Date(ahora.getTime()+ 24 * 60 * 60 * 1000 * valorselect);
    console.log(nuevafecha);
    console.log(nuevafecha.getDay());
    let nuevodia = nuevafecha.getDay();
    console.log(valorselect);
    if (nuevodia == "0") {
        fechaxtiempo.value="Diumenge";
    } if (nuevodia == "1") {
        fechaxtiempo.value="Dilluns";
    } if (nuevodia == "2") {
        fechaxtiempo.value="Dimarts";
    } if (nuevodia == "3") {
        fechaxtiempo.value="Dimecres";
    } if (nuevodia == "4") {
        fechaxtiempo.value="Dijous";
    } if (nuevodia == "5") {
        fechaxtiempo.value="Divendres";
    } if (nuevodia == "6") {
        fechaxtiempo.value="Dissabte";
    }
}

let elementoEdad = document.querySelector('.edades');
let input2 = document.querySelector('#nacimiento');

input2.addEventListener('change', calcularEdad);

let fechaHOY = new Date();

function calcularEdad() {
    let micumple = new Date(input2.value);

    let edad = fechaHOY.getFullYear() - micumple.getFullYear();
    let meses = fechaHOY.getMonth() - micumple.getMonth();

    let dias = Math.abs(fechaHOY.getDay() - micumple.getDay());
    let semanas = 0;
    let horas = fechaHOY.getHours() - micumple.getHours();

    if (dias >= 7) {
        semanas = 1;
    }
    
    if (dias >= 14) {
        semanas = 2;
    }

    if (dias >= 21) {
        semanas = 3;
    }

    if (dias >= 28) {
        semanas = 4;
    }

    if (
        fechaHOY.getMonth() < micumple.getMonth() ||
        (fechaHOY.getMonth() === micumple.getMonth() &&
        fechaHOY.getDate() < micumple.getDate())
    ) {
        edad--;
    }

    console.log(edad);
    console.log(meses);
    console.log(semanas);
    console.log(dias);
    console.log(horas);

    elementoEdad.innerHTML = `Tienes ${edad} años <br>
    ${meses} meses <br>
    ${semanas} semanas <br>
    ${dias} dias <br>
    ${horas} horas`;
}


console.log(dema);

let cumpleprofe = new Date("1973/04/13");
console.log(cumpleprofe);

let dia = ahora.getDay();
console.log(dia);

let diaMes = ahora.getDate();
console.log(diaMes);

let mes = ahora.getMonth();
console.log(mes);

let año = ahora.getFullYear();
console.log(año);

let hora = ahora.getHours();
console.log(hora);

let segundo = ahora.getSeconds();
console.log(segundo);

let minuto = ahora.getMinutes();
console.log(minuto);
