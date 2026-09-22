package oo02;

/**
 * Classe Telefone - modelo de telefone para cadastro de contatos.
 * Armazena número, tipo (residencial, celular, comercial, etc)
 * e código de área (DDD).
 * 
 * @author Fabíola
 */
public class Telefone {

    /**
     * Número completo do telefone no formato:(XX) XXXXX-XXXX ou similar.
     * Ex: "(11) 99999-9999"
     */
    String numero;

    /**
     * Tipo de telefone: "residencial", "celular", "comercial", "recado", etc.
     * Usado para categorizar o contato.
     */
    String tipo;

    /**
     * Código de área (DDD) - deve ter 2 dígitos, ex: "11", "21", "31".
     * Armazenado separadamente para facilitar filtros e formatação.
     */
    String ddd;

    /**
     * Construtor padrão - cria um telefone vazio (número, tipo e DDD null).
     * O usuário será responsável por preencher via setters.
     */
    public Telefone() {
    }

    /**
     * Construtor parametrizado - cria um telefone já com os dados.
     * 
     * @param numero o número completo do telefone
     * @param tipo  o tipo do telefone (residencial, celular, etc)
     * @param ddd   o DDD do telefone
     */
    public Telefone(String numero, String tipo, String ddd) {
        this.numero = numero;
        this.tipo = tipo;
        this.ddd = ddd;
    }

    /**
     * Retorna o número completo do telefone.
     * @return número como String
     */
    public String getNumero() {
        return numero;
    }

    /**
     * Seta o número do telefone.
     * @param numero novo número
     */
    public void setNumero(String numero) {
        this.numero = numero;
    }

    /**
     * Retorna o tipo do telefone (residencial, celular, comercial...).
     * @return tipo como String
     */
    public String getTipo() {
        return tipo;
    }

    /**
     * Seta o tipo do telefone.
     * @param tipo novo tipo
     */
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    /**
     * Retorna o DDD do telefone.
     * @return DDD como String (ex: "11")
     */
    public String getDdd() {
        return ddd;
    }

    /**
     * Seta o DDD do telefone.
     * @param ddd novo DDD
     */
    public void setDdd(String ddd) {
        this.ddd = ddd;
    }

    /**
     * Retorna uma representação formatada do telefone.
     * Exemplo: "(11) 99999-9999 - Celular"
     * 
     * @return String formatada com DDD, número e tipo
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        if (ddd != null && !ddd.isEmpty()) {
            sb.append("(").append(ddd).append(") ");
        }
        if (numero != null) {
            sb.append(numero);
        }
        if (tipo != null && !tipo.isEmpty()) {
            sb.append(" - ").append(tipo);
        }
        return sb.toString();
    }
}
