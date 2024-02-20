import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, mostrarCartaHTML} from './usecases'
import { mostrarAlert } from '../services';
//import crearDeck from './usecases/crear-deck';
//import { crearDeck } from './usecases/crear-deck';

// Patron modulo


  /**
   * 2C = TWO OF CLUBS
   * 2D = TWO OF DIAMOINDS
   * 2H = TWO OF HEARTS
   * 2S = TWO OF SPADES
  */
          
  let deck                    = [];
  const tipos                 = ['C', 'D', 'H', 'S'],
        especiales            = ['A','J','Q','K'];

  let puntosJugadores         = [];

  /* Declarando variables */
  const btnPedir              = document.getElementById('btnPedir'),
        btnDetener            = document.getElementById('btnDetener'),
        btnNuevo              = document.getElementById('btnNuevo');

  // dos formas de llamar un elemento del dom cuando se repite las etiquetas
  // const small = document.querySelector('small:first-of-type');
  const small                 = document.querySelectorAll('small'),
        divCartasJugadores    = document.querySelectorAll('.divCartas');


  // Bloqueo del boton pedir, hasta que dé iniciar al juego
  btnPedir.disabled = true;



  // Inicio del juego
  const inicializarJuego  = (numJugador = 2)=>{

      deck = crearDeck(tipos, especiales);


      puntosJugadores=[];
      for(let i=0; i < numJugador; i++){
          puntosJugadores.push(0)
      }

      small.forEach(elem => elem.innerText=0);
      divCartasJugadores.forEach(elem => elem.innerHTML='');


      btnPedir.disabled   = false;
      btnDetener.disabled = false;
  }
  

  const acumularPuntos = (carta, turno) => {

      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      small[turno].innerText = puntosJugadores[turno];
      return  puntosJugadores[turno]
  }



  const determinarGanador =()=>{

      const [puntosJugador, puntosComputadora] = puntosJugadores;

       // Mostrando la alerta
       setTimeout(()=>{
          (puntosComputadora===21 && puntosJugador !=21) ? mostrarAlert('Noooooo!!!', 'Te acaba de derrotar la maquina', 'error'):
          (puntosJugador===21 && puntosComputadora !=21)  ? mostrarAlert('Great!!!!!!','Acabas de Ganarle a Jarvis, good!','success'): 
          (puntosComputadora===puntosJugador) ? mostrarAlert('Wao!!!!','Acabas de empatar con la maquina','info') :
          (puntosComputadora > 21) ? mostrarAlert('Genial!!!!','Jarvis acaba de perder contra tu suerte','success'): mostrarAlert('Noooooo!!!', 'Acabas de sacar un número mayor a 21, perdiste!!!', 'error');

          btnNuevo.disabled = false;
      }, 10)
  }

  // Turno de la computadora
  const turnoComputadora = (puntosminimos)=>{

    if(!puntosminimos) throw new Error('Puntos mínimos son necesario');

      let puntosComputadora = 0;
      do{
          const carta = pedirCarta(deck, btnNuevo);
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);    
          mostrarCartaHTML(carta, puntosJugadores.length-1, divCartasJugadores);
      }while( (puntosComputadora <= puntosminimos) && (puntosminimos <= 21) );

      determinarGanador();       
  }


  // Eventos  - Turno jugador
  btnPedir.addEventListener('click', ()=>{
      const carta = pedirCarta(deck, btnNuevo);
      const puntosJugador = acumularPuntos(carta, puntosJugadores.length-2);
      mostrarCartaHTML(carta, 0, divCartasJugadores);
  
      if(puntosJugador===21){
          btnPedir.disabled = true;
          btnDetener.disabled= true;
          turnoComputadora( puntosJugador);

      }else if(puntosJugador >= 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador);
      }

  })



  // Detener juego
  btnDetener.addEventListener('click', ()=>{

      btnPedir.disabled = true;
      btnDetener.disabled = true;           
      turnoComputadora(puntosJugadores[0]);
  })



  btnNuevo.addEventListener('click',()=>{
      inicializarJuego();

  })

