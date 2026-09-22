package oo02;  // Declara que esta classe pertence ao pacote "oo02"

/* */  // Comentário Javadoc padrão do NetBeans
/*  * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license */  // Instrução para mudar a licença do projeto
/*   * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template */  // Instrução para editar o template da classe Java

/** */  // Javadoc vazio
/**  * */ // 
/**   * @author Fabíola */  // Autoria
public class endereços {  // Classe pública "endereços" (novamente no plural, fora do padrão Java)

    public String getCep() {  // Getter: acessa o CEP de fora da classe
        return Cep;  // Retorna o conteúdo do campo "Cep" (note: nome com letra maiúscula no início — fora do padrão Java de camelCase)
    }

    public void setCep(String Cep) {  // Setter: define o CEP
        this.Cep = Cep;  // "this.Cep" = campo da classe; "Cep" = parâmetro do método; atribuição do valor digitado ao campo
    }

    public String getRua() {  // Getter para o nome da rua
        return rua;  // Retorna o campo "rua"
    }

    public void setRua(String rua) {  // Setter para o nome da rua
        this.rua = rua;  // Atribui o parâmetro ao campo da classe
    }

    public String getNumero() {  // Getter para o número da casa
        return numero;  // Retorna o campo "numero"
    }

    public void setNumero(String numero) {  // Setter para o número da casa (aceita String, não int — permite números com letra como "12B")
        this.numero = numero;  // Atribui o parâmetro ao campo da classe
    }

    String Cep;  // Campo da classe: armazena o CEP do endereço (tipo String; acesso package-private pelo padrão, mas os getters/setters são públicos)
    String rua;  // Campo: armazena o nome da rua
    String numero;  // Campo: armazena o número da casa (como String, não como número — permite caracteres alfabéticos)

    // Linha em branco

}
  // Fecha a classe endereços
