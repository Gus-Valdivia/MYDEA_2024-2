let mneg_nav = document.getElementById("btn_neg_nav");
let mneg_nav2 = document.getElementById("btn_neg2_nav");
let mneg_h = document.getElementById("btn_neg_h");
let fbk_h = document.getElementById("btn_fbk_h");
let fbk_nav = document.getElementById("btn_fbk_nav");
let sb_nav = document.getElementById("btn_sb_nav");


mneg_nav.addEventListener("click", ()=>{
    window.location.href = "Vendedor_Perfil.jsp";
});

mneg_nav2.addEventListener("click", ()=>{
    window.location.href = "Vendedor_Perfil.jsp";
});

mneg_h.addEventListener("click", ()=>{
    window.location.href = "Vendedor_Perfil.jsp";
});

fbk_h.addEventListener("click", ()=>{
    window.location.href = "Feedback.jsp";
});

fbk_nav.addEventListener("click", ()=>{
    window.location.href = "Feedback.jsp";
});

sb_nav.addEventListener("click", () => {
    window.location.href = "CrearNegocio_Info.jsp";
});

let count_n = document.getElementById("btn_count_nav");
let count2_n = document.getElementById("btn_count2_nav");
let edt_n = document.getElementById("btn_edit_nav");
let sav_n = document.getElementById("btn_sav_nav");
let sav2_n = document.getElementById("btn_sav2_nav");
let res_n = document.getElementById("btn_res_nav");
let lgout_n = document.getElementById("btn_lgout_nav");
let edt_h = document.getElementById("btn_edit_h");
let sav_h = document.getElementById("btn_guardado_h");
let lgout_h = document.getElementById("btn_lgout_h");


count_n.addEventListener("click", () => {
    window.location.href = "Cuenta_Vendedor.jsp";
});

count2_n.addEventListener("click", () => {
    window.location.href = "Cuenta_Vendedor.jsp";
});

edt_n.addEventListener("click", () => {
    window.location.href = "Editar_CuentaCV.jsp";
});

sav_n.addEventListener("click", () => {
    window.location.href = "GuardadosCV.jsp";
});

sav2_n.addEventListener("click", () => {
    window.location.href = "GuardadosCV.jsp";
});

res_n.addEventListener("click", () => {
    window.location.href = "Comentarios_HechosCV.jsp";
});

lgout_n.addEventListener("click", () => {
    Swal.fire({
        title: "¿Está seguro de cerrar sesión?",
        text: "Una vez que cierre sesión, deberá volver a iniciar sesión para acceder.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(244, 55, 112, 0.8)",
        cancelButtonColor: "#971A40",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar la lógica para cerrar la sesión
            // Redirección o cualquier otra acción necesaria
            // Por ejemplo: window.location.href = "logout.php";
        }
    });
});


edt_h.addEventListener("click", () => {
    window.location.href = "Editar_CuentaCV.jsp";
});

sav_h.addEventListener("click", () => {
    window.location.href = "GuardadosCV.jsp";
});

lgout_h.addEventListener("click", () => {
    Swal.fire({
        title: "¿Está seguro de cerrar sesión?",
        text: "Una vez que cierre sesión, deberá volver a iniciar sesión para acceder.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(244, 55, 112, 0.8)",
        cancelButtonColor: "#971A40",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar la lógica para cerrar la sesión
            // Redirección o cualquier otra acción necesaria
            // Por ejemplo: window.location.href = "logout.php";
        }
    });
});

