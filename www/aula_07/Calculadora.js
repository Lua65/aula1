class Calculadora{
    valor1;
    valor2;

    somar(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        var resultado = this.valor1 + this.valor2;
        console.log("Resultado da soma: " + resultado)
    
        
    }
    multiplicar(valor1, valor2) {
    this.valor1 = valor1
    this.valor2 = valor2
    var resultado = this.valor1 * this.valor2;
    console.log("Resultado da multiplicação: " + resultado)

}

   divisão(valor1, valor2) {
    this.valor1 = valor1
    this.valor2 = valor2
    var resultado = this.valor1 / this.valor2;
    console.log("Resultado da divisão: " + resultado)
   }
}

//Criando o objeto 
var calc = new Calculadora();

//Chamando o método de soma
calc.somar(7, 3);  //Resultado da soma 10

calc.multiplicar(10, 5)

calc.divisão(100, 5);

