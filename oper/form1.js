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