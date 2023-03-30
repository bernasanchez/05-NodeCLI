// Un prompt como output
///console.log(process, Object.keys(process))
const { isUtf8 } = require("buffer");
let fs = require("fs");
let comandos = require("./command");
//Metodos propios de js: mostrar un string (prompt)
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  let palabras = data.toString().split(" ");
  //cmd = comand
  //Se podia poner asi: 
  //let cmd = params[0] (primer comando ingresado)
  //let args = params.slice(1) Este es el argum de la F
  //commands[cmd](args, done) Entra a la F del objeto y la ejecuta

  if (cmd == "pwd") comandos.done(comandos.pwd());

  if (cmd == "date") comandos.done(comandos.date());

  if (cmd == "ls") comandos.ls();

  if (palabras[0] == "cat" || cmd == "cat") {
    if (palabras[1]) {
      palabras[1] = palabras[1].substring(0, palabras[1].length - 1);
      comandos.done(comandos.cat(palabras[1]));
    }
  }
  if (palabras[0] == "head" || cmd == "head") {
    if (palabras[2]) {
      comandos.head(palabras[1], palabras[2]);
    } else if (palabras[1]) {
      comandos.head(palabras[1]);
    }
  }
  if (palabras[0] == "tail" || cmd == "tail") {
    if (palabras[2]) {
      comandos.tail(palabras[1], palabras[2]);
    } else if (palabras[1]) {
      comandos.tail(palabras[1]);
    }
  }
  if (palabras[0] == "wc" || cmd == "wc") {
    palabras[1] = palabras[1].substring(0, palabras[1].length - 1);
    comandos.wc(palabras[1]);
  }
  if (palabras.shift() == "echo") comandos.echo(palabras.join(" "));
});

/*
const startTime = new Date();

setTimeout(function () {
  const endTime = new Date();
  console.log('Time elapsed: ', endTime - startTime, 'ms');
}, 500);

while (new Date() - startTime < 1000) {};*/
