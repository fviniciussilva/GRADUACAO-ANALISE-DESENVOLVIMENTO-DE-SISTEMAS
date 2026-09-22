package com.mycompany.diversao;

/**
 *
 * @author Fabíola
 */
public class parque {

    // 1. Atributos declarados no escopo da classe
    private String nome;
     int idade;

    // 2. Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    // 3. Método de verificação da regra do parque
    public void verificar() {
        if (this.idade >= 60) {
            System.out.println(this.nome + ", entrada gratuita concedida!");
        } else {
            System.out.println(this.nome + ", entrada vai ser cobrada, dirija-se ao caixa!");
        }
    }
}