/* ================================= BOTON LOGIN ================================= */
const boton = document.getElementById("abrirModal");
const modal = document.getElementById("ventanaModal");
const btnCerrar = document.getElementById("btn-cerrar");

boton.addEventListener("click", () => {
    modal.showModal();
});

btnCerrar.addEventListener("click", () => {
    modal.close();
});

/* =============================== VALIDACION LOGIN===================================== */
const userNameField = document.getElementById("uname");
const passwordField = document.getElementById("psw");


const setErrors = (message, field, isError = true) => {
    if (isError) {
        field.classList.add("invalid-input");
        field.nextElementSibling.classList.add("error-input");
        field.nextElementSibling.innerText = message;
    } else {
        field.classList.remove("invalid-input");
        field.nextElementSibling.classList.remove("error-input");
        field.nextElementSibling.innerText = "";
    }
}

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;

    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
    } else {
        setErrors("", field, false);
    }
}

userNameField.addEventListener("blur", (e) => validateEmptyField("Ingresa tu nombre", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("Ingresa tu password", e));