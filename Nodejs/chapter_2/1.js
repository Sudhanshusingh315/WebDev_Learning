const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("./index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log("server started ");
  if (req.url.startsWith("/product")) {
    let id = req.url.split("/")[2];
    let product= products.find((p) => p.id === +id);


    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = file
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedIndex);
    return;
  }
  switch (req.url) {
    case "/data":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/meow":
      res.writeHead(404, "bad request");
      res.end();
      break;
    default:
      res.end("this is defatult case");
      break;
  }
});

server.listen(8080);
