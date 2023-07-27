import express from "express";
import cors from "cors";
import generate from "./generate.js"
import pool from "./DB/db.js"

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("hello world from our API")
})

app.post("/generate", async (req, res) => {
  const inputDescription = req.body.inputDescription;
  const { userName, email, photoUrl, db } = req.body;

  try {
    const aiResponse = await generate(inputDescription);

    const client = await pool.connect();
    try {
      await client.query('BEGIN');


      const userQuery = 'INSERT INTO users (userName, email, photo_Url) VALUES ($1, $2, $3) RETURNING user_id';
      const userValues = [userName, email, photoUrl];
      const { rows: userRows } = await client.query(userQuery, userValues);

      const questionQuery = 'INSERT INTO questions (user_id, question_text) VALUES ($1, $2)';
      const questionValues = [userRows[0].user_id, inputDescription];
      await client.query(questionQuery, questionValues);

      const queryQuery = 'INSERT INTO queries (user_id, query_text, db) VALUES ($1, $2, $3)';
      const queryValues = [userRows[0].user_id, aiResponse, db];
      await client.query(queryQuery, queryValues);

      await client.query('COMMIT');
      res.json({ response: aiResponse });
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error storing data in the database:', error);
      res.status(500).send('Internal Server Error');
    } finally {
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})
