import { convertir, binario, maskNew, RedHost, jumpTable, newElementTable } from "./oper/form1.js"

const data = document.getElementById('data');
const ip = document.getElementById('IP');
let redes = document.querySelector("#red");
let saltos = document.getElementById('saltos');
let Tclas = document.getElementById('Tclass');
let mascara = document.getElementById('mascara');
let bin = document.getElementById('bin');
let bin_ip = document.getElementById("bin_ip");
let newMask = document.getElementById("new_mask");
const saltos_answer = document.getElementById('saltos_answer');
let red_12 = document.getElementById("red_12");
let host_12 = document.getElementById("host_12");
let numSaltos = document.querySelector("#numSaltos");
let lineaSalto = document.getElementById('lineaSalto');
let tableBody = document.getElementById('bodyTable');//table Body

let apro = true;

let whoclass = [];

data.onsubmit = (e) => {
    e.preventDefault();
    whoclass = ip.value.split(".").map(Number);

    //Resultado de valores clase, redes, maskara y 255.....
    if (ip.value == "" || redes.value == "") {
        alert('Complete the data')
        ip.value = ""
        redes.value = ""
        apro = false
    }
    else if (whoclass[0] <= 127) {
        Tclas.value = "A";
        mascara.value = 8;
        bin.value = "255.0.0.0"
        saltos.value = redes.value
    }
    else if (whoclass[0] <= 191) {
        Tclas.value = "B";
        mascara.value = 16;
        bin.value = "255.255.0.0";
        saltos.value = redes.value;
    }
    else if (whoclass[0] <= 223) {
        Tclas.value = "C";
        mascara.value = 24;
        bin.value = "255.255.255.0";
        saltos.value = redes.value;
    }
    else if (whoclass[0] <= 239) {
        Tclas.value = "D";
        mascara.value = 32;
        bin.value = "255.255.255.255";
        saltos.value = redes.value;
    }
    else {
        alert("The number is invalid")
    }

    if (apro == true) {

        for (let i = 0; i <= 3; i++) {
            convertir(whoclass[i]);
        }
        // const binip = binario;   
        bin_ip.value = binario.join(".");
    }

    let prueva = maskNew(redes.value, 0);

    saltos_answer.value = prueva[0]; //Number of bits ON

    newMask.value = parseInt(mascara.value) + parseInt(prueva[1]);
    let old = new RedHost(0, newMask.value, mascara.value);
    let after = new RedHost(saltos_answer.value, newMask.value, mascara.value);

    //Red host old and after
    red_12.value = old.redHost.join(" y ");
    host_12.value = after.redHost.join(" y ");

    let saltosTabla = newMask.value - mascara.value;
    const numFijo = 256

    numSaltos.value = jumpTable(saltosTabla);
    lineaSalto.value = numFijo - numSaltos.value

    //let tableSaltos = 256 - numSaltos.value;//Numero de saltos por fila

    //Create Elements in Table
    let elements = newElementTable(whoclass, redes.value, lineaSalto.value, Tclas.value);

    tableBody.appendChild(elements);
}
