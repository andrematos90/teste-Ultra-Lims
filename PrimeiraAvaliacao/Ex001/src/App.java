/*1. Encontrar número não repetido: Escreva um algoritmo para encontrar um único
número de um array onde cada número repete três vezes, exceto um:
Input: [5,3,4,3,5,5,3]
Output: 4 */


public class App {
    public static void main(String[] args) throws Exception {
       int[] numeros = new int[7];

       numeros[0] = 5;
       numeros[1] = 3;
       numeros[2] = 4;
       numeros[3] = 3;
       numeros[4] = 5;
       numeros[5] = 5;
       numeros[6] = 3;

       System.out.println("Número único: " + encontrarNumeroUnico(numeros));

    }

    public static int encontrarNumeroUnico(int[] array) {
        
        int unicos = 0;
        int duplicados = 0;
        int bitsComuns;

        for (int num : array) {
            duplicados |= (unicos & num);
            unicos ^= num;
            bitsComuns = ~(unicos & duplicados);
            unicos &= bitsComuns;
            duplicados &= bitsComuns;
        }

        return unicos;
    }
}

