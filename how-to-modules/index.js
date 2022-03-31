// module index.js - where do require and module come from ??

// definir 3 autres modules : soustraction, division, multiplication

// récupérer en ligne de commande un type d'opération - search on google

// charger le bon module nécessaire au déroulement de l'opération

// logger le résultat

const a = process.argv[3];
const b = process.argv[4];

switch (process.argv[2]) {
  case "sum": {
    const operation = require("./sum");
    console.log("Addition : ");
    operation.sum(a, b);

    break;
  }
  case "minus": {
    const minus = require("./minus");
    console.log("Soustraction : ");
    console.log(minus(a, b));
    break;
  }
  case "product": {
    const product = require("./product");

    console.log("Produit : ");
    console.log(product(a, b));

    break;
  }
  case "divide": {
    const divide = require("./divide");

    console.log("Division : ");
    console.log(divide(a, b));

    break;
  }
  default: {
    console.error("Merci de choisir la bonne opération !!!");
    break;
  }
}
