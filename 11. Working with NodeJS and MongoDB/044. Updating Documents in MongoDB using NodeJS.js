//First we load mongodb package and then we load assert package.
//Assert is used for internal testing by nodeJS.
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

//Connection option.
var opts = {
  authSource: 'marketkoin_kyc',
  useNewUrlParser: true
}

//URL for connecting to mongodb.
var url = "mongodb://root:password@localhost:27017/";

//Connecting to mongodb.
MongoClient.connect(url, opts, function(err, db) {
  //Assert will return error detail if error happen, else return null.
  assert.equal(null, err);

  //DB.
  var dbo = db.db("marketkoin_kyc");

  //Collection.
  var users = dbo.collection("users");
  var deposit = dbo.collection("deposit");

  //This will update the first_name and will remove the last_name field.
  users.updateOne({_id : 1}, {$set: {name : {first_name : "John"}}}, function(err, numUpdated) {
    if(err) {
      console.log(err);
    } else {
      console.log("Updated Successfully", numUpdated);
    }
  });

  //Close the connections.
  db.close();
});
