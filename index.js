const express = require('express');
const cors = require('cors');
const app = express();

app.arguments(express.json());
app.arguments(cors());


app
    .route("/bfhl")
    .get((req,res)=>{
        res.status(200).json({operation_code:1});
    })
    .post((req, res)=>{
        const data = req.body.data||[];
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
              is_success: false,
              message: "Invalid input format."
            })}
        const numbers = [];
        const alphabets = [];
        let highestLowerCase = "";

        for (const item of data) {
            if (!isNaN(item)) {
              numbers.push(item);
            } else if (item.length === 1 && isNaN(item)) {
              alphabets.push(item);
              if (
                /[a-z]/.test(item) && item > highestLowerCase
              ) {
                highestLowerCase = item;
              }
            }
          }
          res.json({
            is_success: true,
            user_id: "SuhaniGujrati21BCE0903",
            email: "suhani.gujrati2021@vitstudent.ac.in",
            roll_number: "21BCE0903",
            numbers: numbers,
            alphabets: alphabets,
            highestLowerCase: highestLowerCase? [highestLowerCase]:[],
          })
    })

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});
