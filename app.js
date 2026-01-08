document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const apellido1 = document.getElementById("apellido1");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const fechaNacimiento = document.getElementById("fechaNacimiento");
  const genero = document.getElementsByTagName("fieldset");
  const terminos = document.getElementById("terminos");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^[0-9]{9}$/;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valor === "") {
      email.setCustomValidity(""); // required ya se encarga
      email.classList.remove("cajaError");
      return;
    }
    if (!emailRegex.test(email.value)) {
      email.classList.add('cajaError');
      email.focus();
    }

  });


});