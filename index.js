const express = require("express")
const app = express();
console.dir(app);

let port = 8080;
app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log("request received");
//     res.send({name:"vishwajeet",role:"developer"})
// });

//GET METHOD
// app.get('/credentials',(req,res) => {
//     res.send({
//         Email:"vishwajeet.deshmane@nmaiet.edu.in",
//         password:"uidiot"
//     });
// });
// app.get('*',(req,res) => {
//     res.send("This path/route doesn't exist");
// });

// //POST METHOD
// app.post('/post',(req,res) => {
//     res.send("Youu send a post a request");
// });
app.get("/:id/:username", (req, res) => {
    console.log(req.params);
    res.send(`This account having user_id: ${req.params.id} belongs to ${req.params.username}`);
});