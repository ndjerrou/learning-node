// Exercice : find a module whichs allows us to create and write inside a file
const fs = require("fs");
const path = require("path");

const content = "Ecrit le 31 Mars 2022 par Nissim";

fs.writeFileSync(__dirname + "/monfichier.js", content, "utf-8"); //code synchrone donc bloquant

const destFolder = path.join(__dirname, "../myfiles");

const start = Date.now();
fs.writeFile(destFolder + "/myfile.txt", content, (err, data) => {
  // code asynchrone donc non bloquant
  if (err) {
    console.log(err);
    console.log(data);
  }
  console.log("File 1 : ecriture du fichier terminé...");
  console.log("Finished 1 : ", Date.now() - start);
});
fs.writeFile(destFolder + "/myfile2.txt", content, (err, data) => {
  // code asynchrone donc non bloquant
  if (err) {
    console.log(err);
    console.log(data);
  }
  console.log("File 2 : ecriture du fichier terminé...");
  console.log("Finished 2 : ", Date.now() - start);
});
fs.writeFile(destFolder + "/myfile3.txt", content, (err, data) => {
  // code asynchrone donc non bloquant
  if (err) {
    console.log(err);
    console.log(data);
  }
  console.log("File 3 : ecriture du fichier terminé...");
  console.log("Finished 3 : ", Date.now() - start);
});
fs.writeFile(destFolder + "/myfile4.txt", content, (err, data) => {
  // code asynchrone donc non bloquant
  if (err) {
    console.log(err);
    console.log(data);
  }
  console.log("File 4 : ecriture du fichier terminé...");
  console.log("Finished 4 : ", Date.now() - start);
});

console.log("apès file sync");
