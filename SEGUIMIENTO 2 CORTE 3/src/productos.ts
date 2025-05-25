import * as readline from 'readline';

let libros: string[] = ["Jugo", "Brownie", "Agua"];
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
  const nombreDelLibro = await preguntar('Ingresa el nombre del producto: ');
  const salariosingular = await preguntar('Ingresa el precio del producto: ');
  libros.push(nombreDelLibro);
  salarios.push(Number(salariosingular));
  console.log(`El nombre del producto ingresado es: ${nombreDelLibro}`);
}

async function buscarLibro() {
  const libroBuscar = await preguntar('Ingresa el del producto que deseas buscar: ');
  const libroEncontrado = libros.includes(libroBuscar);
  if (libroEncontrado) {
    console.log("El producto tiene existencias");
  } else {
    console.log("El producto no tiene existencias");
  }
}

function Salario() {
    let prom = salarios.reduce((a,b)=>a + b , 0)
    console.log("Total de los productos es de: "+ prom)
  };


async function programa() {
  let repetir = true;

  while (repetir) {
    const decision = await preguntar(
      'Ingresa 1 para agregar un producto, 2 ver el total del inventario, 3 para verificar las existencias de un producto, 4 para salir: '
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