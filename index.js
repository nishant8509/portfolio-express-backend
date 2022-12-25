const express = require("express");
const app = express();
const educationRoutes = require("./routes/EducationRoutes");
const experienceRoutes = require("./routes/ExperienceRoutes");
const languageRoutes = require("./routes/LanguageRoutes");
const projetRoutes = require("./routes/ProjetRoutes");
const skillRoutes = require("./routes/SkillRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const userRouter = require("./routes/userRoutes"); 
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/educations", educationRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);
app.use("/projects", projetRoutes);
app.use("/skills", skillRoutes);
app.use("/messages", messageRoutes);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) =>{
    res.send("Notes API From CheezyCode");
});

const PORT = process.env.PORT || 5000;

mongoose.set("useUnifiedTopology", true);


mongoose.connect(process.env.MONGO_URL , { useNewUrlParser: true })
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


