let ficha = document.querySelector('.ficha');
let fichaB = document.querySelector('.fichaB');
let avanzar = document.querySelector('.avanzar');
let retroceder = document.querySelector('.retroceder')
ficha.style.bottom = '120px';

posiciones = [
    {
        casilla: 0, ficha: { A: {X:63,y:-20}, B:{X:90,y:-60}},
    },
    {
        casilla: 1, ficha: { A: {X:70,y:-65}, B:{X:100,y:-105}},
    },
    {
        casilla: 2, ficha: { A: {X:75,y:-115}, B:{X:105,y:-155}},
    }
];

console.log(posiciones.length);

avanzar.addEventListener('click', avanzarcasilla);
retroceder.addEventListener('click', retrocedercasilla);




let i=0;

    function avanzarcasilla(){
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;
        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
        i++;
}

    function retrocedercasilla(){
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;
        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
        i--; 
}
ficha.style.transition = "transform 1s ease";
ficha.style.transform = `translate(${Ax}px, ${Ay}px)`;
ficha.style.transition = "left 1s ease, top 1s ease";







/*    let Bx = posiciones[i].ficha.B.X;
    let By = posiciones[i].ficha.B.y;
    fichaB.style.top = By + "px";
    fichaB.style.left = Bx + "px"; */






//mirar evento que te saca la posicion de X y Y con el raton que te la ve
//