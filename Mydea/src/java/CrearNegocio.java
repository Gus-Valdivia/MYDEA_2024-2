/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import Clases.Conexion;
import Clases.Persona;
import Clases.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Diego
 */
@WebServlet(urlPatterns = {"/CrearNegocio"})
public class CrearNegocio extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            //Datos del negocio
            String Nombre = request.getParameter("N_Neg_cnf");
            String Tipo = request.getParameter("TP_cnf");
            String Descripcion = request.getParameter("desc");
            
            //Horario
            String AbiertoL = request.getParameter("Abierto_L");
            String CerradoL = request.getParameter("Cerrado_L");
            String DiaCerradoL = request.getParameter("cerr_lun");
            String SheL = request.getParameter("she_lun");
            
            String AbiertoM = request.getParameter("Abierto_M");
            String CerradoM = request.getParameter("Cerrado_M");
            String DiaCerradoM = request.getParameter("cerr_mar");
            String SheM = request.getParameter("she_mar");
            
            String AbiertoMI = request.getParameter("Abierto_Mi");
            String CerradoMI = request.getParameter("Cerrado_Mi");
            String DiaCerradoMI = request.getParameter("cerr_mie");
            String SheMI = request.getParameter("she_mie");
            
            String AbiertoJ = request.getParameter("Abierto_J");
            String CerradoJ = request.getParameter("Cerrado_J");
            String DiaCerradoJ = request.getParameter("cerr_jue");
            String SheJ = request.getParameter("she_jue");
            
            String AbiertoV = request.getParameter("Abierto_V");
            String CerradoV = request.getParameter("Cerrado_V");
            String DiaCerradoV = request.getParameter("cerr_vie");
            String SheV = request.getParameter("she_vie");
            
            String AbiertoS = request.getParameter("Abierto_S");
            String CerradoS = request.getParameter("Cerrado_S");
            String DiaCerradoS = request.getParameter("cerr_sab");
            String SheS = request.getParameter("she_sab");
            
            String AbiertoD = request.getParameter("Abierto_D");
            String CerradoD = request.getParameter("Cerrado_D");
            String DiaCerradoD = request.getParameter("cerr_dom");
            String SheD = request.getParameter("she_dom");
            
            //Direccion
            String Cp = request.getParameter("cpp");
            String Colonia = request.getParameter("colonia");
            String Numero = request.getParameter("numero");
            String Calle = request.getParameter("calle");
            String Iextra = request.getParameter("iextra");
            
            //contactos
            String Telefono = request.getParameter("tel_loc_cnf");
            String Correo = request.getParameter("mail_loc_cnf");
            String Facebook = request.getParameter("face_loc_cnf");
            String Instagram = request.getParameter("inst_loc_cnf");
            String Twitter = request.getParameter("twit_loc_cnf");
            String Pagina = request.getParameter("web_loc_cnf");

            //Imagenes
            String logo = request.getParameter("logo");
            String img1 = request.getParameter("img1");
            String img2 = request.getParameter("img2");
            String img3 = request.getParameter("img3"); 
            
            
            
            
           
            switch(Tipo){
                case "Abarrotes":
                    Tipo="1";
                    break;
                case "Materia_Prima":
                    Tipo="2";
                    break;
                case "Restaurantes":
                    Tipo="3";
                    break;
                case "SyP":
                    Tipo="4";
                    break;
                case "Cafeteria":
                    Tipo="5";
                    break;
                case "Catering":
                    Tipo="6";
                    break;
                case "Panaderia":
                    Tipo="7";
                    break;
                case "OyF":
                    Tipo="8";
                    break;
                case "Otro":
                    Tipo="9";
                    break;
            }
           
            Conexion con = new Conexion();
            
            Connection c;
            con.setCon();
            c=con.getCon();
            HttpSession misession= (HttpSession) request.getSession();
            Persona per= (Persona) misession.getAttribute("persona");
            String correo = per.getPer_correo();
            int id = con.Pid(correo);
            
            
            String pid = Integer.toString(id);
            String mensaje = con.AgNeg(pid, Nombre, Descripcion, Colonia, Calle, Numero, Iextra, Cp, 
                    Pagina, logo, Tipo, Facebook, Twitter, Instagram, img1, img2, Correo, img3, Telefono);
              
            int nid = con.Nid(Nombre);
            
            String neid = Integer.toString(nid);
            
            String especialL="";
            String especialM="";
            String especialMI="";
            String especialJ="";
            String especialV="";
            String especialS="";
            String especialD="";
            
            if(SheL == null && DiaCerradoL == null ){       
                especialL="No";
            }else if(DiaCerradoL==null){               
                especialL="Sin horario especifico";
                AbiertoL = "No";
                CerradoL = "No";
            }else{               
                especialL="Cerrado";  
                AbiertoL = "No";
                CerradoL = "No";
            }
            
            if(SheM == null && DiaCerradoM == null ){
                especialM="No";            
            }else if(DiaCerradoM==null){  
                especialM="Sin horario especifico";
                AbiertoM = "No";
                CerradoM = "No";
            }else{
                especialM="Cerrado";
                AbiertoM = "No";
                CerradoM = "No";
            }
           
            if(SheMI == null && DiaCerradoMI == null ){
                especialMI="No";
            }else if(DiaCerradoMI==null){
                especialMI="Sin horario especifico";
                AbiertoMI = "No";
                CerradoMI = "No";
            }else{
                especialMI="Cerrado";
                AbiertoMI = "No";
                CerradoMI = "No";
            }
       
            if(SheJ == null && DiaCerradoJ == null ){
                especialJ="No";
            }else if(DiaCerradoJ==null){
                especialJ="Sin horario especifico";
                AbiertoJ = "No";
                CerradoJ = "No";
            }else{
                especialJ="Cerrado";
                AbiertoJ = "No";
                CerradoJ = "No";
            }
           
            if(SheV == null && DiaCerradoV == null ){
                especialV="No";
            }else if(DiaCerradoV==null){
                especialV="Sin horario especifico";
                AbiertoV = "No";
                CerradoV = "No";
            }else{
                especialV="Cerrado";
                AbiertoV = "No";
                CerradoV = "No";
            }
            
            if(SheS == null && DiaCerradoS == null ){
                especialS="No";
            }else if(DiaCerradoS==null){
                especialS="Sin horario especifico";
                AbiertoS = "No";
                CerradoS = "No";
            }else{
                especialS="Cerrado";
                AbiertoS = "No";
                CerradoS = "No";
            }
            
            if(SheD == null && DiaCerradoD == null ){
                especialD="No";
            }else if(DiaCerradoD==null){
                especialD="Sin horario especifico";
                AbiertoD = "No";
                CerradoD = "No";
            }else{
                especialD="Cerrado";
                AbiertoD = "No";
                CerradoD = "No";
            }
            
            con.Horario(AbiertoL, CerradoL, especialL, "Lunes", neid);
            con.Horario(AbiertoM, CerradoM, especialM, "Martes", neid);
            con.Horario(AbiertoMI, CerradoMI, especialMI, "Miercoles", neid);
            con.Horario(AbiertoJ, CerradoJ, especialJ, "Jueves", neid);
            con.Horario(AbiertoV, CerradoV, especialV, "Viernes", neid);
            con.Horario(AbiertoS, CerradoS, especialS, "Sabado", neid);
            con.Horario(AbiertoD, CerradoD, especialD, "Domingo", neid);
            
            try {
                c.close();
            } catch (SQLException ex) {
                Logger.getLogger(CrearNegocio.class.getName()).log(Level.SEVERE, null, ex);
            }
                //
                if(mensaje==null){
                    
                    mensaje="Negocio agregado con exito, ahora puede agregar productos";
                    
                  request.setAttribute("mensaje", mensaje);
                  request.setAttribute("neid", neid);
                   
                   RequestDispatcher rd = request.getRequestDispatcher("CrearNegocio_Formulario.jsp");
                   rd.forward(request, response);
                
                    
                //
                }else{
                   request.setAttribute("mensaje", mensaje);
                   
                   RequestDispatcher rd = request.getRequestDispatcher("CrearNegocio_Formulario.jsp");
                   rd.forward(request, response);
                }
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

