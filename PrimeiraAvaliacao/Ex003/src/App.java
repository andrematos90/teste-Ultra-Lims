/*Ordenação de Números Pares e Ímpares: Escreva um algoritmo para ordenar os
números de uma lista, colocando os números pares primeiro e os ímpares depois.
Input: [3, 1, 2, 4, 6, 5]
Output: [2, 4, 6, 3, 1, 5] */


public class App {
    public static void main(String[] args) throws Exception {
        int[] entrada = {3, 1, 2, 4, 6, 5};
        ordenarParesImpares(entrada);
        System.out.print("Saída: [");
        for (int i = 0; i < entrada.length; i++) {
            System.out.print(entrada[i]);
            if (i < entrada.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }

    public static void ordenarParesImpares(int[] nums) {
        int esquerda = 0;
        int direita = nums.length - 1;

        while (esquerda < direita) {
            while (esquerda < direita && nums[esquerda] % 2 == 0) {
                esquerda++;
            }

            while (esquerda < direita && nums[direita] % 2 != 0) {
                direita--;
            }

            if (esquerda < direita) {
                int temp = nums[esquerda];
                nums[esquerda] = nums[direita];
                nums[direita] = temp;
            }
        }
    }
}
