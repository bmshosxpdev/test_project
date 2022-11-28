const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();
const line = require("@line/bot-sdk");
const config = {
  channelAccessToken:
    "+UOhBXc5P9+mSis3vxIKSX5+231UALAgIgb2Nea9kdQXobDqa2M3mmoHm9Iys27rJLGNFr05mrAoQRN0FxqC0D4JEYQATDaCabopFZbvz9tmPob5mHFx40pYSijOiFm44tduY609yllHXh8oREEFNAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "72b193b519cba5587bf25acd8b08c524",
};

dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json()); /* bodyParser.json() is deprecated */
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to BMS Webhook.",
  });
});

app.post("/webhook", line.middleware(config), (req, res) => {
  console.log(req.body.events);

  if (userid.indexOf(req.body.events[0].source.userId) < 0) {
    userid.push(req.body.events[0].source.userId);
  }
  console.log(userid);
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

var getStatus = function (req, resp) {
  return resp.json({ status: "ok" }).send();
};

let PORT = process.env.PORT || 6060;
// const PORT = 8801;
//  process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
