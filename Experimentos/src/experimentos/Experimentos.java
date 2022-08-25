package experimentos;

import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class Experimentos {
    public void icono(){
        Icon icono = new ImageIcon(getClass().getResource("/experimentos/PDF.png"));
        JOptionPane.showMessageDialog(null, "Archivo correctamente guardado", "Titulo", JOptionPane.INFORMATION_MESSAGE, icono);
    }
    public void fecha(){
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        DateTimeFormatter Dia = DateTimeFormatter.ofPattern("dd");
        //DateTimeFormatter Mes = DateTimeFormatter.ofPattern("MM");
        DateTimeFormatter Año = DateTimeFormatter.ofPattern("yyyy");
        String formattedDate = myDateObj.format(myFormatObj);
        String formattedDay = myDateObj.format(Dia);
        //String formattedMonth = myDateObj.format(Mes);
        Month formattedMonth = myDateObj.getMonth();
        String formattedYear = myDateObj.format(Año);
        JOptionPane.showMessageDialog(null, "Fecha actual: " + formattedDate);
        System.out.println(formattedDay);
        System.out.println(formattedMonth);
        System.out.println(formattedYear);
    }
    public static void main(String[] args) {
        //new Experimentos().icono();
        new Experimentos().fecha();
    }
    
}
