import Express, { Request, Response } from "express";

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(8000, () => {
  console.log("Http Server Running on Port 8000");
});
