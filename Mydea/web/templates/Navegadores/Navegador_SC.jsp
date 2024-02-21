<%-- 
    Document   : Navegador_SC
    Created on : 2 nov 2023, 16:16:38
    Author     : altro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<nav class="bg-body-tertiary container-fluid bg-white">
    <div class="row d-flex align-items-center p-1 h-100">
        <div class="col-2 d-flex">
            <a href="index.jsp"><img src="assets/logo_mydea_comida.png" alt="logotipo" class="img-fluid logo"></a>
        </div>
        <form class="col-4 d-flex w-10" method="post" action="Buscador.jsp" >
            <input class="form-control input_search" placeholder="Buscar... (Cafeterias, Abarrotes, Snacks)"
                   aria-label="Search" name="txt" >
            <button class="btn button_search" type="submit"><i class="bi bi-search text-white"></i></button>
        </form>
        <div class="col-2 d-flex justify-content-center">
            <button type="button" class="btn btn-outline-dark btn_negro large" id="btn_negypro">Negocios y
                Productos</button>
        </div>
        <div class="col-3 d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-dark btn_negro" id="btn_acceder">Acceder</button>
            <button type="button" class="btn btn_rosa text-white" id="btn_registro">Registrarse</button>
        </div>
        <div class="col-1 d-flex justify-content-center">
            <button class="navbar-toggler icon" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
        </div>
    </div>

    <jsp:include page="../Menus/Hamburguer_SC.jsp"/>
</nav>
<script src="js/Nav_SC.js"></script>