#!/usr/bin/node
const fs = require("fs");

const fileA = fs.readFileSync(process.argv[2], "utf-8", (err) => {
  if (err) throw err;
});
const fileB = fs.readFileSync(process.argv[3], "utf-8", (err) => {
  if (err) throw err;
});

const combinedFile = `${fileA} ${fileB}`;
fs.writeFile(process.argv[4], combinedFile, "utf-8", (err) => {
  if (err) throw err;
});
