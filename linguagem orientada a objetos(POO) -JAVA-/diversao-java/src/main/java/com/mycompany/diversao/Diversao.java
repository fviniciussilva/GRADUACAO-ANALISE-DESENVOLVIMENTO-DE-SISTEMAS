/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.diversao;

import java.util.Scanner;

/**
 *
 * @author Fabíola
 */
public class Diversao {

    public static void main(String[] args) {
        System.out.println("PARQUE DIVERTIDO ");
        parque var = new parque();
        Scanner scan = new Scanner(System.in);
        System.out.println("DIGITE SEU NOME: ");
        var.setNome(scan.nextLine());
        System.out.println("DIGITE SUA IDADE: ");
        var.setIdade(scan.nextInt());
        var.verificar();
        
        

    }
}
