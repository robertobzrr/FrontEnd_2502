alturas = []
generos = []

for i in range(15):
    altura = float(input(f"Digite a altura da pessoa {i + 1}: "))
    genero = input(f"Digite o gênero da pessoa {i + 1} (m/f): ").strip().lower()
    alturas.append(altura)
    generos.append(genero)

maior_altura = max(alturas)
menor_altura = min(alturas)

alturas_m = [altura for altura, genero in zip(alturas, generos) if genero == "masculino"]
media_altura_masculino = sum(alturas_m) / len(alturas_m) if alturas_m else 0

numero_feminino = sum(1 for genero in generos if genero == "feminino")

print(f"A maior altura do grupo é: {maior_altura}")
print(f"A menor altura do grupo é: {menor_altura}")
print(f"A média de altura das pessoas do gênero Masculino é: {media_altura_masculino}")
print(f"O número de pessoas do gênero Feminino é: {numero_feminino}")
