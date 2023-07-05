export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  console.log(tipoDeInput)
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  console.log(input.parentElement)
  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio"
  },
  email: {
    valueMissing: "Este campo email no puede estar vacio",
    typeMismatch: "El correo no es valido"
  },
  password:{
    valueMissing: "Este campo contraseña no puede estar vacio",
    patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
  },
  nacimiento:{
    valueMissing: "Este campo nacimiento no puede estar vacio",
    customError: "Debes tener al menos 18 años de edad"
  }
}

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeError(tipoDeInput, input)
{
  let mensaje = "";
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajeError[tipoDeInput][error])
      mensaje = mensajeError[tipoDeInput][error]
    }
  })
  return mensaje;
}

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
