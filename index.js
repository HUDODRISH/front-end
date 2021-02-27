//const { connect } = require("mongodb");
var express = require("express");
var app = express();

var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

app.get("/", function(request, response) {
    mongoClient.connect(url, (err, client) => {
        if (err) throw err;
        var humans = client.db("humans");
        humans.collection("humans").insertOne({
                name: "Vovara",
                age: 56
            },
            function(err, result) {
                console.log(result);
                response.send(result);
            })
    });
})

app.listen(591);