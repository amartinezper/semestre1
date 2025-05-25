import * as readline from 'readline';

let libros: string[] = ["juancho","pedro","aleja"];
let salarios : number[] = [3000, 2000, 1000]

function preguntar(pregunta: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      rl.close();
      resolve(respuesta);
    });
  });
}

async function añadirLibro() {
  const nombreDelLibro = await preguntar('Ingresa el nombre del empleado: ');
  const salariosingular = await preguntar('Ingresa el salario del empleado: ');
  libros.push(nombreDelLibro);
  salarios.push(Number(salariosingular));
  console.log(`El nombre del empleado ingresado es: ${nombreDelLibro}`);
}

async function buscarLibro() {
  const libroBuscar = await preguntar('Ingresa el nombre del empleado que deseas buscar: ');
  const libroEncontrado = libros.includes(libroBuscar);
  if (libroEncontrado) {
    console.log("El empleado esta regristrado");
  } else {
    console.log("El empleado no esta registrado");
  }
}

function Salario() {
    let total = salarios.reduce((a,b)=>a + b , 0)
    let prom = total / salarios.length
    console.log("El promedio de los salarios es de "+ prom)
  };


async function programa() {
  let repetir = true;

  while (repetir) {
    const decision = await preguntar(
      'Ingresa 1 para agregar un empleado, 2 calcular promedio de los salarios, 3 para verificar el registro de un empleado, 4 para salir: '
    );

    if (decision === "1") {
      await añadirLibro();
    } else if (decision === "2") {
      Salario();
    } else if (decision === "3") {
      await buscarLibro();
    } else if (decision === "4") {
      repetir = false;
      console.log("Cerrando programa");
    } else {
      console.log("Esa opción no está disponible");
    }
  }
}

programa();