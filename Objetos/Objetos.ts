let objetos: object

objetos = {
    name: "Leo",
    age: 19
}

let objetos2: Record<string,string>

objetos2 = {
    name: "Leo",
    age: "19"
}

let objetos3: {name: string, age: number, ehLegal: boolean}

objetos3 = {
    name: "Leo",
    age: 19,
    ehLegal: true
}