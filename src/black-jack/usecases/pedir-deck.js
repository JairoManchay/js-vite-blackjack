
/**
 * Esta funciona te da una carta
 * @param {Array<String>} mazoCartas Ejemplo: el Arreglo de Cartas, las 52 cartas
 * @param {HTMLElement} botonNuevo Ejemplo: document.getElementById('btnNuevo');
 * @returns retorna una carta del mazo de 52 y bloquea la opción del btnNuevo
 */
export const pedirCarta = (mazoCartas, botonNuevo) => {
      
    if(mazoCartas.length === 0){
        throw 'no hay cartas en el deck';
    }


    const carta = mazoCartas[0];

    const position = mazoCartas.indexOf(carta);

    mazoCartas.splice(position, 1);


    botonNuevo.disabled  = true;
    return carta;
}

//export default pedirCarta;