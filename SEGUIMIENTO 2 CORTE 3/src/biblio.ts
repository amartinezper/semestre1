import * as readline from 'readline';

let libros: string[] = ["Maria y Efrain", "La odisea", "Harry Potter"];

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
  const nombreDelLibro = await preguntar('Ingresa el nombre del libro: ');
  libros.push(nombreDelLibro);
  console.log(`El nombre del libro ingresado es: ${nombreDelLibro}`);
}

async function buscarLibro() {
  const libroBuscar = await preguntar('Ingresa el nombre del libro que deseas buscar: ');
  const libroEncontrado = libros.includes(libroBuscar);
  if (libroEncontrado) {
    console.log("El libro se encuentra disponible");
  } else {
    console.log("El libro no está disponible");
  }
}

function verLibros() {
  libros.forEach(libro => console.log(libro));
}

async function programa() {
  let repetir = true;

  while (repetir) {
    const decision = await preguntar(
      'Ingresa 1 para agregar un libro, 2 para ver libros, 3 para buscar un libro, 4 para salir: '
    );

    if (decision === "1") {
      await añadirLibro();
    } else if (decision === "2") {
      verLibros();
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