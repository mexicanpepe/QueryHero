import express from "express";
import cors from "cors";
import generate from "./generate.js"

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("hello world from our API")
})

app.post("/generate",  async(req, res) => {
  const inputDescription = req.body.inputDescription;

  try{
    const aiResponse = await generate(inputDescription)
    res.json({ response: aiResponse })

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error")
  }
})

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})
