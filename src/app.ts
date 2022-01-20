import express from "express"


const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.post("/api/data", (req, res) => {
    console.log(req.body);

    return res.sendStatus(200)
})

app.all("/api/all", (req, res) => {
    return res.sendStatus(200);
})

app.listen(3002, () => {
    console.log("Application listening at http://localhost:3002")
})
