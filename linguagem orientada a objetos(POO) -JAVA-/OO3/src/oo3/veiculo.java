/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package oo3;

/**
 *
 * @author Fabíola
 */
public class veiculo extends carro {
    String marca;
    String modelo;
    String ano;

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }
    public void mostrar(){
        System.out.println("o modelo do carro foi: "+getModelo());
        System.out.println("quantidade de portas: "+getQuantidade_portas());
    }
    }
    
    

