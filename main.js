const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
    res.send("Minha API")
})

app.get("/:city", async (req, res) => {
  const response = await verificaCidade(req.params.city);
  const { coord, base, wind } = response.data;
  res.json(response.data);
});

const verificaCidade = async cidade => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=2a71a67802f9b92c2d50796af7a01a0e&lang=pt&units=metric`
  );
  return response;
};

app.listen(3000);
