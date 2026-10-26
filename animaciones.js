
let ficha = document.querySelector('.ficha');
let fichaB = document.querySelector('.fichaB');
let avanzar = document.querySelector('.avanzar');
let retroceder = document.querySelector('.retroceder');

let posiciones = [
    { casilla: 0, ficha: { A: {X:63, y:-20},  B:{X:90,  y:-60} } },
    { casilla: 1, ficha: { A: {X:70, y:-65},  B:{X:100, y:-105} } },
    { casilla: 2, ficha: { A: {X:75, y:-115}, B:{X:105, y:-155} } },
    { casilla: 3, ficha: { A: {X:80, y:-155}, B:{X:160, y:-160} } },
    { casilla: 4, ficha: { A: {X:85, y:-200}, B:{X:220, y:-160} } },
    { casilla: 5, ficha: { A: {X:90, y:-240}, B:{X:280, y:-160} } },
    { casilla: 6, ficha: { A: {X:100, y:-310}, B:{X:340, y:-160} } },
    { casilla: 7, ficha: { A: {X:160, y:-310}, B:{X:400, y:-160} } },
    { casilla: 8, ficha: { A: {X:220, y:-310}, B:{X:460, y:-160} } },
    { casilla: 9, ficha: { A: {X:250, y:-310}, B:{X:460, y:-220} } },
    { casilla: 10, ficha: { A: {X:300, y:-310}, B:{X:400, y:-220} } },
    { casilla: 12, ficha: { A: {X:350, y:-310}, B:{X:340, y:-220} } },
    { casilla: 13, ficha: { A: {X:420, y:-310}, B:{X:340, y:-220} } },
    { casilla: 14, ficha: { A: {X:430, y:-250}, B:{X:340, y:-220} } },
    { casilla: 15, ficha: { A: {X:435, y:-200}, B:{X:340, y:-220} } },
    { casilla: 16, ficha: { A: {X:445, y:-140}, B:{X:340, y:-220} } },
    { casilla: 17, ficha: { A: {X:450, y:-60}, B:{X:340, y:-220} } },
    { casilla: 18, ficha: { A: {X:375, y:-60}, B:{X:340, y:-220} } },
    { casilla: 19, ficha: { A: {X:300, y:-60}, B:{X:340, y:-220} } },
    { casilla: 20, ficha: { A: {X:225, y:-60}, B:{X:340, y:-220} } },
    { casilla: 21, ficha: { A: {X:165, y:-60}, B:{X:340, y:-220} } },
    { casilla: 22, ficha: { A: {X:130, y:-110}, B:{X:340, y:-220} } },

];

avanzar.addEventListener('click', avanzarcasilla);
retroceder.addEventListener('click', retrocedercasilla);

let i = 0;

ficha.style.transition = "left 1s ease, top 1s ease";

function avanzarcasilla() {
    if (i < posiciones.length - 1) {
        i++;
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;

        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
    }
}

function retrocedercasilla() {
    if (i > 0) {
        i--;
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;

        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
    }
};







/*    let Bx = posiciones[i].ficha.B.X;
    let By = posiciones[i].ficha.B.y;
    fichaB.style.top = By + "px";
    fichaB.style.left = Bx + "px"; */



let tablero = document.querySelector('.relativo');

tablero.addEventListener('click', function(evento) {
    let X = evento.offsetX;
    let Y = evento.offsetY;

    console.log(`X: ${X}, Y: ${Y}`);
});

//mirar evento que te saca la posicion de X y Y con el raton que te la ve
//