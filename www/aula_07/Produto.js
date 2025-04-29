class Produto {
    nome;
    preco;
    quantidade;

    exibirdetalhes(nome, preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        console.log("nome: " + this.nome)
        console.log("Preço: " + this.preco)
        console.log("Quantidade: " + this.quantidade)
    
    }
    calcularTotal(preco, quantidade){
        this.preco = preco
        this.quantidade = quantidade
        var resultado = this.preco * this.quantidade
        console.log("Valor total: " + resultado)
    }
}
var produto = new Produto
produto.exibirdetalhes("Arroz ", 21, 10)
produto.exibirdetalhes("feijão ", 5, 15)

var calc = new Produto();
calc.calcularTotal(21, 30)
calc.calcularTotal(5, 15)