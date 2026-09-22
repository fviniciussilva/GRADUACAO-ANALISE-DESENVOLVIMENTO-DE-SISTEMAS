package oo02;

import java.util.Scanner;

/**
 * Classe principal do exercício OO02.
 * 
 * Recebe dados do usuário e identifica se o documento informado é CPF ou CNPJ.
 * Se for CPF: lista TODOS os dados (nome, endereço, telefone, CPF).
 * Se for CNPJ: lista SOMENTE nome e CNPJ.
 * 
 * @author Fabíola
 */
public class Oo02 {

    /**
     * Método principal - ponto de entrada do programa.
     * 
     * @param args argumentos da linha de comando (não utilizados)
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        // --- Cadastro do cliente ---
        clientes cli = new clientes();
        
        System.out.println("=== CADASTRO DE CLIENTE ===");
        System.out.print("digite o nome do cliente: ");
        cli.setNome(scan.nextLine());
        
        System.out.print("digite o CEP: ");
        String cep = scan.nextLine();
        
        System.out.print("digite o nome da rua: ");
        String rua = scan.nextLine();
        
        System.out.print("digite o número da casa: ");
        String numero = scan.nextLine();
        
        // --- Cria objeto endereço ---
        endereços end = new endereços();
        end.setCep(cep);
        end.setRua(rua);
        end.setNumero(numero);
        cli.setEnd(end);
        
        // --- Cadastro de telefone ---
        System.out.println("\n=== CADASTRO DE TELEFONE (opcional) ===");
        System.out.print("tem telefone? (s/n): ");
        String temTelefone = scan.nextLine().trim().toLowerCase();
        
        Telefone tel = null;
        if (temTelefone.equals("s") || temTelefone.equals("sim")) {
            tel = new Telefone();
            System.out.print("digite o DDD: ");
            tel.setDdd(scan.nextLine());
            System.out.print("digite o número: ");
            tel.setNumero(scan.nextLine());
            System.out.print("tipo (residencial/celular/comercial): ");
            tel.setTipo(scan.nextLine());
        }
        
        // --- Identificação do documento (CPF ou CNPJ) ---
        System.out.println("\n=== IDENTIFICAÇÃO DO DOCUMENTO ===");
        System.out.println("Informe o número do documento (apenas dígitos):");
        System.out.print("CPF tem 11 dígitos, CNPJ tem 14 dígitos: ");
        String documento = scan.nextLine();
        
        // Remove espaços em branco
        documento = documento.trim().replaceAll("\\s+", "");
        
        // Decisão: CPF (11 dígitos) ou CNPJ (14 dígitos)
        Cpf cpf = null;
        Cnpj cnpj = null;
        
        if (documento.length() == 11 && documento.matches("[0-9]+")) {
            // É CPF - lista TUDO
            System.out.println("\n>>> DOCUMENTO IDENTIFICADO: CPF (pessoa física)");
            System.out.println(">>> LISTAGEM COMPLETA DE TODOS OS DADOS\n");
            
            cpf = new Cpf();
            cpf.setNumero(documento);
            cpf.setNomeTitular(cli.getNome());
            
            // Imprime TUDO (nome, endereço, telefone, CPF)
            System.out.println("========================================");
            System.out.println("           DADOS COMPLETOS");
            System.out.println("========================================");
            System.out.println("Nome: " + cli.getNome());
            System.out.println("----------------------------------------");
            System.out.println("ENDEREÇO:");
            System.out.println("  CEP: " + end.getCep());
            System.out.println("  Rua: " + end.getRua());
            System.out.println("  Número: " + end.getNumero());
            System.out.println("----------------------------------------");
            if (tel != null) {
                System.out.println("TELEFONE:");
                System.out.println("  " + tel.toString());
                System.out.println("----------------------------------------");
            }
            System.out.println("DOCUMENTO (CPF):");
            System.out.println(cpf.listarTodos());
            System.out.println("========================================");
            
        } else if (documento.length() == 14 && documento.matches("[0-9]+")) {
            // É CNPJ - lista SOMENTE nome e CNPJ
            System.out.println("\n>>> DOCUMENTO IDENTIFICADO: CNPJ (pessoa jurídica)");
            System.out.println(">>> LISTAGEM APENAS NOME E CNPJ\n");
            
            cnpj = new Cnpj();
            cnpj.setNumero(documento);
            cnpj.setNomeEmpresa(cli.getNome());
            
            // Imprime SOMENTE nome e CNPJ (sem endereço, sem telefone)
            System.out.println(cnpj.listarApenasNomeEcPjt());
            
        } else {
            // Documento inválido - não é nem 11 nem 14 dígitos
            System.out.println("\n>>> ERRO: Documento inválido!");
            System.out.println("  CPF deve ter 11 dígitos");
            System.out.println("  CNPJ deve ter 14 dígitos");
            System.out.println("  Você informou: " + documento.length() + " dígitos");
            System.out.println("  Nenhum dado foi listado.");
        }
        
        scan.close();
    }
}
