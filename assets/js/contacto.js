function validarFormulario(e) {
    e.preventDefault();

    const valores = new FormData(e.target);
    const formulario = Object.fromEntries(valores);

    const hoy = new Date();
    const fechaFormulario = new Date(formulario.fecha);

    if (fechaFormulario <= hoy) {
        alert("Fecha invalida");
        return false;
    }

    return true;
}
