function encriptar() {
    var frase = document.getElementById("texto_encriptado").value.toLowerCase();

    var texto_encriptado = frase.replace(/e/img,"enter");
    var texto_encriptado = texto_encriptado.replace(/o/img,"ober");
    var texto_encriptado = texto_encriptado.replace(/i/img,"imes");
    var texto_encriptado = texto_encriptado.replace(/a/img,"ai");
    var texto_encriptado = texto_encriptado.replace(/u/img,"ufat");   
    
    document.getElementById("texto_desencriptado").innerHTML=texto_encriptado;
    document.getElementById("boton_copiar").style.visibility="visible";

}

function desencriptar() {
    var frase = document.getElementById("texto_encriptado").value.toLowerCase();

    var texto_encriptado = frase.replace(/enter/img,"e");
    var texto_encriptado = texto_encriptado.replace(/ober/img,"o");
    var texto_encriptado = texto_encriptado.replace(/imes/img,"i");
    var texto_encriptado = texto_encriptado.replace(/ai/img,"a");
    var texto_encriptado = texto_encriptado.replace(/ufat/img,"u");   
    
    document.getElementById("texto_desencriptado").innerHTML = texto_encriptado;
    document.getElementById("boton_copiar").style.visibility="visible";
}

function copiar() {
    var contenido = document.querySelector("#texto_desencriptado");
    contenido.select();
    document.execCommand("copy");
}