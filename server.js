const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes");

const server = express();
const PORT = process.env.PORT || 10000;

dotenv.config();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

server.listen(PORT, () => {
  console.log(`KevinMoeMyintMyat API listening on port ${PORT}`);
});

server.use(router);
