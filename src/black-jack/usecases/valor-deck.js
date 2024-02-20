
/**
 * Devuelve el valor de las cartas que contienen letras
 * @param {String} cartaEscogida Ejemplo: '10C' o 'JC'
 * @returns retorna el Valor de cada letra, si sale JC, el valor de la J
 * es 11, entonces el valor de la carta JC es 11
 */
export const valorCarta = (cartaEscogida) => {
  const valor = cartaEscogida.substring(0, cartaEscogida.length - 1);

  //! convertir el string en número
  return isNaN(valor)
    ? valor == "A"
      ? 1
      : valor == "Q"
      ? 12
      : valor == "K"
      ? 13
      : valor == "J"
      ? 11
      : 14
    : valor * 1;
};

//export default valorCarta;