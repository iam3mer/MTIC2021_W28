import React, { useState } from 'react';

function Funcional(props) {
  
  //const [valor, funcion] = useSate(valorInicial);
  const [contador, setContador] = useState(5);

  return (
    <>
      <h2>Valor del contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        +
      </button>
      <button onClick={() => setContador(contador - 1)}>
        -
      </button>
      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </>
  )
}

export default Funcional;
