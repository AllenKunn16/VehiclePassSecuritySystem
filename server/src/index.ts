import { $log, ServerLoader } from "@tsed/common";
import { Server } from "./server";
// import express = require("express");
// import cors = require("cors");
// import session from "express-session";
// import connectMongo from "connect-mongo";
// import mongoose from "mongoose";
// const mongoInstance = connectMongo(session);

async function bootstrap() {
  try {
    $log.debug("Start server ...");
    const server = await ServerLoader.bootstrap(Server);
    await server.listen();
  } catch (error) {
    $log.error(error);
  }
  // const app = new Server();
  // app.middleware([
  //   express.urlencoded({ extended: true }),
  //   express.json(),
  //   cors({
  //     origin: [
  //       "http://192.168.100.5:19000",
  //       "http://192.168.100.5:3000",
  //       "http://localhost:3000"
  //     ],
  //     methods: ["GET", "POST", "DELETE", "PUT"],
  //     credentials: true,
  //     optionsSuccessStatus: 200
  //   }),
  //   session({
  //     secret: "the-greatest-secret-key",
  //     resave: false,
  //     saveUninitialized: true,
  //     store: new mongoInstance({
  //       mongooseConnection: mongoose.connection
  //     }),
  //     cookie: {
  //       sameSite: true,
  //       secure: false
  //     }
  //   })
  // ]);
  // app.connectMongoDB(
  //   "mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/vehicle-pass-security-system?retryWrites=true&w=majority",
  //   {
  //     useNewUrlParser: true,
  //     useFindAndModify: false,
  //     useCreateIndex: true
  //   }
  // );
  // app.setting([
  //   {
  //     name: "json spaces",
  //     value: 2
  //   }
  // ]);
  // app.start(8000);
}

bootstrap();