/*Prints de prueba
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CrearNegocio</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1> Datos del negocio</h1>");
            out.println("Nombre: " + Nombre + " Descripcion: "+ Descripcion + " Tipo: "+Tipo+"</h1>");
            out.println("<h1> Direccion del negocio</h1>");
            out.println("Codigo Postal " + Cp + " Colonia "+ Colonia + " Calle "+Calle+" Numero exterior "+ Numero + " Indicaciones extra "+Iextra);
            out.println("<h1> Contactos del negocio</h1>");
            out.println("Telefono " + Telefono + " Mail "+ Mail + " Facebook "+Facebook+" Instagram "+ Instagram + " Twitter "+Twitter+" Pagina web "+Pagina);
            out.println("<h1> Imagenes del negocio</h1>");
            out.println("<h3>Logo:</h1>");
            out.println("<img src="+logo+">");
            out.println("<h3>Imagen 1:</h1>");
            out.println("<img src="+img1+">");
            out.println("<h3>Imagen 2:</h1>");
            out.println("<img src="+img2+">");
            out.println("<h3>Imagen 3:</h1>");
            out.println("<img src="+img3+">");
            out.println("<h1> Horarios del negocio</h1>");
            
            out.println("<h1>Lunes:</h1>");
            if(SheL == null && DiaCerradoL == null ){
            out.println("Horario de " + AbiertoL + " a "+ CerradoL);
            }else if(DiaCerradoL==null){
             out.println("Sin horario especifico los Lunes");
            }else{
            out.println("Cerrado los Lunes");
            }
            
           out.println("<h1>Martes:</h1>");
            if(SheM == null && DiaCerradoM == null ){
            out.println("Horario de " + AbiertoM + " a "+ CerradoM);
            }else if(DiaCerradoM==null){
             out.println(" Sin horario especifico los Martes");
            }else{
            out.println(" Cerrado los Martes");
            }
           
            out.println("<h1>Miercoles:</h1>");
            if(SheMI == null && DiaCerradoMI == null ){
            out.println("Horario de " + AbiertoMI + " a "+ CerradoMI);
            }else if(DiaCerradoMI==null){
             out.println("Sin horario especifico los Miercoles");
            }else{
            out.println(" Cerrado los Miercoles");
            }
       out.println("<h1>Juevebes:</h1>");
            if(SheJ == null && DiaCerradoJ == null ){
            out.println("Horario de " + AbiertoJ + " a "+ CerradoJ);
            }else if(DiaCerradoJ==null){
             out.println(" Sin horario especifico los Jueves");
            }else{
            out.println("Cerrado los Jueves");
            }
           out.println("<h1>Viernes:</h1>");
            if(SheV == null && DiaCerradoV == null ){
            out.println("Horario de " + AbiertoV + " a "+ CerradoV);
            }else if(DiaCerradoV==null){
             out.println(" Sin horario especifico los Viernes");
            }else{
            out.println(" Cerrado los Viernes");
            }
            out.println("<h1>Sabadazo venga la alegria:</h1>");
            if(SheS == null && DiaCerradoS == null ){
            out.println("Horario de " + AbiertoS + " a "+ CerradoS);
            }else if(DiaCerradoS==null){
             out.println(" Sin horario especifico los Sabados ");
            }else{
            out.println(" Cerrado los Sabados ");
            }
            out.println("<h1>Dormingo:</h1>");
            if(SheD == null && DiaCerradoD == null ){
            out.println("Horario de " + AbiertoD + " a "+ CerradoD + "");
            }else if(DiaCerradoD==null){
             out.println(" Sin horario especifico los Domingos");
            }else{
            out.println(" Cerrado los Domingos");
            }
            
            out.println("</body>");
            out.println("</html>");*/
