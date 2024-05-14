import express, { Request, Response } from "express";

const app = express();
const port = 5000;

// parser
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.json({ all: "ok" });
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("ok");
});

export { app, port };
