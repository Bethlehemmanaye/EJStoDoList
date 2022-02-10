// adding express and bodyparser
const express_request = require("express");
const bodyParser = require("body-parser");

//Creating the first get route on home route
const app = express_request();

// 3rd pass this list to the ejs li variable=newListItem then for loop
let items = ["Reading", "Study", "Tutorial"];
let workItems = [];

// tells our app which is generated using express to ejs as its view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_request.static("public"))

// // creating the first get route on the home route,it just sends the browser hello world when the user try to access the home route
app.get("/", function(req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    // 2nd render, newListItems=items
    res.render("list", { listTilte: day, newListItems: items });
// load up 
});

app.post("/", function(req, res) {
    // 6th input we text to the text field
    
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);

        res.redirect("/");
    }
});
app.get("/work", function(req, res) {
    res.render("list", { listTilte: "Work List", newListItems: workItems });
});
app.get("/about", function(req, res) {
    res.render("about");
});


// writing the app listen to port 3000
app.listen(3000, function() {
    console.log("Server started on port 3000")
});