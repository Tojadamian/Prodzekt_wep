const express = require("express");
const app = express();
const port = 3000;
const { appendFile } = require("fs/promises");



function NameData() {
  const dateObj = new Date();
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();

  // Using padded values, so that 2023/1/7 becomes 2023_01_07
  const pMonth        = month.toString().padStart(2,"0");
  const pDay          = day.toString().padStart(2,"0");
  const newPaddedDate = `${year}_${pMonth}_${pDay}`;
  return "data/" + newPaddedDate + ".txt";
}

app.use(express.raw({ type:"*/*" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  res.send(req.body)
  console.log(req.body.toString())
  await appendFile(NameData(),new Date().toISOString() +" " + req.body + "\n")
  // await appendFile(fileName, "\n")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});