/*
String Nombre = request.getParameter("N_Neg_cnf");

                //Tipo de negocio
                String Tipo = request.getParameter("TP_cnf");
                List<String> opciones_tipoNegocio = Arrays.asList("Abarrotes", "Materia_Prima", "Restaurantes", "SyP", "Cafeteria", "Catering", "Panaderia", "OyF");
                
                //Logo
                
                Part filePart_img_Logo = request.getPart("logo_cnf");
                InputStream fileContent_img_Logo = filePart_img_Logo.getInputStream();
                ByteArrayOutputStream output_img_Logo = new ByteArrayOutputStream();
                byte[] buffer_img_Logo = new byte[1024];
                for (int length = 0; (length = fileContent_img_Logo.read(buffer_img_Logo)) > 0;) {
                    output_img_Logo.write(buffer_img_Logo, 0, length);
                }
                byte[] fileData_Logo = output_img_Logo.toByteArray();

                String fileName_img_Logo = filePart_img_Logo.getSubmittedFileName();
                String fileExtension_img_Logo = "";
                int img_Logo = fileName_img_Logo.lastIndexOf('.');
                if (img_Logo > 0) {
                    fileExtension_img_Logo = fileName_img_Logo.substring(img_Logo+1);
                }         


            HttpSession session = request.getSession();
            Boolean productosCompletados = (Boolean) session.getAttribute("productosCompletados");

            if (productosCompletados == null || !productosCompletados) {
                Variables Guardadas
                
                session.setAttribute("valor_nombreNegocio", Nombre);
                session.setAttribute("valor_tipoNegocio", Tipo);
                
                
                //Nombre del negocio
                
                if(Nombre == null || Nombre.isEmpty()){
                    request.setAttribute("error_nombreNegocio_Vacio", "El campo no debe de estar vacio");
                    request.getRequestDispatcher("/CrearNegocio_Formulario.jsp").forward(request, response);
                    return;
                }
                
                

                if(Nombre == null || Nombre.length() > 40){
                    request.setAttribute("error_nombreNegocio_Largo", "Solo se permiten hasta 40 caracteres");
                    request.getRequestDispatcher("/CrearNegocio_Formulario.jsp").forward(request, response);
                    return;
                }

*/
