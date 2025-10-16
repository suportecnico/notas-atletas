let atletas = [ // Notas fornecidas pelos jurados
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

class Classificacao {
  constructor(atleta, notas) {
    this.atleta = atleta;
    this.notas = notas;
    this.media = this.calculaMedia();
    this.string = this.converteParaString();
  }
  calculaMedia() {
      let soma = this.notas.slice(1, 4).reduce(function(acc, atual){
        return acc + atual;
    }, 0);
    let media = soma / this.notas.slice(1, 4).length;
    return media.toFixed(5);
  }
  converteParaString() {
    return `
    <p><strong>Atleta:</strong> ${this.atleta}</p> 
    <p><strong>Notas Obtidas:</strong> ${this.notas}</p>
    <p><strong>Média Válida:</strong> ${this.media}</P>
    `;
  }
  

}
let atleta1 = new Classificacao(atletas[0].nome, atletas[0].notas);
let atleta2 = new Classificacao(atletas[1].nome, atletas[1].notas);
let atleta3 = new Classificacao(atletas[2].nome, atletas[2].notas);
let atleta4 = new Classificacao(atletas[3].nome, atletas[3].notas);

console.log(atleta1.string);

function exibirResultado1() {
  document.getElementById("resultado").innerHTML = `${atleta1.string}`;;
  return document.getElementById("resultado").innerHTML;
}
function exibirResultado2() {
  document.getElementById("resultado").innerHTML = `${atleta2.string}`;;
  return document.getElementById("resultado").innerHTML;
}
function exibirResultado3() {
  document.getElementById("resultado").innerHTML = `${atleta3.string}`;;
  return document.getElementById("resultado").innerHTML;
}
function exibirResultado4() {
  document.getElementById("resultado").innerHTML = `${atleta4.string}`;;
  return document.getElementById("resultado").innerHTML;
}

