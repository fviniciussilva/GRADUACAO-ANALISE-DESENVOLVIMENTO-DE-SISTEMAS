package oo02;

/**
 * Classe Cpf - modelo de CPF (Cadastro de Pessoa Física).
 * Valida, formata e armazena CPF para cadastro de pessoa física.
 * 
 * Inclui lógica de identificação: se o documento for CPF, o sistema
 * deve listar TODOS os dados cadastrados (nome, endereço, telefone, CPF).
 * 
 * @author Fabíola
 */
public class Cpf {

    /**
     * CPF como string pura (apenas dígitos): "12345678901" (11 dígitos).
     * Armazenado sem formatação para facilitar validação e comparação.
     */
    String numero;

    /**
     * Nome completo da pessoa física associada a este CPF.
     * Usado na listagem para mostrar quem é o titular.
     */
    String nomeTitular;

    /**
     * Construtor padrão - cria CPF vazio (número e nome null).
     */
    public Cpf() {
    }

    /**
     * Construtor parametrizado - cria CPF já com número e titular.
     * 
     * @param numero CPF com 11 dígitos (apenas números)
     * @param nomeTitular nome da pessoa física
     */
    public Cpf(String numero, String nomeTitular) {
        this.numero = numero;
        this.nomeTitular = nomeTitular;
    }

    /**
     * Retorna o CPF como string pura (sem formatação).
     * @return CPF como String de 11 dígitos
     */
    public String getNumero() {
        return numero;
    }

    /**
     * Seta o CPF. Aceita formato com ou sem pontuação.
     * Internamente sempre armazena apenas os dígitos (11 caracteres).
     * 
     * @param cpf string com CPF (ex: "123.456.789-01" ou "12345678901")
     */
    public void setNumero(String cpf) {
        if (cpf == null) {
            this.numero = null;
            return;
        }
        // Remove tudo que não é dígito: pontos, hífens, espaços
        this.numero = cpf.replaceAll("[^0-9]", "");
    }

    /**
     * Retorna o nome do titular do CPF.
     * @return nome completo
     */
    public String getNomeTitular() {
        return nomeTitular;
    }

    /**
     * Seta o nome do titular.
     * @param nomeTitular nome completo da pessoa física
     */
    public void setNomeTitular(String nomeTitular) {
        this.nomeTitular = nomeTitular;
    }

    /**
     * Formata o CPF no padrão brasileiro: XXX.XXX.XXX-XX
     * Exemplo: "12345678901" → "123.456.789-01"
     * 
     * @return CPF formatado ou vazio se número for null/inválido
     */
    public String formatar() {
        if (numero == null || numero.length() != 11) {
            return "";
        }
        return numero.substring(0, 3) + "." +
               numero.substring(3, 6) + "." +
               numero.substring(6, 9) + "-" +
               numero.substring(9, 11);
    }

    /**
     * Verifica se o CPF tem 11 dígitos (validação básica de tamanho).
     * 
     * @return true se tiver exatamente 11 dígitos numéricos
     */
    public boolean isValido() {
        if (numero == null) return false;
        return numero.length() == 11 && numero.matches("[0-9]+");
    }

    /**
     * Lista TODOS os dados do titular CPF (usado quando o sistema identifica
     * que é pessoa física e deve mostrar tudo).
     * 
     * Formato de saída:
     *   ---------- DADOS PESSOA FÍSICA (CPF) ----------
     *   Nome completo: João da Silva
     *   CPF: 123.456.789-01
     *   -----------------------------------------
     * 
     * @return String com todos os dados formatados
     */
    public String listarTodos() {
        StringBuilder sb = new StringBuilder();
        sb.append("---------- DADOS PESSOA FÍSICA (CPF) ----------\n");
        sb.append("Nome completo: ").append(nomeTitular != null ? nomeTitular : "NÃO INFORMADO").append("\n");
        sb.append("CPF: ").append(formatar()).append("\n");
        sb.append("-----------------------------------------\n");
        return sb.toString();
    }

    /**
     * Representação em string do CPF (usada pelo println).
     * Mostra o CPF formatado ou "CPF inválido" dependendo do caso.
     * 
     * @return String formatada
     */
    @Override
    public String toString() {
        if (!isValido()) {
            return "CPF inválido";
        }
        return "CPF: " + formatar();
    }
}
