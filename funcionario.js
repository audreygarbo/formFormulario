class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando atualmente.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
}

document.getElementById('formFuncionario').addEventListener('submit', function(event) {
    event.preventDefault();

    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value || null;
        const linguagem = document.getElementById('linguagem').value || null;

        if (!nome || !idade || !cargo) {
            throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
        }

        let funcionario;

        if (cargo === "Gerente") {
            if (!departamento) {
                throw new Error("O campo 'Departamento' deve ser preenchido para um Gerente.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) {
                throw new Error("O campo 'Linguagem de Programação' deve ser preenchido para um Desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = funcionario.seApresentar() + '<br>' + funcionario.trabalhar();

        if (cargo === "Gerente") {
            resultadoDiv.innerHTML += '<br>' + funcionario.gerenciar();
        } else if (cargo === "Desenvolvedor") {
            resultadoDiv.innerHTML += '<br>' + funcionario.programar();
        }

    } catch (error) {
        exibirErro(error.message);
    }
});
