package oo02;  // Declara que esta classe pertence ao pacote "oo02"

/* */  // Comentário Javadoc padrão do NetBeans (clicável para ver a licença)
/*  * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license */  // Instrução para alterar a licença padrão do projeto
/*   * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template */  // Instrução para editar o template da classe Java

/** */  // Javadoc vazio iniciado automaticamente pelo NetBeans
/**  * */ // 
/**   * @author Fabíola */  // Tag Javadoc com o nome do autor
public class pessoa_juridica {  // Classe pública "pessoa_juridica" (modelo de pessoa jurídica — empresa ou organização, possui CNPJ)

    public String getCnpj() {  // Getter: acessa o CNPJ de fora da classe (encapsulamento)
        return cnpj;  // Retorna o conteúdo do campo "cnpj" (que inicialmente é null, até ser atribuído via setter)
    }

    public void setCnpj(String cnpj) {  // Setter: define o CNPJ para a pessoa jurídica
        this.cnpj = cnpj;  // "this.cnpj" = campo da classe (declared na linha 23 abaixo); "cnpj" = parâmetro do método; o this.remove a ambiguidade porque os nomes são iguais
    }

    String cnpj;  // Campo da classe: armazena o CNPJ da pessoa jurídica (tipo String — aceita valores como "12.345.678/0001-90"); acesso package-private (sem modificador de acesso, visível dentro do mesmo pacote "oo02"); não há getter/setter para outros campos porque a classe só modela o CNPJ neste exemplo simplificado
    // NOTA: Esta classe está incompleta em relação à classe "pessoa_fisica" — enquanto a pessoa_fisica tem CPF, RG e data de nascimento, a pessoa_juridica só tem CNPJ; numa aula completa ela provavelmente teria mais dados (razão social, inscrição estadual, etc.), mas o professor simplificou para focar no conceito de classe

    // Linha em branco (separação visual no código)

}
  // Fecha a classe pessoa_juridica
