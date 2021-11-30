import express from "express";
import gameRouter from "./routers/game_router";
import userRouter from "./routers/user_router"

const port: number = 8080;
const app = express();

//Routers
app.use(userRouter);
app.use(gameRouter);

// Static files
const path = require('path')
app.use('/static/text', express.static(path.join(__dirname, 'static')))

app.listen(port, () => {
  console.log(`HTTP server started on port ${ port }.`);
});