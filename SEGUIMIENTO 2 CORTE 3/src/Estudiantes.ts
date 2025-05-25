import * as readline from 'readline';

let libros: string[] = ["martin","miguel","alejo"];
let salarios : number[] = [3, 2, 4]

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
  const nombreDelLibro = await preguntar('Ingresa el nombre del estudiante: ');
  const salariosingular = await preguntar('Ingresa la nota del estudiante: ');
  libros.push(nombreDelLibro);
  salarios.push(Number(salariosingular));
  console.log(`El nombre del estudiante ingresado es: ${nombreDelLibro}`);
}

async function buscarLibro() {
  const libroBuscar = await preguntar('Ingresa el nombre del estudiante que deseas buscar: ');
  const libroEncontrado = libros.includes(libroBuscar);
  if (libroEncontrado) {
    console.log("El estudiante esta en la lista");
  } else {
    console.log("El estudiante no esta en la lista");
  }
}

function Salario() {
    let total = salarios.reduce((a,b)=>a + b , 0)
    let prom = total / salarios.length
    console.log("El promedio de las notas de los estudiantes es de "+ prom)
  };


async function programa() {
  let repetir = true;

  while (repetir) {
    const decision = await preguntar(
      'Ingresa 1 para agregar un estudiante, 2 calcular promedio de las notas, 3 para verificar si un estudiante esta en la lista, 4 para salir: '
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