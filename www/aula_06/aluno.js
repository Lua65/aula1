class Aluno {
    nome;
    idade;
    curso;

    Alunoinfo(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
        console.log("Nome do aluno: " + this.nome)
        console.log("Idade do aluno: " + this.idade)
        console.log("Curso: " + this.curso)
    }
}

var Aluno1 = new Aluno()
Aluno1.Alunoinfo("Luana de Andrade", 18,"Programador Back-End")

var Aluno2 = new Aluno()
Aluno2.Alunoinfo("Emanoella", 16, "Admnistração")
