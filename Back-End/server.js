const express = require("express");
const app = express();
const port = 3000;
const { router } = require("./routers/router");

//
const { mongoose } = require("./DataBase/mongodbConfig");
//
mongoose;

// app.use("/", (req, res, next) => {
//   res.send("Mern Stack Restful api service songs management");
//   next();
// });

//middlewares
//meddile_wares
app.use(express.json()); // to accespt json
app.use(express.urlencoded({ extended: false }));
app.use("/Songs", router);
//

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
