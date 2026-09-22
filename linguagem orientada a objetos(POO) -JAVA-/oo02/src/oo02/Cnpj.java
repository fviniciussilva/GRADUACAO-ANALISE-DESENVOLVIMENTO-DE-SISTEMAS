package oo02;

/**
 * Classe Cnpj - modelo de CNPJ (Cadastro Nacional da Pessoa Jurídica).
 * Valida, formata e armazena CNPJ para cadastro de empresas e organizações.
 * 
 * Regra de negócio: se o documento for CNPJ, o sistema lista SOMENTE
 * nome e CNPJ (sem endereço, sem telefone, sem dados pessoais).
 * 
 * @author Fabíola
 */
public class Cnpj {

    /**
     * CNPJ como string pura (apenas dígitos): "12345678000199" (14 dígitos).
     * Armazenado sem formatação para facilitar validação e comparação.
     */
    String numero;

    /**
     * Razão social ou nome fantasia da pessoa jurídica.
     * Usado na listagem simplificada (apenas nome + CNPJ).
     */
    String nomeEmpresa;

    /**
     * Construtor padrão - cria CNPJ vazio (número e nome null).
     */
    public Cnpj() {
    }

    /**
     * Construtor parametrizado - cria CNPJ já com número e nome da empresa.
     * 
     * @param numero CNPJ com 14 dígitos (apenas números)
     * @param nomeEmpresa razão social ou nome fantasia
     */
    public Cnpj(String numero, String nomeEmpresa) {
        this.numero = numero;
        this.nomeEmpresa = nomeEmpresa;
    }

    /**
     * Retorna o CNPJ como string pura (sem formatação).
     * @return CNPJ como String de 14 dígitos
     */
    public String getNumero() {
        return numero;
    }

    /**
     * Seta o CNPJ. Aceita formato com ou sem pontuação.
     * Internamente sempre armazena apenas os dígitos (14 caracteres).
     * 
     * @param cnpj string com CNPJ (ex: "12.345.678/0001-99" ou "12345678000199")
     */
    public void setNumero(String cnpj) {
        if (cnpj == null) {
            this.numero = null;
            return;
        }
        // Remove tudo que não é dígito: pontos, barras, hífens, espaços
        this.numero = cnpj.replaceAll("[^0-9]", "");
    }

    /**
     * Retorna o nome da empresa (razão social ou nome fantasia).
     * @return nome da empresa
     */
    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    /**
     * Seta o nome da empresa.
     * @param nomeEmpresa novo nome
     */
    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    /**
     * Formata o CNPJ no padrão brasileiro: XX.XXX.XXX/XXXX-XX
     * Exemplo: "12345678000199" → "12.345.678/0001-99"
     * 
     * @return CNPJ formatado ou vazio se número for null/inválido
     */
    public String formatar() {
        if (numero == null || numero.length() != 14) {
            return "";
        }
        return numero.substring(0, 2) + "." +
               numero.substring(2, 5) + "." +
               numero.substring(5, 8) + "/" +
               numero.substring(8, 12) + "-" +
               numero.substring(12, 14);
    }

    /**
     * Verifica se o CNPJ tem 14 dígitos (validação básica de tamanho).
     * 
     * @return true se tiver exatamente 14 dígitos numéricos
     */
    public boolean isValido() {
        if (numero == null) return false;
        return numero.length() == 14 && numero.matches("[0-9]+");
    }

    /**
     * Lista SOMENTE nome e CNPJ (regra de negócio para pessoa jurídica).
     * Diferente do CPF que lista tudo, aqui mostra apenas os dados essenciais.
     * 
     * Formato de saída:
     *   ---------- DADOS PESSOA JURÍDICA (CNPJ) ----------
     *   Empresa: Empresa Exemplo Ltda
     *   CNPJ: 12.345.678/0001-99
     *   ---------------------------------------------------
     * 
     * @return String com nome e CNPJ formatados
     */
    public String listarApenasNomeEcPjt() {
        StringBuilder sb = new StringBuilder();
        sb.append("---------- DADOS PESSOA JURÍDICA (CNPJ) ----------\n");
        sb.append("Empresa: ").append(nomeEmpresa != null ? nomeEmpresa : "NÃO INFORMADO").append("\n");
        sb.append("CNPJ: ").append(formatar()).append("\n");
        sb.append("---------------------------------------------------\n");
        return sb.toString();
    }

    /**
     * Representação em string do CNPJ (usada pelo println).
     * Mostra o CNPJ formatado ou "CNPJ inválido" dependendo do caso.
     * 
     * @return String formatada
     */
    @Override
    public String toString() {
        if (!isValido()) {
            return "CNPJ inválido";
        }
        return "CNPJ: " + formatar();
    }
}
