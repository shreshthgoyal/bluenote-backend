require("./configs/dotenv");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/note");
const client = require("./configs/db");
const helmet = require("helmet");
const compression = require('compression')


const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());


const port = process.env.PORT || 5000;

  app.get("/" , (req, res) => {
      res.status(200).send("Hey It is working!");
  })

  app.use("/auth", authRoutes);
  app.use("/note", noteRoutes);

  
client.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to database!");
});


  app.listen(port ,()=>{
      console.log(`Server is running on port ${port}`);
  })
  