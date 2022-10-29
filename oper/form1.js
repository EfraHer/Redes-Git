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
    maskNew(R, k + 1);
  } else {

    return [resultado, k]
  }

}