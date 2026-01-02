const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let users = 0;
wss.on("connection", (ws, req) => {
  console.log(`number of connection ${++users}`);

  // Send something immediately
  ws.send("Welcome to the WebSocket server!");

  // When client sends a message
  ws.on("message", (message, isBinary) => {
    console.log(`Recieved: ${message}`);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: isBinary });
      }
    });
  });

  // When client disconnects
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Handle errors
  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});

server.listen(8080, () => {
  console.log("server listening at port 8080");
});
