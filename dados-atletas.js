class Atleta {
    constructor (nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        let descricaoCategoria = '';
        if (this.idade >= 9 && this.idade <= 11) {
            descricaoCategoria = 'Categoria: Infantil'
        } else if (this.idade == 12 || this.idade == 13) {
            descricaoCategoria = 'Categoria: Juvenil'
        } else if (this.idade == 14 || this.idade == 15) {
            descricaoCategoria = 'Categoria: Intermediário'
        } else if (this.idade >= 16 || this.idade <= 30) {
            descricaoCategoria = 'Categoria: Adulto'
        } else {
            descricaoCategoria = 'Sem categoria: demais idades';
        }
        return descricaoCategoria
    }

    calculaIMC() {
        return (this.peso/(this.altura ** 2))
    }

    calculaMediaValida() {
        let somaNotas = 0;
        let tempNotas = this.notas;
        tempNotas = tempNotas.sort((a,b) => a - b).slice(1,4);
        tempNotas.forEach((nota) => {
            somaNotas = somaNotas + nota;
        });
        return (somaNotas/(tempNotas.length));
    }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`;
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }

    obtemAlturaAtleta() {
        return `Altura: ${this.altura}`;
    }

    obtemNotasAtleta() {
        return `Notas: ${this.notas.join(',')}`;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`;
    }

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());