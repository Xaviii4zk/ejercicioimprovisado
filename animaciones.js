
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
    { casilla: 11, ficha: { A: {X:350, y:-310}, B:{X:340, y:-220} } },
    { casilla: 12, ficha: { A: {X:420, y:-310}, B:{X:340, y:-220} } },
    { casilla: 13, ficha: { A: {X:430, y:-250}, B:{X:340, y:-220} } },
    { casilla: 14, ficha: { A: {X:435, y:-200}, B:{X:340, y:-220} } },
    { casilla: 15, ficha: { A: {X:445, y:-140}, B:{X:340, y:-220} } },
    { casilla: 16, ficha: { A: {X:450, y:-60}, B:{X:340, y:-220} } },
    { casilla: 17, ficha: { A: {X:375, y:-60}, B:{X:340, y:-220} } },
    { casilla: 18, ficha: { A: {X:300, y:-60}, B:{X:340, y:-220} } },
    { casilla: 19, ficha: { A: {X:225, y:-60}, B:{X:340, y:-220} } },
    { casilla: 20, ficha: { A: {X:165, y:-60}, B:{X:340, y:-220} } },
    { casilla: 21, ficha: { A: {X:130, y:-110}, B:{X:340, y:-220} } },
    { casilla: 22, ficha: { A: {X:140, y:-170}, B:{X:340, y:-220} } },
    { casilla: 23, ficha: { A: {X:145, y:-260}, B:{X:340, y:-220} } },
    { casilla: 24, ficha: { A: {X:195, y:-260}, B:{X:340, y:-220} } },
    { casilla: 25, ficha: { A: {X:250, y:-260}, B:{X:340, y:-220} } },
    { casilla: 26, ficha: { A: {X:300, y:-260}, B:{X:340, y:-220} } },
    { casilla: 27, ficha: { A: {X:370, y:-260}, B:{X:340, y:-220} } },
    { casilla: 28, ficha: { A: {X:375, y:-210}, B:{X:340, y:-220} } },
    { casilla: 29, ficha: { A: {X:380, y:-170}, B:{X:340, y:-220} } },
    { casilla: 30, ficha: { A: {X:385, y:-130}, B:{X:340, y:-220} } },
    { casilla: 31, ficha: { A: {X:300, y:-120}, B:{X:340, y:-220} } },
    { casilla: 32, ficha: { A: {X:250, y:-120}, B:{X:340, y:-220} } },
    { casilla: 33, ficha: { A: {X:190, y:-130}, B:{X:340, y:-220} } },
    { casilla: 34, ficha: { A: {X:200, y:-205}, B:{X:340, y:-220} } },
    { casilla: 35, ficha: { A: {X:250, y:-205}, B:{X:340, y:-220} } },
    { casilla: 36, ficha: { A: {X:300, y:-205}, B:{X:340, y:-220} } },



];

let i = 0; 




avanzar.addEventListener('click', avanzarcasilla);
retroceder.addEventListener('click', retrocedercasilla);


/* PARA IR DIRECTO A LA POSICIÓN DE LA CASILLA
let i = posiciones.findIndex(p => p.casilla === 34);
ficha.style.left = posiciones[i].ficha.A.X + "px";
ficha.style.top = posiciones[i].ficha.A.y + "px"; */

ficha.style.transition = "left 1s ease, top 1s ease";

function avanzarcasilla() {
    if (i < posiciones.length - valordado) {
        i++;
        if (i==[4]) {
        ficha.style.left = posiciones[9].ficha.A.X + "px";
        ficha.style.top = posiciones[9].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 4, así que vas a la 9`);   
        i=9;  
    }
    
    else if (i==[11]) {
        ficha.style.left = posiciones[0].ficha.A.X + "px";
        ficha.style.top = posiciones[0].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 11, así que vuelves al inicio`); 
        i=0;
    } else {
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;

        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
        }
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

let Dado2 = document.querySelector('#dadoR');

let tirarDau = () => {
    let valordado = Math.floor(Math.random() * 6) + 1;
    console.log(valordado);
    if (i < posiciones.length - 1) {
        
        i = i + valordado;
        console.log(i);
    
        if (i==[2]) {
        ficha.style.left = posiciones[21].ficha.A.X + "px";
        ficha.style.top = posiciones[21].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 2, así que vas a la 21`);   
        i=21;  
    } else if (i==[7]) {
        ficha.style.left = posiciones[11].ficha.A.X + "px";
        ficha.style.top = posiciones[11].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 7, así que vas a la 11`);   
        i=11;        
    } else if (i==[22]) {
        ficha.style.left = posiciones[24].ficha.A.X + "px";
        ficha.style.top = posiciones[24].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 22, así que vas a la 24`);   
        i=24; 
    } else if (i==[14]) {
        ficha.style.left = posiciones[29].ficha.A.X + "px";
        ficha.style.top = posiciones[29].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 14, así que vas a la 29`);   
        i=29; 
    } else if (i==[30]) {
        ficha.style.left = posiciones[27].ficha.A.X + "px";
        ficha.style.top = posiciones[27].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 30, así que vas a la 27`);   
        i=27; 
    } else if (i==[25]) {
        ficha.style.left = posiciones[9].ficha.A.X + "px";
        ficha.style.top = posiciones[9].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 25, así que vas a la 9`);   
        i=9;
    }

    //Preguntas en todas las casillas que no son especiales

    else if (i > posiciones.length) {
        console.log(`El número suma más que 36, tira otra vez, está invalidado!`);
        i= i - valordado;
        console.log(i);
    }
    
    else if (i==[12]) {
        ficha.style.left = posiciones[0].ficha.A.X + "px";
        ficha.style.top = posiciones[0].ficha.A.y + "px"; 
        console.log(`Has caído en la casilla 12, así que vuelves al inicio`); 
        i=0;
    } else {
        let Ax = posiciones[i].ficha.A.X;
        let Ay = posiciones[i].ficha.A.y;

        ficha.style.top = Ay + "px";
        ficha.style.left = Ax + "px";
        }
    }
};

Dado2.addEventListener('click', tirarDau);




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