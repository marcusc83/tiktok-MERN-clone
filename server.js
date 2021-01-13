import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./DBModel.js";
import Cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares

app.use(Cors());

app.use(express.json())
//dbConfig
const connection_url = <yourdbConncection here>;
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//Server API Endpoints
app.get("/" , (req, res) => res.status(200).send("hello marcus"));

app.get("/v1/posts" , (req, res) => res.status(200).send(Data));

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get("/v2/posts", (req, res) => {
    
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

//listner
app.listen(port, () => console.log("listening on localhost:" + port));
