class Carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("O carro está ligado.");
    }
}

// criando objeto (instância)
var carro1 = new Carro()
var carro2 = new Carro()
var carro3 = new Carro()

carro1.marca = "Chevrolet"
carro1.modelo = "Equinox SUV"
carro1.ano = "2004"

carro2.marca = "fiat"
carro2,modelo = "Plataforma C"
carro2.ano = "2007"

carro3.marca = "gol"
carro3.modelo = "Segunda geração (G2)"
carro3.ano = "1994"

console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)

console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)

console.log(carro3.marca)
console.log(carro3.modelo)
console.log(carro3.ano)
