
let negypro = document.getElementById("btn_negypro");
let neg_h = document.getElementById("hamburguer_neg");
let pro_h = document.getElementById("hamburguer_prod");
let prom_h = document.getElementById("hamburguer_prom");
let res_h = document.getElementById("hamburguer_res");
let pyr_h = document.getElementById("hamburguer_pyr");
let abt_h = document.getElementById("hamburguer_abt");




negypro.addEventListener("click", () => {
    window.location.href = "Negocios_Productos.jsp";
});

neg_h.addEventListener("click", () => {
    window.location.href = "Negocio.jsp";
});

pro_h.addEventListener("click", () => {
    window.location.href = "Negocios_Productos.jsp";
});

prom_h.addEventListener("click", () => {
    window.location.href = "Promociones.jsp";
});

res_h.addEventListener("click", () => {
    window.location.href = "Comentarios.jsp";
});

pyr_h.addEventListener("click", () => {
    window.location.href = "Preguntas_Respuestas.jsp";
});

abt_h.addEventListener("click", () => {
    window.location.href = "Sobre_Nosotros.jsp";
});



