const express = require("express");
const generator = require("generate-password");
const getPasswordStrength = require("password-strength-calc");
const morgan = require("morgan");
const app = express();
app.use(morgan("tiny"));

app.get("/password", (req, res) => {
  let Options;

  if (Object.keys(req.query).length === 0) {
    Options = {
      length: 15,
      symbols: true,
      numbers: true,
      lowercase: true,
      uppercase: true,
      excludeSimilarCharacters: true,
      exclude: "",
    };
  } else {
    Options = {
      length: req.query.length || 15,
      symbols: true, // Need to have atleast one apart from length
      numbers: req.query.numbers ? true : false,
      lowercase: req.query.lowercase ? true : false,
      uppercase: req.query.uppercase ? true : false,
      excludeSimilarCharacters: req.query.excludesimilarcharacters
        ? true
        : false,
      exclude: req.query.excludeCharacters || "",
    };
  }

  let generatedPassword;
  try {
    generatedPassword = generator.generate(Options);
  } catch (error) {
    res.send("Select atleast one option!");
  }

  const response = {
    generatedPassword,
    "Your password Strength": getPasswordStrength(generatedPassword),
  };
  res.json(response);
});

app.listen(process.env.PORT || 3000, () => "Server up");
