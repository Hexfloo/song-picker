require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("public", path.join(__dirname, "public"));

//mongoose connection
const mongodbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@song-picker-mor-stav.8tl0d.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongodbURI || "mongodb://localhost:27017/songpickerDB")
    .then(function () {
        console.log("Mongo connection open")
    })
    .catch(function (err) {
        console.log("Mongo connection faild");
        console.log(err);
    })

//songpicker schema
const songPickerSchema = new mongoose.Schema({
    song: {
        type: String,
        required: true
    }
})
const SongSelection = mongoose.model("Selection", songPickerSchema);

//routes
app.get("/", function (req, res) {
    res.render("home");
})

app.get("/songpicker", function (req, res) {
    res.render("songpicker");
})

app.post("/thanks", async function (req, res) {
    let chosenSong = req.body;
    let selection = new SongSelection(chosenSong);
    await selection.save();
    res.render("thanks");
})

app.get("/thanks", function (req, res) {
    res.render("thanks")
})

app.get("/dj", async function (req, res) {
    const song1Arr = await SongSelection.find({ song: "song1" });
    const song2Arr = await SongSelection.find({ song: "song2" });
    const song3Arr = await SongSelection.find({ song: "song3" });
    res.render("dj", { song1Arr, song2Arr, song3Arr });
})

app.listen(process.env.PORT || 8080, function () {
    console.log("Serving on port")
})