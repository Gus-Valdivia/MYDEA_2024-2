<%-- 
    Document   : Navegador_SC
    Created on : 2 nov 2023, 16:16:38
    Author     : altro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<nav class="bg-body-tertiary container-fluid bg-white">
    <div class="d-flex flex-row align-items-center p-1 h-100 contenedor_nav">
        <div class="col-xl-2 col-lg-2 d-flex">
            <a href="index.jsp"><img src="assets/logo_mydea_comida.png" alt="logotipo" class="logo"></a>
        </div>
        <form class="col-xl-4 col-lg-4 col-sm-11 d-flex buscador" method="post" action="Buscador.jsp" >
            <input class="form-control input_search" placeholder="Buscar... (Cafeterias, Abarrotes, Snacks)"
                   aria-label="Search" name="txt" >
            <button class="btn button_search" type="submit"><i class="bi bi-search text-white"></i></button>
        </form>
        <div class="col-xl-2 col-lg-2d-flex justify-content-center">
            <button type="button" class="btn btn-outline-dark btn_negro large" id="btn_negypro">Negocios y
                Productos</button>
        </div>
        <div class="col-xl-3 col-lg-3 d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-dark btn_negro" id="btn_acceder">Acceder</button>
            <button type="button" class="btn btn_rosa text-white" id="btn_registro">Registrarse</button>
        </div>
        <div class="col-xl-1 col-lg-1 col-sm-1  boton">
            <button class="navbar-toggler icon" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
        </div>
    </div>
    <jsp:include page="../Menus/Hamburguer_SC.jsp"/>
</nav>
<script src="js/Nav_SC.js"></script>