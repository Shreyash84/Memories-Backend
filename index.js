//npm modules
 import express from "express";
 import cors from "cors";
 import bodyParser from "body-parser";
 import mongoose from "mongoose";
 import dotenv from "dotenv";
 import 'dotenv/config';

 import postRoutes from "./routes/posts.js";

 const app = express();
 dotenv.config();

 app.use(bodyParser.json({ limit : "30mb", extended : true }));
 app.use(bodyParser.urlencoded({ limit : "30mb", extended : true }));
 app.use(cors());

 app.use("/posts", postRoutes);

 const CONNECTION_URL = process.env.CONNECTION_URL;
 const PORT = process.env.PORT || 5000;

 mongoose.connect( CONNECTION_URL, {useNewURLParser : true, useUnifiedTopology : true})
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
     .catch((error) => console.log(error.message));


