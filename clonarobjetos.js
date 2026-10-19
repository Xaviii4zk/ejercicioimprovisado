const original = {
    nom: "Joan",
    ubicacio: "Barcelona",
};


/* const copiafalsa = original;

copiafalsa.nom="joan falso";

console.log(copiafalsa.nom); */

const copia1 = { ...original };

// 1ra manera de clonar

// Deep copy amb JSON (limitacions amb funcions i dates)
const copia3 = JSON.parse(JSON.stringify(original));

// Deep copy modern amb structuredClone()
const copia4 = structuredClone(original)


//EL 3 ES EL MEJOR PARA SUB NIVEL O ARRAYS DE ARRYAS
//EL 4 ES EL MEJOR PARA INCLUSO CPIAR FUNCIONES (TODO CÓMO ESTÁ)
