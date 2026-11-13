import express from 'express';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.post("/api/v1/quiz", (req, res) => {
  const answer = req.body.answer;
  if (answer === "2") {
    res.redirect("/correct.html");
  } else {
    res.redirect("/wrong.html");
  }
  res.send(answer);
});

app.get("/api/v1/users", (req, res) => {
  res.send({
    name:"Mike",
    age:30
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
