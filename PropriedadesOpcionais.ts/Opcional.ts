type Pessoas = {
    nome: string;
    idade: number;
    carro?: string;
}

type Alunos = Pessoas & {
    curso: string;
    IRA: number;
}

let alunos: Alunos

alunos = {
    nome: "Leo",
    idade:19,
    curso: "ADS",
    IRA: 5,
    carro: "Teste"
}