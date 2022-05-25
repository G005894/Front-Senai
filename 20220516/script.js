/* alert("Seja bem vindo");
prompt("Digite o seu nome")
resp = confirm("Será que vai chover?")
var a, b
a = 5
b = "5KgdeAcucar"
document.write('O valor da variável "a" é: ' + a)
document.write('<p>' + 'O valor da variável "b" é: ' + b + '</p>') // 'p' é utilizado aqui para pular linha
document.write('<p>' + 'O valor da variável "a" dividido por 2 é: ' + a/2 + '</p>')
document.write('<p>' + 'O valor da variável "b" dividido por 2 é :' + b/2 + '</p>')

var a, inteiro, flutuante
a = '45.78KgdeAcucar'
inteiro = parseInt(a)
flutuante = parseFloat(a)
document.write('O valor da variável "a" é: ' + a)
document.write('<p>' + 'O valor numérico inteiro da variável "a" é: ' + inteiro + '</p>') // 'p' é utilizado aqui para pular linha
document.write('<p>' + 'O valor da variável "a" dividido por 2 é: ' + inteiro/2 + '</p>')
document.write('<p>' + 'O valor decimal da variável é: ' + flutuante + '</p>')
document.write('<p>' + 'O valor da variável "flutuante" dividido por 2 é: ' + flutuante/2 + '</p>')


var a, b, c
a = 'Olá, pessoal! '
b = 'Sejam bem vindos ao curso de Javascript.'
c = a + b
document.write(c)


a = 6, b = 3, c = 1
document.write(a>b) && (b>c) // a é maior que b e e é maior que c. O retorno de operadores lógicos é booleano

a = 6, b = 3, c = 1to
alert(a>b) || (b==c) // a é maior que b e e é maior que c. O retorno de operadores lógicos é booleano

alert(a!=b)

*/



hoje = new Date()
xDia = hoje.getDay()
diaSemana = new Array(7)
diaSemana[0] = 'domingo'
diaSemana[1] = 'Segunda-feira'
diaSemana[2] = 'Terça-feira'
diaSemana[3] = 'Quarta-feira'
diaSemana[4] = 'Quinta-feira'
diaSemana[5] = 'Sexta-feira'
diaSemana[6] = 'Sábado'
prato = new Array(7)
prato[0] = 'Macarronada!'
prato[1] = 'Frango a parmeggiana!'
prato[2] = 'Bife a rolê!'
prato[3] = 'Filé de Merluza!'
prato[4] = 'Sopa de letrinhas!'
prato[5] = 'Ceaser Salad!'
prato[6] = 'Feijoada!'
preco = new Array(7)
preco[0] = 21.90
preco[1] = 17.90
preco[2] = 19.90
preco[3] = 16.90
preco[4] = 15.90
preco[5] = 18.90
preco[6] = 20.90
n1 = preco[xDia]
document.write('O número do dia da semana é: ' + '' + (xDia + 1))
document.write('<p> ' + 'Hoje é: ' + diaSemana[xDia] + ' , dia de ' + '<b>' + prato[xDia] + '</b>')
document.write('<p> '+ ' Experimente este delicioso prato por apenas ' + '<b>' + n1.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})) 
document.write('<p>' + hoje)
document.write('<p>' + xDia)


/*
a = 5
alert(++ a + 2) soma 1 ao valor de "a" antes de efetuar a expressão
alert('a = '  + a)

a = 5
alert(a ++ + 2)
alert('a = ' + a)

*/
/*
a = 5
alert(a -- + 2)
alert('a = ' + a)



document.write('<p><b>' + 'Usando o método toUpperCase ' + '</p></b>')
A = new String('Olá, pessoal! ')
b = new String('Sejam bem vindos ao curso de Javascript.')
document.write(A.toUpperCase())
document.write(b.toLowerCase())
document.write('<p><b>' + 'você poderá usar ' + '</p></b>')
document.write('<p><b>' + A.toUpperCase() + b.toLowerCase() + '</p></b>')
document.write(A.toLowerCase())
document.write(b.toLowerCase())
document.write('<p><b>' + 'você poderá usar: ' + '</p></b>')
document.write('<p><b>' + A.toLowerCase() + b.toLowerCase() + '</p>')

*/
