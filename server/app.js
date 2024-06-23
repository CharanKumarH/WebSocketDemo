import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 7025;

const server = app.listen(port, () => {
  console.log("server is loading.............");
});

const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
  ws.on("message", data => {
    console.log("data from client %s", data);
    ws.send("thanks buddy!");
  });
});
