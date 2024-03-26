import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
         int entrada = 6;
        int[] sequenciaFibonacci = sequenciaFibonacci(entrada);
        System.out.println("Entrada: " + entrada);
        System.out.println("Saída: " + Arrays.toString(sequenciaFibonacci));
    }

    public static int[] sequenciaFibonacci(int n) {
        if (n <= 0) {
            return new int[0];
        }
        
        int[] fibonacci = new int[n];
        fibonacci[0] = 1;
        if (n > 1) {
            fibonacci[1] = 1;
            for (int i = 2; i < n; i++) {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }
        }
        return fibonacci;
    }

}
