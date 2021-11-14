// JavaScript
// Imperativo: sintaxis derivada de la línea de lenguaje C y C++
// Funcional: Funciones pueden manipular cualquier otra entidad dentro de un programa
// Dinámico: 6 tipos de datos, Boolean, Number, String, Object, Undefined y Null
// Orientado a objetos: Tipo de dato fundamental
// Herencia basasada en prototipos: Los obejetos tienen referencia a un objeto base
// o prototipo del cual heredan propiedades

// Consideraciones con los tipos de datos

// Boolean
// 0, "", null, undefined se convierten en false
// Cualquier otro valor, {}, [] se convierte en true

// Number
// Todos los números son representados internamente como flotantes de doble precisión
// 0.1 + 0.2 = 0.30000000000000004

// String
// Toda cadena de texto, así se trate de un 'caracter' es un string.

// Object
// Los objetos son conjuntos asociativos. Tambien lo son las funciones.

// undefined
// Valor de las propiedades no definidas de un objeto, también es el valor que devuelve
// una función cuando no se asigna un return

// null
// Es un objeto que representa al objeto nulo. No es {}: es un objeto sin propiedades

// Herencia por prototipos
// Todos los objetos son instancias y tienen una referencia a el objeto base "prototipo",
// desde este se heredan las propiedades

// const user = ["Javier", "Mario", "Lina"];
// estilo imperativo
// el estado del proceso se mantiene en una variable (i)
// for (let i = 0; i < user.length, i++) {
//   procesar(usuarios[i]); 
//}
// estilo fucional
// user.forEach(procesar);



// Dado un array numerico de enteros, desarrollar una fución que devuelta la cantidad
// de veces que aparece el .

const number = [45,56,67,45,45,56,6767,576];

function count45(listNumber) {
  return listNumber.filter(number => number === 45).length;
}

// Extender de función de manera que se evalue culquier condicion. Ej:
function is45(value) {
  return value === 45;
}

function countIf(fun, listNumber) {
  return listNumber.filter(number => fun(number)).length;
}

// countIf(is45, number)

function countIf(fun, listNumber) {
  result = listNumber.map(fun)
  let acum = 0;
  result.forEach(element => {
    acum += element;
  });
  return acum;
}

// countIf(is45, number)

const reducer = (valorPrevio, valorActual) => valorPrevio + valorActual;
function countIf(fun, listNumber) {
  return listNumber.map(fun).reduce(reducer);
}

// countIf(is45, number)

// Alcance, hoisting y clausuras
const variableGlobal = "global";

function verificaAlcance() {
  const varibleLocal = "local";

  console.log(variableGlobal); // global
  console.log(varibleLocal); // local
}

verificaAlcance();
console.log(variableGlobal); // global
console.log(varibleLocal); // ReferenceError

// Hoisting
function pruebaHoisting() {
  console.log(ciudad); //
  const ciudad = "Pereira";
  console.log(ciudad);
}

pruebaHoisting();

// Clausura
function crearPrefijo(prefijo) {
  const str = `${prefijo} `;

  return function (apellido) {
    return `${str}${apellido}`;
  }
}

const prefijoDoctor = crearPrefijo("PhD.");
prefijoDoctor("Gomez");

const prefijoIng = crearPrefijo("Ing.");
prefijoIng("Barrera");

// Patrón "módulo"
const modulo = (function () {
  // Variables privadas
  const publico = "No es un secreto";
  const privada = "Secreto!"

  return {
    getPublico: function () {
      return publico;
    }
  }
})();

modulo.getPublico();

const numeros = (function () {
  const number = [45,56,67,45,45,56,6767,576];

  return {
    obtenerNumeros: function () {
      return number;
    }
  }
})();

numeros.obtenerNumeros();

// callbacks y promesas
function getRegisters(cb) {
  setTimeout(
    function () {
      let registers = [4353, 345, "fhgfgh"];
    },
    300); // se demora 300 ms
}

getRegisters(function (registers) {
  console.log(registers);
})

getRegisters(function (err, registers) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(registers);
})

getRegisters(function (registers) {
  registers.forEach(function (register) {
    getState(register, function (state) {
      saveState(register, state.push("delete"))
    })
  })
})

// usando promesas
getRegisters.then(function (registers) {
  registers.forEach(function (register) {
    getState(register).then(function (state) {
      saveState(register, state.push("delete"))
    })
  })
})

getRegisters(function (err, registers) {
  if (err) {
    console.log(err.message);
    return;
  }
  registers.forEach(function (err, register) {
    if (err) {
      console.log(err.message);
      return;
    }
    getState(register, function (err, state) {
      if (err) {
        console.log(err.message);
        return;
      }
      saveState(register, state.push("delete"), function (err) {
        if (err) {
          console.log(err.message);
          return;
        }
      })
    })
  })
})

// usando promesas
getRegisters.then(function (registers) {
  // procesar
}, function (err) {
  // manejo del error
})

// simulación con promesas
function getRegisters() {
  return new Promise(function (fulfill) {
    setTimeout(
      function () {
        let registers = [4353, 345, "fhgfgh"];
        fulfill(registers);
      },
      300);
  })
}

getRegisters()
  .then(function (registers) {
    console.log(registers);
  })
  .catch(err => console.error(err));

  // encadenar promesas
  function mayusculas(palabra) {
    return palabra.toUpperCase();
  }

  const promesa = getWords().then(function (palabras) {
    console.log("Promesa resuelta!")
    return palabras.map(mayusculas);
  })

  promesa.then(function (palabras) {
    return palabras.map(toLowerCase);
  }).then(function (palabras) {
    console.log(palabras);
  })

// Eventos
