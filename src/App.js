import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //----------------Estados-------------------
  const [jugadorTurno, setJugadorTurno] = useState(false);
  const [items, setItems] = useState([]);
  /*------- funcion resetearJuego----------------
  crear un array vacio de 9 elementos con valores
  null y luego los guarda en el estado items*/
  const resetearJuego = () => {
    const nuevosItems = [];
    for (let i = 0; i < 9; i++) {
      nuevosItems.push({ index: i, jugador: null, valor: null });
    }
    setItems(nuevosItems);
  };
  /*--------funcion seleccionarItem------------
trae por parametro el estado Item, hace una busqueda 
comparando indices para saber si ya tiene un valor */
  const seleccionarItem = (item) => {
    const yaJuegoElTurno = items.find((el) => {
      if (el.index === item.index && item.valor) {
        return true;
      }
    });
    /*En este bloque se hace una condicion con
    lo anterior, si es falso, recorre estado Items
    y lo guarda en nuevoItems.entra en otro bloque
    y compara los indices de cada elemento   */
    if (!yaJuegoElTurno) {
      const nuevosItems = items.map((el) => {
        if (el.index === item.index) {
          /*devuelve un objeto con el indice actual,
          estado JugadorTurno que puede ser true o false,
          y valor que puede ser true o false y haciendo 
          una condicion con operador ternario devolver x o o */
          return {
            index: item.index,
            jugador: jugadorTurno,
            valor: jugadorTurno ? "X" : "O",
          };
        }
        return el;
      });
      /*se guarda todo lo anterior en el estado Items
      en la posicion del elemento correspondiente  */
      setItems(nuevosItems);
    }
  };
  /*----------funcion verificarSiHayGanador------------
  se crea el arreglo casos con las posibles combinaciones ganadoras
  y se rrecorre con forEach. se guarda en ItemN el resultado de una 
  busqueda en el estado Items siendo el indice de item que llega 
  por parametro igual al valor de caso */
  const verificaSiHayGanador = () => {
    const casos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    casos.forEach((caso) => {
      const item1 = items.find((item) => item.index === caso[0]);
      const item2 = items.find((item) => item.index === caso[1]);
      const item3 = items.find((item) => item.index === caso[2]);

      /*en este bloque si los valores de de las Constantes ItemN
      son verdaderos entra al proximo bloque, donde compara los
      valores de ItemN si som iguales. en el caso que haya coincidencia
      arroja un alerta con el estado jugadorTurno si es true
      jugador 1 si es false 2 y lugo llama a la funcion resetearJuego */
      if (item1.valor && item2.valor && item3.valor) {
        if (item1.valor === item2.valor && item2.valor === item3.valor) {
          alert(`Felicidades al jugador: ${jugadorTurno ? 1 : 2}`);
          resetearJuego();
        }
      }
    });
    /*---------------nuevo----------------*/
    const cantidadTurnos = items.filter((item) => {
      if (item.valor !== null) {
        return true;
      }

      return false;
    }).length;

    if (cantidadTurnos === 9) {
      alert(`No hay ganador`);
      resetearJuego();
    }
  };
  /*-----------------Efectos---------------------
 el primer Effect se ejecuta una sola vez y llama la
 funcion resetear juego para comenzar la partida.
  */
  useEffect(() => {
    resetearJuego();

  }, []);
  /*
  Este segundo Efect se ejecuta cada vez que cambia el 
  estado de Items inicia con un bloque if para evitar error
  por que todabia no cambio el estado y es un arreglo vacio
  */
  useEffect(() => {
    if (items.length > 0) {
      verificaSiHayGanador();
      setJugadorTurno(!jugadorTurno);
    }
  }, [items]);
  return (
    <div className="App">
      <header className="AppHeader">
        Turno para el jugador: {jugadorTurno ? 1 : 2}
      </header>
      <main className="AppMain">
        <div className="Tablero">
          {items.map((item) => {
            return (
              <div
                key={item.index}
                className="Item"
                onClick={() => seleccionarItem(item)}
              >
                {item.valor}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );

}

export default App;
