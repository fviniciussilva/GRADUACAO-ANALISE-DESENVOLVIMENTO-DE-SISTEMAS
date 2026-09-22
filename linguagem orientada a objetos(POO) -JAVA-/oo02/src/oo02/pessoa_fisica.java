package oo02;  // Declara que esta classe pertence ao pacote "oo02"

/* */  // Comentário Javadoc padrão do NetBeans
/*  * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license */  // Link para alterar a licença do projeto
/*   * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template */  // Link para editar o template Java

/** */  // Javadoc vazio
/**  * */ // 
/**   * @author Fabíola */  // Autoria
public class pessoa_fisica {  // Classe pública "pessoa_fisica" (modelo de pessoa física — pessoa com CPF e RG)

    public String getCpf() {  // Getter: acessa o CPF de fora da classe
        return cpf;  // Retorna o conteúdo do campo privado "cpf"
    }

    public void setCpf(String cpf) {  // Setter: define o CPF
        this.cpf = cpf;  // "this.cpf" = campo da classe (inicializado como null); "cpf" = parâmetro do método; atribuição do valor ao campo
    }

    public String getRg() {  // Getter: acessa o RG de fora da classe
        return rg;  // Retorna o conteúdo do campo "rg"
    }

    public void setRg(String rg) {  // Setter: define o RG
        this.rg = rg;  // Atribui o parâmetro ao campo da classe
    }

    public String getData_nasc() {  // Getter: acessa a data de nascimento de fora da classe
        return data_nasc;  // Retorna o conteúdo do campo "data_nasc"
    }

    public void setData_nasc(String data_nasc) {  // Setter: define a data de nascimento
        this.data_nasc = data_nasc;  // Atribui o parâmetro ao campo da classe
    }

    String cpf;  // Campo: armazena o CPF da pessoa física (tipo String — aceita CPF com formatação como "123.456.789-00"); acesso package-private (sem modificador)
    String rg;  // Campo: armazena o RG da pessoa física (String — pode ter letras e números); acesso package-private
    String data_nasc;  // Campo: armazena a data de nascimento (String — formato livre, ex: "01/01/2000"); acesso package-private

    // Linha em branco (separação visual no código)

}
  // Fecha a classe pessoa_fisica
