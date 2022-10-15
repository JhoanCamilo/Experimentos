package experimentos;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import java.awt.HeadlessException;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JOptionPane;

public class PDF {
    String Usuario = "root";
    String Clave = "ArangoMonsalve2001";
    String URL = "jdbc:mysql://localhost:3306/appcontable";
    Connection con;
    Statement stmt;
    ResultSet rs, rs2;
    String orden = "SELECT * FROM appcontable.ingresos";
    String Total = "SELECT SUM(Valor)FROM appcontable.ingresos";
    double TotalTable;
    public void ValidarDriver(){
        try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            }catch (ClassNotFoundException e) {
        }
    }
    public double GetTotal(){
            try {
                 con = DriverManager.getConnection(URL, Usuario, Clave);
                 stmt = con.createStatement();
                 rs2 = stmt.executeQuery(Total);
                 
                 
                 if (rs2.next()) {
                    TotalTable = Double.parseDouble(rs2.getString("sum(Valor)"));
                 } else {
                 }
                 
            } catch (SQLException e) {}
        return TotalTable;
    }
    public void CrearDoc(double TotalTable){
        String nombre = JOptionPane.showInputDialog(null, "Nombre para el nuevo documento: ");
        Document documento = new Document();
        try {
            String ruta = System.getProperty("user.home");
            PdfWriter.getInstance(documento, new FileOutputStream(ruta + "/Desktop/" + nombre + ".pdf"));
            documento.open();
            
            Paragraph paragraphHello = new Paragraph();
            Paragraph BajoTabla = new Paragraph();
            paragraphHello.add("Resumen de servicios realizados en el mes");
            paragraphHello.setAlignment(Element.ALIGN_JUSTIFIED);
 
            documento.add(paragraphHello);
            documento.add(Chunk.NEWLINE);
            
            PdfPTable tabla = new PdfPTable(7);
            tabla.addCell("Cliente");
            tabla.addCell("Servicio");
            tabla.addCell("Lugar");
            tabla.addCell("Día");
            tabla.addCell("Mes");
            tabla.addCell("Año");
            tabla.addCell("Valor");
            
            try {
                 con = DriverManager.getConnection(URL, Usuario, Clave);
                 stmt = con.createStatement();
                 //conectar.stmt.executeUpdate(orden);
                 rs = stmt.executeQuery(orden);
                 
                 if (rs.next()) {
                     do {                         
                         tabla.addCell(rs.getString(1));
                         tabla.addCell(rs.getString(2));
                         tabla.addCell(rs.getString(3));
                         tabla.addCell(rs.getString(4));
                         tabla.addCell(rs.getString(5));
                         tabla.addCell(rs.getString(6));
                         tabla.addCell(rs.getString(7));
                     } while (rs.next());
                     documento.add(tabla);
                }
                else{
                    JOptionPane.showMessageDialog(null, "No se encuentra el cliente");
                }
                 documento.add(Chunk.NEWLINE);
                 BajoTabla.add("Ingresos totales: " + this.TotalTable);
                 documento.add(BajoTabla);
             } catch (SQLException e) {
             }
            documento.close();
            JOptionPane.showMessageDialog(null, "Archivo creado y guardado");
        } catch (DocumentException | HeadlessException | FileNotFoundException e) {}
    }
    public static void main(String[] args){
        PDF funcion = new PDF();
        funcion.CrearDoc(funcion.GetTotal());
    }
}
