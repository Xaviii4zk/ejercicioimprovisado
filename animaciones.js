let ficha = document.querySelector('.ficha');
let fichaB = document.querySelector('.fichaB');
let avanzar = document.querySelector('.avanzar');
let retroceder = document.querySelector('.retroceder')
ficha.style.bottom = '120px';
ficha.style.transition = "transform 5s ease";
ficha.style.transform= "translateX(210px) translateY(-155px)";



posiciones = [
    {
        casilla: 0, ficha: { A: {X:63,y:-20}, B:{X:90,y:-60}},
        casilla: 1, ficha: { A: {X:70,y:-65}, B:{X:100,y:-105}},
        casilla: 2, ficha: { A: {X:75,y:-115}, B:{X:105,y:-155}},
    }
];













//mirar evento que te saca la posicion de X y Y con el raton que te la ve
//