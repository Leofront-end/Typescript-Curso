interface Pessoa2<T = Aluno2> {
    nome: string;
    idade: number;
    profissao: T;
}

type Aluno2 = {
    matricula: string;
}

interface Engenheiro {
    crea: string;
}

interface Medico {
    crm: string;
}

let Medico: Pessoa2<Medico>;
let aluno2: Pessoa2;
let engenheiro: Pessoa2<Engenheiro>;

