/*
 * To start project creation we can use "npm init" command in the command prompt.
 * After running "npm init" command, there will be "package.json"  file
 * in our project directory. "package.json" file will containing all the details
 * about the project such as project description, modules that used in the project,
 * etc.
 */

 //First we load mongodb package and then we load assert package.
 //Assert is used for internal testing by nodeJS.
 var MongoClient = require("mongodb").MongoClient;
 var assert = require("assert");

 //URL for connecting to mongodb.
 var url = "mongodb://127.0.0.1:27017/marketkoin_kyc";

 //Connecting to mongodb.
 MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
   //Assert will return error if error, else return null.
   assert.equal(null, err);

   //If connected to mongodb, will print this massage.
   console.log("Connected to MongoDB");

   //Close the connections.
   db.close();
 });
