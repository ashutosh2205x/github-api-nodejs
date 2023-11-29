const express = require("express");
const cors = require("cors");
const middlewares = require("./middlewares/git.mw");
const router = require("./routes/git.user.routes");

const app = express();
const PORT = 8082;
app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use("/", router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
