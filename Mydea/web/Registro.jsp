<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jsp:include page="templates/Referencias/Todas_Ref.jsp"/>

        <title>Se parte de MYDEA</title>
    </head>
    <body>
        <jsp:include page="templates/Navegadores/Navegador_SC.jsp"/>
        <div class="content_registro d-flex flex-column justify-content-between" data-aos="fade-up">
            <section class="color1_reg deslizari"></section>
            <section class="color2_reg deslizari"></section>
            <form class="w-100 container_reg align-items-center justify-content-center flex-column subir" method="post" action="Registro">
                <div class="reg_form_container justify-content-between align-items-center">
                    <section class="Txt_reg d-flex flex-column justify-content-center align-items-center">
                        <span>BIENVENIDO!</span>
                        <span>Por favor complete los campos solicitados para terminar su registro.</span>
                    </section>
                    <ul class="d-flex list_inp_reg justify-content-around">
                        <li><label for="Nom_com_reg">Nombre completo</label><input type="text" id="Nom_com_reg" name="Nom_com_reg" class="form-control" placeholder=" Nombre Completo"></li>
                        <li><label for="Nom_usu_reg">Nombre de Usuario</label><input type="text" id="Nom_usu_reg" name="Nom_usu_reg" class="form-control" placeholder=" Nombre de Usuario"></li>
                        <li><label for="Email_reg">Correo Electronico</label><input type="email" id="Email_reg" name="Email_reg" class="form-control" placeholder=" Correo Electronico"></li>
                        <li><label for="Num_reg">Número Telefonico</label><input type="tel" id="Num_reg" name="Num_reg" class="form-control" placeholder=" Numero Telefonico" autocomplete="new-password"></li>
                        <li><label for="Con_reg">Contraseña</label><input type="password" class="form-control" placeholder=" Ingresar" id="Con_reg" name="Con_reg" autocomplete="new-password"></li>
                        <li><label for="ConCon_reg">Confirmar Contraseña</label><input type="password" class="form-control" placeholder=" Confirmar" id="ConCon_reg" name="ConCon_reg"></li>   
                        <select class="form-select" aria-label="Default select example" id="TP_cnf" name="Tipo" >
                                        <option selected disabled hidden>
                                            Seleccione su Tipo de Cuenta
                                        </option>
                                        <option value="1">Cuenta Normal</option>
                                        <option value="2">Cuenta Vendedor</option>
                                    </select>
                    </ul>
                    <ul class="d-flex w-100 justify-content-around avisos">
                        <li><input type="checkbox" id="TyC_reg"><a href="Avisos.jsp"><span>Aceptar Terminos y Condiciones</span></a></li>
                        <li><input type="checkbox" id="AP_reg"><a href="Avisos.jsp"><span>Aceptar Aviso de Privacidad</span></a></li>
                    </ul>
                    <span>¿Ya tienes una cuenta? <a href="Iniciar_Sesion.jsp" class="txt_or">INICIA SESIÓN</a> </span>

                </div>
                <button class="btn btns_reg" id="btns_reg" type="submit">
                    REGISTRARSE
                </button>
            </form>
        </div>
                                                        <%
            if(request.getAttribute("mensaje")!=null) 
            {  
        %>          
                <script>
    window.onload=function() {
       alert( "Error:  <%=request.getAttribute("mensaje")%>");
    };
 </script>      
        <%
            }
                %>
        <script src="js/Nav.js"></script>
        <script src="js/reg.js"></script>
    </body>
</html>
