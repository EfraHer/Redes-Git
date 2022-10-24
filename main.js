import {Binario} from "./oper/form1.js"

const data = document.getElementById('data');
const ip= document.getElementById('IP').value;
let redes= document.querySelector("#red").value;
let Tclas= document.getElementById('Tclass');
let mascara= document.getElementById('mascara');
let bin= document.getElementById('bin');

let whoclass=[];


data.onsubmit=(e)=>{
    e.preventDefault();
    whoclass=ip.split(".").map(Number);

    if (ip=="" || redes=="") {
        alert('Complete the data')
    }
    else if (whoclass[0]<=127) {
        Tclas.value="A";
        mascara.value=8;
        bin.value="255.0.0.0"
    }
    else if(whoclass[0]<=191){
        Tclas.value="B"
        mascara.value=16
        bin.value="255.255.0.0"
    }
    else if(whoclass[1]<=223){
        Tclas.value="C"
        mascara.value=24
        bin.value="255.255.255.0"
    }
    else if(whoclass[1]<=239){
        Tclas.value="D"
        mascara.value=32
        bin.value="255.255.255.255"
    }
    else{
        alert("The number is invalid")
    }

    let binip=bin(whoclass)
}
