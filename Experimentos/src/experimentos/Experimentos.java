package experimentos;

import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class Experimentos {
    public void icono(){
        Icon icono = new ImageIcon(getClass().getResource("/experimentos/PDF.png"));
        JOptionPane.showMessageDialog(null, "Archivo correctamente guardado", "Titulo", JOptionPane.INFORMATION_MESSAGE, icono);
    }
    public void fecha(){
        String[] Meses = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",};
        for (String Mes : Meses) {
            JOptionPane.showMessageDialog(null, "Hola " + Mes);
        }
    }
    public void modal(){
        Object [] colores ={"rojo","negro","amarillo","azul","majenta"};
        Object opcion = JOptionPane.showInputDialog(null,"Selecciona un color", "Elegir",JOptionPane.QUESTION_MESSAGE,null,colores, colores[0]);
        for (Object colore : colores) {
            System.out.println(colore.toString());
        }
    }
    public static void main(String[] args) {
        //new Experimentos().icono();
        //new Experimentos().fecha();
        new Experimentos().modal();
    }
    
}
