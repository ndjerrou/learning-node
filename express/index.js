const express = require("express");

const app = express();

app.get("", (req, res) => {
  //route handler
  console.log(res);
  //   res.send("Welcome to my website great user");

  const template = `
  <h1>Welcome to my website great user</h1>
  <div class="infos">
        <h2>Quel âge avez-vous ?</h2>
        <input type="range" name="age" id="age" />
  </div>
  `;

  //   res.send(template);

  res.send({ name: "Nissim", age: 19 });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
