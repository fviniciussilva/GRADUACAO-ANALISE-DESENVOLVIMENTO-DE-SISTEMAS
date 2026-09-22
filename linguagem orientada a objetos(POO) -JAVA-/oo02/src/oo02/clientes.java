package oo02;  // Declara que esta classe pertence ao pacote "oo02"

/* */  // Comentário Javadoc padrão do NetBeans (clicável para ver a licença)
/*  * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license */  // Instrução para alterar a licença padrão do projeto
/*   * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template */  // Instrução para editar o template da classe

/** */  // Javadoc vazio iniciado automaticamente pelo NetBeans
/**  * */ // 
/**   * @author Fabíola */  // Tag Javadoc com o nome do autor
public class clientes {  // Classe pública "clientes" (nome no singular, mas no plural — convenção nacional, não segue o padrão Java de singular)

    String nome;  // Campo da classe: armazena o nome do cliente (acesso padrão — package-private, visível dentro do mesmo pacote)
    endereços end;  // Campo da classe: referencia um objeto do tipo "endereços" (associação: o cliente "tem um" endereço)

    public endereços getEnd() {  // Método "getter": permite acessar o campo "end" de fora da classe (encapsulamento)
        return end;  // Retorna o objeto endereço armazenado
    }

    public void setEnd(endereços end) {  // Método "setter": permite definir/atualizar o endereço de fora da classe
        this.end = end;  // "this.end" = campo da classe; "end" = parâmetro do método; o this elimina ambiguidade quando os nomes são iguais
    }

    public String getNome() {  // Getter para o campo "nome"
        return nome;  // Retorna o nome armazenado
    }

    public void setNome(String nome) {  // Setter para o campo "nome"
        this.nome = nome;  // Atribui o parâmetro ao campo da classe
    }

    // Linha em branco (separação visual — não faz nada, só organiza o código)

}
  // Fecha a classe clientes
