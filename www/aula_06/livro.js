class Livro{
    titulo;
    autor;

 exibirInfo(titulo, autor ) {
    this.titulo = titulo
    this.autor = autor
    console.log("Titulo do livro: " + this.titulo)
    console.log("Nome do autor: " + this.autor)
    }
}

var meuLivro1 = new Livro()
meuLivro1.exibirInfo("É assim que acaba", "Colleen Hoover" )

var meuLivro2 = new Livro()
meuLivro2.exibirInfo("Quebre seu sapatinho de cristal", "Amanda Lovelace")

var meuLivro3 = new Livro()
meuLivro3.exibirInfo("Quem é Você Alasca?", "Jhon Green")