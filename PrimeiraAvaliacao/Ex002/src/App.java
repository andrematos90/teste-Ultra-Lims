/*Verificação de Palíndromo: Escreva um algoritmo para verificar se uma string é um
palíndromo.
Input: "arara"
Output: True */

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
     
     Scanner scanner = new Scanner(System.in);

     System.out.print("Digite uma palavra: ");

     String palavra = scanner.nextLine();
     System.out.println(palavra);

     boolean resultado = verificarPalindromo(palavra);
        
     System.out.println("A string \"" + palavra + "\" é um palíndromo? " + resultado);
     
     scanner.close();
    }

    public static boolean verificarPalindromo(String str) {
       
        str = str.replaceAll("\\s+", "").toLowerCase();
        
       
        String invertida = new StringBuilder(str).reverse().toString();
        
        
        return str.equals(invertida);
    }
}
