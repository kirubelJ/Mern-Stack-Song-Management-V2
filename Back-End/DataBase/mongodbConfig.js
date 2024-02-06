const mongoose = require("mongoose");
require("dotenv").config();
// //configure mongoose to connect mangodb Atlas not local
const mdbUrl = process.env.DATABASE_URL;
// //params
// const conneectionParams = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// //

//   mongoose
//     .connect(mdbUrl, conneectionParams)
//     .then(() => {
//       console.log("mangodb atlas connected");
//     })
//     .catch((e) => {
//       console.log("Error:", "");
//     });

mongoose.connect(mdbUrl);

module.exports = { mongoose };
