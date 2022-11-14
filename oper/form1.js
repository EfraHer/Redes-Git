// De binario a decimal usrando la logica y no usar 'toStrin(2)'
export const binario = [];
export let convertir = (n) => {

  let conta = [];
  while (n > 1) {
    conta.push(n % 2);
    n = Math.floor(n / 2);
  }

  conta.push(n)
  while (conta.length < 8) {
    conta.push(0);
  }

  binario.push(conta.reverse().join(""));
  if (binario.length == 5) {
    binario.shift();
  }
  return binario
}

//Bits, mask and host
export let maskNew = (R, k) => {

  let resultado = (2 ** k) - 2;

  if (resultado <= R) {
    return maskNew(R, k + 1);
  }

  return [resultado, k]

}

//Saltos y resultados de maskaras 
export class RedHost {
  constructor(saltos, maskNew, mask) {
    this.saltos = saltos;
    this.maskNew = maskNew;
    this.mask = mask;
  }
  get redHost() {
    return this.calcRedHost();
  }

  calcRedHost() {
    if (this.saltos === 0 || this.saltos === "0") {
      return [this.mask, 32 - this.mask];
    }
    return [this.maskNew, 32 - this.maskNew];
  }

}

//answer of the new host 1,0
export let jumpTable = (x) => {

  let acumulador = 0;

  if (x > 7) return 255;

  for (let i = 7; i > 0; i--) {
    if (x <= 0) {
      i = 0;
      break;
    }
    acumulador += 2 ** i
    x--;
  }
  return acumulador;

}

//Creacion de la Tabla
export let newElementTable = (ip, contador, saltos, clase, pro) => {

  let tableAdd = document.createElement('tr');
  let tablaH = document.createElement('th');
  let subR = document.createElement("td");
  let primeIp = document.createElement("td");
  let lastIp = document.createElement("td");
  let broadcast = document.createElement("td");
  let ex;

  //Clasificacion de clase para ubicar aumento de reds
  switch (clase) {
    case "A":
      ex = 1;
      break;
    case "B":
      ex = 2;
      break;
    case "C":
      ex = 3;
      break;
    default:
      return alert("algo salio Mal");
  }

  if (pro == true) {

    tablaH.scope = 'row';
    tablaH.innerText = contador + 1;
    //Primera colupna de la direccion ip
    ip[ex] += 1;

    subR.innerText = ip.join(".");
    ip[ex] += 1 //Aumento de uno en la seccion designada depende de la clase
    primeIp.innerText = ip.join(".");
    ip[ex] += saltos - 3;//Tercera casilla o row de la red
    lastIp.innerText = ip.join(".");
    ip[ex] += 1
    broadcast.innerText = ip.join(".");

    tableAdd.appendChild(tablaH);
    tableAdd.appendChild(subR);
    tableAdd.appendChild(primeIp);
    tableAdd.appendChild(lastIp);
    tableAdd.appendChild(broadcast);

    return tableAdd
  }

  tablaH.scope = 'row';
  tablaH.innerText = 1;
  //Primera colupna slo la direccion ip
  subR.innerText = ip.join(".");
  ip[ex] += 1 //Aumento de uno en la seccion designada depende de la clase
  primeIp.innerText = ip.join(".");
  ip[ex] += saltos - 3;//Tercera casilla o row de la red
  lastIp.innerText = ip.join(".");
  ip[ex] += 1
  broadcast.innerText = ip.join(".");

  tableAdd.appendChild(tablaH);
  tableAdd.appendChild(subR);
  tableAdd.appendChild(primeIp);
  tableAdd.appendChild(lastIp);
  tableAdd.appendChild(broadcast);

  return tableAdd
}
