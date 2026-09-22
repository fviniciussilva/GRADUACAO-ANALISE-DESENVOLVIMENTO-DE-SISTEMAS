/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package oo3;

import java.util.Scanner;

/**
 *
 * @author Fabíola
 */
public class OO3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        veiculo automovel = new veiculo();
        Scanner scan = new Scanner(System.in);
        System.out.println("informe o nome do carro: ");
        automovel.setModelo(scan.nextLine());
        System.out.println("informe a quantidade de portas: ");
        automovel.setQuantidade_portas(scan.nextLine());
        automovel.mostrar();
        
        
        
        }
    }
    

