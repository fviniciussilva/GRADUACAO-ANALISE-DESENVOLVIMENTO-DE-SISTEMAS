# Projeto OO02 — Explicação Completa para Quem Está Perdido

## O que é esse projeto?
É um exercício de **Programação Orientada a Objetos (POO) em Java** feito no NetBeans (Maven). O objetivo da aula era ensinar:

1. **Criar classes** com atributos (campos) e métodos (getters/setters)
2. **Associar objetos** entre si (um cliente tem um endereço)
3. **Encapsulamento**: esconder os dados internos e expor apenas via métodos públicos
4. **Uso de Scanner** para entrada de dados do usuário (teclado)

## Estrutura de pastas e arquivos
```
oo02/                          (pacote Java = pasta src/oo02/)
├── Oo02.java              ← classe principal (tem o método main, onde o programa começa)
├── clientes.java          ← modelo de um cliente (tem nome e um endereço)
├── endereços.java         ← modelo de um endereço (tem CEP, rua, número)
├── pessoa_fisica.java     ← modelo de pessoa física (tem CPF, RG, data de nascimento)
└── pessoa_juridica.java   ← modelo de pessoa jurídica (tem CNPJ)
```

## Como funciona o programa (passo a passo do main)

### 1. Entrada de dados
O programa pergunta ao usuário:
- **Nome** do cliente → vai para `cli.setNome()`
- **CEP** do endereço → vai para `end.setCep()`
- **Rua** → vai para `end.setRua()`
- **Número da casa** → vai para `end.setNumero()`

### 2. Montagem do objeto
```
cli = new clientes()           → cria um cliente vazio
end = new endereços()          → cria um endereço vazio
end.setCep(...)                → preenche o CEP
end.setRua(...)                → preenche a rua
end.setNumero(...)             → preenche o número
cli.setEnd(end)               → APENAS AGORA o cliente ganha o endereço
```

### 3. Saída (o programa mostra o que foi digitado)
```
cli.getEnd().getCep()         → mostra o CEP
cli.getEnd().getNumero()      → mostra o número
cli.getEnd().getRua()         → mostra a rua
```

Note que para mostrar o **nome do cliente** faltou um `System.out.println(cli.getNome());` — isso é um erro/omissão no código (ou código intencionalmente incompleto como exercício).

## Por que a classe "clientes" tem um "endereços"?
É um exemplo de **composição/associação**: o cliente NÃO é um endereço, mas o cliente **tem** (possui) um endereço. No diagrama mental:

```
[clientes]
  ├── String nome
  └── endereços end   → referencia para um objeto endereços (um para um)

[endereços]
  ├── String Cep
  ├── String rua
  └── String numero
```

Isso é diferente de herança. Não é "um cliente é um endereço" — é "um cliente possui um endereço". Se fosse herança, seria `class clientes extends endereços`, mas não é isso.

## O que são getters e setters?
- **Getter** (ex: `getNome()`) = método público que retorna o valor do campo (leitura)
- **Setter** (ex: `setNome(String nome)`) = método público que altera o valor do campo (escrita)

Eles servem para **encapsulamento**: o campo `nome` dentro da classe não é público (é package-private), mas qualquer um pode ler/escrever usando os métodos públicos. Isso evita que alguém mude o nome diretamente sem passar pelo controle do setter.

No Java moderno, isso é automático com record ou com Lombok, mas nas aulas introdutórias se escreve manualmente.

## O que o NetBeans gerou automaticamente?
Quando você clica em Novo Classe no NetBeans, ele gera:
1. O cabeçalho `package`
2. Os comentários Javadoc com `/* */` e `@author`
3. O esqueleto `public class NomeDaClasse { }`
4. O import se necessário

Os comentários tipo `Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt` são **instruções do NetBeans** — você clica neles (nomnl) e ele abre o arquivo de licença. Não são código executável — são comentários.

## O que falta/está incompleto?
1. **Não imprime o nome do cliente** — só imprime os dados do endereço; o nome fica guardado no objeto mas não é mostrado.
2. **A pessoa_fisica e pessoa_juridica não são usadas** — criaram essas classes mas o main não as instancia (o programa só usa clientes + endereços). Provavelmente era um exercício futuro: "agora crie um sistema que cadastre pessoa física e jurídica".
3. **Os campos têm acesso package-private** (sem `private` ou `public`) — na prática funciona, mas não é o ideal de encapsulamento; o padrão é `private` com getters/setters públicos.
4. **O número da casa é String** — permite "12B", "Apto 3", etc., mas não permite fazer operações matemáticas (somar 1 ao número, por exemplo).

## Para rodar o projeto
1. Abra o NetBeans (com Java configurado na variável JAVA_HOME)
2. Abra o projeto "oo02" (arquivo pom.xml ou build.xml)
3. Execute clicando com botão direito na classe Oo02 → Executar Arquivo
4. Ou pelo terminal com Maven: `mvn clean compile exec:java -Dexec.mainClass="com.mycompany.fernando.Fernando"` (mas note que a classe main é "oo02.Oo02", não "com.mycompany.fernando.Fernando" — o pom.xml tá apontando para o projeto "fernando" antigo, não oo02)

## Conexão com o resto
Esse projeto é a base para você entender:
- **Classes e objetos** (criar molde vs criar instância real)
- **Referência entre objetos** (o cliente aponta para um endereço)
- **Métodos de acesso** (get/set para encapsular dados)
- **Scanner** (ler entrada do usuário)

As classes `pessoa_fisica` e `pessoa_juridica` mostram que o mesmo padrão (campos + getters/setters) se aplica a diferentes tipos de entidades — uma pessoa física tem CPF/RG/data_nasc, uma jurídica tem CNPJ.
