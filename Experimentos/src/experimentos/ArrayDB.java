package experimentos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.DefaultListModel;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JList;

public class ArrayDB {
    String Usuario = "root";
    String Clave = "ArangoMonsalve2001";
    String URL = "jdbc:mysql://localhost:3306/pruebas";
    Connection con;
    Statement stmt;
    ResultSet rs;
    String orden;
    public void ValidarDriver(){
        try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            }catch (ClassNotFoundException e) {
        }
    }
    void llenarComboBox(JComboBox<String> Inversionistas) {
            orden = "SHOW TABLES WHERE tables_in_pruebas NOT LIKE 'convertir_clientes'";
            try {
                 con = DriverManager.getConnection(URL, Usuario, Clave);
                 stmt = con.createStatement();
                 rs = stmt.executeQuery(orden);
                 
                 while(rs.next()){
                     String textList = rs.getString("Tables_in_pruebas");
                     textList = textList.replace("_", " ");
                     Inversionistas.addItem(COnvertirMayus(textList));
                 }
                 
            } catch (SQLException e) {}
    }
    public String COnvertirMayus(String text){
        char[] caracteres = text.toCharArray();
        caracteres[0] = Character.toUpperCase(caracteres[0]);
        for (int i = 0; i < text.length()- 2; i++) 
        // Es 'palabra'
        if (caracteres[i] == ' ' || caracteres[i] == '.' || caracteres[i] == ',')
          // Reemplazamos
          caracteres[i + 1] = Character.toUpperCase(caracteres[i + 1]);
        return new String(caracteres);
    }

    void LLenarLista(JComboBox<String> Inversionistas, JList<String> ListaClientes) {
        String seleccion = (String) Inversionistas.getSelectedItem();
        seleccion = seleccion.toLowerCase();
        seleccion = seleccion.replace(" ", "_");
        orden = "SELECT DEUDOR FROM " + seleccion;
        DefaultListModel<String> modelo = new DefaultListModel<String>();
        try {
            con = DriverManager.getConnection(URL, Usuario, Clave);
            stmt = con.createStatement();
            rs = stmt.executeQuery(orden);

            while(rs.next()){
                String clientecito = rs.getString("DEUDOR");
                ListaClientes.setModel(modelo);
                modelo.addElement(clientecito.trim());
            }

       } catch (SQLException e) {}
    }

    void MostrarInfo(JComboBox<String> Inversionistas, JList<String> ListaClientes, JLabel CampoNombre, JLabel CampoCedula, JLabel CampoTrabajo, JLabel CampoTel) {
        String cliente = (String) ListaClientes.getSelectedValue();
        
        orden = "SELECT Nombre, Cedula, Trabajo, Telefono FROM convertir_clientes WHERE nombre = '" + cliente + "'";
        
        try {
            con = DriverManager.getConnection(URL, Usuario, Clave);
            stmt = con.createStatement();
            rs = stmt.executeQuery(orden);

            if(rs.next()){
                CampoNombre.setText(rs.getString("Nombre"));
                CampoCedula.setText(rs.getString("Cedula"));
                CampoTrabajo.setText(rs.getString("Trabajo"));
                CampoTel.setText(rs.getString("Telefono"));
            }
            
       } catch (SQLException e) {e.printStackTrace();}
    }
}
