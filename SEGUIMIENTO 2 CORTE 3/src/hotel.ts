import * as readline from 'readline';

let reservas: string[] = [];
let valores : number[] = []

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
  const valorReserva = await preguntar("Ingrese su nombre: ");
  const salariosingular = await preguntar('Ingrese 1 si quiere una habitacion normal (300) o 2 si quiere una premium (700)');
  reservas.push(valorReserva);
if (Number(salariosingular) == 1){
 valores.push(300)
} else if(Number(salariosingular)==2){
    valores.push(700)
} else{
    console.log("Escoge 1 0 2")
}
}

async function buscarLibro() {
  const Buscar = await preguntar('Ingresa el nombre de la reserva que deseas buscar:  ');
  const libroEncontrado = reservas.includes(Buscar);
  if (libroEncontrado) {
    console.log("La reserva si esta");
  } else {
    console.log("La reserva no esta");
  }
}

function Salario() {
    let prom = valores.reduce((a,b)=>a + b , 0)
    console.log("Total de las reservas es: "+ prom)
  };


async function programa() {
  let repetir = true;

  while (repetir) {
    const decision = await preguntar(
      'Ingresa 1 para agregar una reserva, 2 ver el total de las reservas, 3 para verificar las existencias de una reserva, 4 para salir: '
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