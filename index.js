    let textarea1 = document.querySelector('#textarea1');
    let contador = document.querySelector('#contador');
    let contadorP = 0;
    let ArrayPalabras = [];
    textarea1.addEventListener("change", contarpalabras);

    function contarpalabras () {
        textarea1.value = textarea1.value.toLowerCase();
        textarea1.value.trim();
        console.log(textarea1.value.split(" "));
        ArrayPalabras = textarea1.value.split(" ");
        console.log(ArrayPalabras.length);
        volveracontar();
        contarsimilitudes();
    }

    function volveracontar () {
        textarea1.value.trim();
        contador.innerHTML=`<h2 id="contador">Nº palabras = ${ArrayPalabras.length}</h2>`;
        console.log(ArrayPalabras.includes("hola"));
    }


    function contarsimilitudes () {
        for (let i = 0 ; i < ArrayPalabras.length ; i++) {
            if (ArrayPalabras[i] === "hola") {
            contadorP++;
            console.log(`Similitudes entre la palabra 'hola' son ${contadorP}`);
        }
    }
}

