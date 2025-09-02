// interface Pessoa {
//     nome: string;
//     idade: number
// }

// interface Aluno extends Pessoa {
//     curso: string;
//     IRA: number;
// }

// let Aluno: Aluno

// Em Type

type Pessoa = {
    nome: string;
    idade: number
}

type Aluno = Pessoa & {
    curso: string;
    IRA: number;
}