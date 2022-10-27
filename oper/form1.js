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
export class NewMaskara {
  constructor(redes) {
    this.redes = redes;
  }

  get bits() {
    return this.calRedes();
  }

  calRedes() {
    let expo = 1;
    let resulta = Math.pow(2, expo) - 2;
    while (this.redes >= resulta) {
      expo = +1
    }
    return [expo, resulta];
  }
}