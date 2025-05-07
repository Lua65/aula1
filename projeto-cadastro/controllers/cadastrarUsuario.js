function cadastrarUsuario(nome, idade) {
  if(!nome || !idade) {
        console.log("Erro: Nome ou idade inválidos")
    } else {
    console.log("Usuario cadastrado com sucesso!")
    console.log("Nome: " + nome)
    console.log("Idade: " + idade)
    }
}

module.exports = cadastrarUsuario 