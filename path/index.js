const divide = require("../how-to-modules/divide"); // Load our own modules (we provide a relative path)

const path = require("path"); // Load native modules
// const path = require("express"); // Load express module installed by ourselves

const result = path.parse(__filename);
console.log(result.ext);

// Exercice : find a module whichs allows us to create and write inside a file
