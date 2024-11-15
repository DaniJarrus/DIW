//Mostramos la imagen modal

document.addEventListener('DOMContentLoaded', (event) =>{

const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});

window.mostrarImagenModal = function() {
    
    const modal = document.getElementById("modalLogin");
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
}

//Cerramos la imagen modal
window.cerrarImagenModal = function() {
    const popup = document.getElementById("modalLogin");
    popup.style.display = "none";
}

//Mostramos password
window.mostrarPassword = function() {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

window.enviarDatos = function() {
    let usuarioTexto = document.getElementById('usuario').value;
    console.log(usuarioTexto)
    let loginTexto = document.getElementById('login');
    loginTexto.innerText = `Hola, ${usuarioTexto}`;
    cerrarImagenModal();
}

})