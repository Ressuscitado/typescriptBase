//Getters e Setters são maneiras de fornecer acesso aos valores de um objeto.

//GET
class Quadrado55 {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado55() {
        return this._largura * this._altura;
    }
}
console.log(new Quadrado55().calcularQuadrado55);

//SET
class Pessoa55 {
    nome!: string;

    
    retornarNome55(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}
const pessoa55 = new Pessoa55();
pessoa55.retornarNome55('Igor Artus');
console.log(pessoa55.nome);

//Get mais extenso
class Estudante55 {
    private _nome = 'Igor';
    private _semester!: number;
    private _curso!: string;

    public get nomeEstudante() {
        return this._nome;
    }
}
const estudante55 = new Estudante55();
console.log(estudante55.nomeEstudante);

//Ex set mais extenso

class Estudante55_2 {
    private _nome: string;
    private _semester: number;
    private _curso: string;

    constructor(nomeEstudante: string, semesterEstudante: number, cursoEstudante: string) {
        this._nome = nomeEstudante;
        this._semester = semesterEstudante;
        this._curso = cursoEstudante;
    }
    public get cursos() {
        return this._curso;
    }
    public set cursos(setCurso: string) {
        this._curso = setCurso;
    }
}

const estudante55_2 = new Estudante55_2('Igor', 1, 'contabilidade');
console.log(estudante55_2);
estudante55_2.cursos = 'Engenharia de Software';//usando o set (cursos)
console.log(estudante55_2);