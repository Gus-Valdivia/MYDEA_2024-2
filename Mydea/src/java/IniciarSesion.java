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
 * @author 980030870
 */
@WebServlet(urlPatterns = {"/IniciarSesion"})
public class IniciarSesion extends HttpServlet {

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
            /* TODO output your page here. You may use following sample code. */
      
            boolean create = true;         
            HttpSession session = request.getSession(create);
            
            String nom=request.getParameter("Nom_usu_is");
            String pass=request.getParameter("Con_is");
            
            String correo=request.getParameter("Email_is");
            
            
            Conexion c = new Conexion();
            Connection con;
            
            c.setCon();
            con=c.getCon();
            
            String mensaje = c.ISU(nom, pass, correo);
             
            if(mensaje==null){
                
                String[] Persona = new String[9];
                
                Persona=c.InfoPersona(nom);
                
                String tipo = c.Tipo(nom);
                
                try {
                    con.close();
                } catch (SQLException ex) {
                    Logger.getLogger(CrearNegocio.class.getName()).log(Level.SEVERE, null, ex);
                }
                String descripcion = Persona[0];
                String nombrereal = Persona[1];
                String telefono = Persona[2];
                String foto = Persona[3];
                String fb = Persona [4];
                String ig = Persona[5];
                String tw= Persona[6];
                String web = Persona[7];
                
                Persona person = new Persona(correo, telefono, nombrereal, foto, fb, ig, tw, web, descripcion);
                session.setAttribute("persona", person);
                
                
                Usuario usuario = new Usuario(nom, pass);
                session.setAttribute("usuario",usuario);
                
                if(tipo.equals("1")){
                
                    response.sendRedirect("indexCC.jsp");
                }else if (tipo.equals("2")){
                    response.sendRedirect("indexCV.jsp");
                }else{
                    response.sendRedirect("index.jsp");
                }
                  
                    
                }else{
                try {
                    con.close();
                } catch (SQLException ex) {
                    Logger.getLogger(CrearNegocio.class.getName()).log(Level.SEVERE, null, ex);
                }
                   request.setAttribute("mensaje", mensaje);
                   RequestDispatcher rd = request.getRequestDispatcher("Iniciar_Sesion.jsp");
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
