function ocultarMensajeInicial() {
    document.getElementById("mensaje-inicial").style.display = "none";
}

function encriptarTexto(texto) {
    let textoEncriptado = 
    texto.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
    return    textoEncriptado;
  }

  function desencriptarTexto(texto) {
    let textoDesencriptado = 
                texto.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
     return    textoDesencriptado;
  }


  function copiarResultado() {
    const resultado = document.getElementById("resultado").innerText;
    const mensajeExito = document.getElementById("mensaje-exito");

    navigator.clipboard.writeText(resultado)
        .then(() => {
            const mensaje = document.createElement('p');
            mensaje.textContent = 'Texto copiado al portapapeles';
            mensaje.classList.add('mensaje-exito-contenido');
            mensajeExito.innerHTML = ''; 
            mensajeExito.appendChild(mensaje);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function limpiarMensajeExito() {
    document.getElementById("mensaje-exito").innerText = '';
}


  document.getElementById("boton-encriptar").onclick = function() {
    let mensaje = document.getElementById("mensaje").value;
    let resultado = encriptarTexto(mensaje);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("boton-copiar").innerHTML =
    `<button class="boton-copia-resultado" onclick="copiarResultado()" type="submit">Copiar</button>`
    ocultarMensajeInicial();
    limpiarMensajeExito()
  }

  document.getElementById("boton-desencriptar").onclick = function() {
    let mensaje = document.getElementById("mensaje").value;
    let resultado = desencriptarTexto(mensaje);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("boton-copiar").innerHTML =
    `<button class="boton-copia-resultado" onclick="copiarResultado()" type="submit">Copiar</button>`
    ocultarMensajeInicial();
    limpiarMensajeExito()

  }

