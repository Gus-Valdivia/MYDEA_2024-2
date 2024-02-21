<%-- 
    Document   : Navegador_CC
    Created on : 2 nov 2023, 23:34:41
    Author     : altro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<nav class="bg-body-tertiary container-fluid bg-white">
    <div class="row d-flex align-items-center p-1 h-100">
        <div class="col-2 d-flex">
            <a href="indexCC.jsp"><img src="assets/logo_mydea_comida.png" alt="logotipo" class="img-fluid logo"></a>
        </div>
        <form class="col-4 d-flex w-10" method="post" action="BuscadorCC.jsp" >
            <input class="form-control input_search" placeholder="Buscar... (Cafeterias, Abarrotes, Snacks)"
                   aria-label="Search" name="txt" >
            <button class="btn button_search" type="submit"><i class="bi bi-search text-white"></i></button>
        </form>
        <div class="col-2 d-flex justify-content-center">
            <button type="button" class="btn btn-outline-dark btn_negro large" id="btn_negypro">Negocios y
                Productos</button>
        </div>
        <div class="col-3 d-flex justify-content-evenly">
            <div class="btn-group Cuenta_des w-50">
                <button type="button" class="btn btn-sm btn-secondary btn_count" id="btn_count_nav"><i
                        class="bi bi-person-circle"></i>Cuenta</button>
                <button type="button"
                        class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split btn_des w-0"
                        data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" id="btn_count2_nav">Revisar Cuenta</li>
                    <li class="dropdown-item" id="btn_edit_nav">Editar Cuenta</li>
                    <li class="dropdown-item" id="btn_sav2_nav">Guardados</li>
                    <li class="dropdown-item" id="btn_res_nav">Reseñas</li>
                    
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li class="dropdown-item" id="btn_lgout_nav">Cerrar Sesion</li>
                </ul>
            </div>
            <button type="button" class="btn btn-sm btnp" data-bs-toggle="tooltip" id="btn_sav_nav"
                    data-bs-placement="bottom" data-bs-title="Guardados"> <i class="bi bi-bookmark-fill book"></i>
            </button>
        </div>
        <div class="col-1 d-flex justify-content-center">
            <button class="navbar-toggler icon" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
        </div>
    </div>

    <jsp:include page="../Menus/Hamburguer_CC.jsp"/>
</nav>

<script src="js/Nav_CC.js"></script>