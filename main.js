const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,OPTIONS,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Minha API");
});

app.get("/:city", async (req, res) => {
  const response = await verificaCidade(req.params.city);
  const { coord, base, wind } = response.data;
  res.json(response.data);
});

app.get("/:city/tela", async (req, res) => {
  const response = await verificaCidade(req.params.city);

  res.send(`
        <h1>${response.data.weather[0].description}</h1>
    `);
});

const verificaCidade = async cidade => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=2a71a67802f9b92c2d50796af7a01a0e&lang=pt&units=metric`
  );
  return response;
};

app.listen(process.env.PORT || 3030);
