let fs = require("fs");
const request = require("request");

module.exports = {
  pwd: function () {
    // Código pwd
    return process.argv[1];
  },
  date: function () {
    let date = new Date();
    return `${date}`;
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      let response = ""
      files.forEach(function (file) {
       response += file + "\n"
      });
      process.stdout.write(response);
      process.stdout.write("\nprompt > ");
    });
  },
  //Es similar a un console.log
  echo: (string) => {
    return string;
  },
  cat: (txt) => {
    fs.readFile(txt, "utf8", function (err, data) {
      if (err) console.log("nombre de archivo inexistente");
      return data;
    });
  },
  head: (txt, n = 5) => {
    fs.readFile(txt, "utf8", function (err, data) {
      if (err) console.log("nombre de archivo inexistente");
      let lineas = data.split("\n");
      for (let i = 0; i < n; i++) {
        if (i < lineas.length) return lineas[i];
      }
    });
  },
  tail: (txt, n = 5) => {
    fs.readFile(txt, "utf8", function (err, data) {
      let lineas = data.split("\n");
      if (err) console.log("nombre de archivo inexistente");
      for (let i = 0; i < n; i++) {
        if (i < lineas.length) return lineas[lineas.length - 1 - i];
      }
    });
  },
  wc: (txt, n = 5) => {
    fs.readFile(txt, "utf8", function (err, data) {
      if (err) console.log(err);
      let lineas = data.split("\n");
      console.log(lineas.length);
      if (err) return "nombre de archivo inexistente";
    });
  },
  done: (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
  },
};
