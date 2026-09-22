nome = "Fernando"
list(nome)
len(nome)
frase = nome + " tem " + str(len(nome)) + " letras"
print(frase)
linguagens_dominadas = ["Python", "JavaScript", "Java"]
print(linguagens_dominadas)
linguagens_dominadas[0]= "Python 3"
linguagens_dominadas.append("html")
print(linguagens_dominadas)
del linguagens_dominadas[1]
print(linguagens_dominadas)
print("meu nome é " + nome + " e eu domino as linguagens: " + str(linguagens_dominadas) + ",vamos continuar programando!")
"Java" in linguagens_dominadas 
print("Java" in linguagens_dominadas and "Python 3" in linguagens_dominadas)
caracteristicas = ["inteligente", 31, 1.90, ["branco"], "cabelos castanhos"]
print(caracteristicas)
caracteristicas[4] = "cabelos pretos"
print(caracteristicas)
jeito, idade, altura, cor, cabelo = caracteristicas
print(jeito)
print(idade)
print(altura)
print(cor, "e o cabelo é: ")
print(cabelo)