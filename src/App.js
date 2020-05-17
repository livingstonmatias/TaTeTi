import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jugadorTurno, setJugadorTurno] = useState(false);
  const [items, setItems] = useState([]);

  const resetearJuego = () => {
    const nuevosItems = [];
    for (let i = 0; i < 9; i++) {
      nuevosItems.push({ index: i, jugador: null, valor: null });
    }
    setItems(nuevosItems);
  };

  const seleccionarItem = (item) => {
    const yaJuegoElTurno = items.find((el) => {
      if (el.index === item.index && item.valor) {
        return true;
      }
    });

    if (!yaJuegoElTurno) {
      const nuevosItems = items.map((el) => {
        if (el.index === item.index) {
          return {
            index: item.index,
            jugador: jugadorTurno,
            valor: jugadorTurno ? "X" : "O",
          };
        }

        return el;
      });

      setItems(nuevosItems);
    }
  };

  const verificaSiHayGanador = () => {
    const casos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    casos.forEach((caso) => {
      const item1 = items.find((item) => item.index === caso[0]);
      const item2 = items.find((item) => item.index === caso[1]);
      const item3 = items.find((item) => item.index === caso[2]);

      if (item1.valor && item2.valor && item3.valor) {
        if (item1.valor === item2.valor && item2.valor === item3.valor) {
          alert(`Felicidades al jugador: ${jugadorTurno ? 1 : 2}`);
          resetearJuego();
        }
      }
    });
  };

  useEffect(() => {
    resetearJuego();
  }, []);

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
