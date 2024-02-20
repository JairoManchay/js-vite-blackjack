
/**
 * Muestra la carta en HTML
 * @param {String} carta Ejemplo: el ingreso de '10A'
 * @param {Array<Number>} turno Ingreso: un valor para saber en que posicion va, si en jugador o computadora
 * @param {Array<HTMLElement>} divCartasJugadores ejemplo:  document.querySelectorAll('.divCartas') muestra un arreglo de div para mostrar la carta
 * @return retorna la imagen de la carta seleccionada, mostrada en el HTML
 */


export const mostrarCartaHTML = (carta, turno, divCartasJugadores)=>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('computadora__carta');
    return divCartasJugadores[turno].append(imgCarta);
}