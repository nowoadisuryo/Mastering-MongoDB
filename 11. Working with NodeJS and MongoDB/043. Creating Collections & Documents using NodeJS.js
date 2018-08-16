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
var url = "mongodb://root:password@localhost:27017/marketkoin_kyc/";

//Connecting to mongodb.
MongoClient.connect(url, opts, function(err, db) {
  //Assert will return error detail if error happen, else return null.
  assert.equal(null, err);

  //DB.
  var dbo = db.db("marketkoin_kyc");

  //Collection.
  var users = dbo.collection("users");
  var deposit = dbo.collection("deposit");

  //Creating users documents to be inserted.
  var usersArray = [
    {
      _id : 1,
      name : {
        first_name: "Nowo",
        last_name: "Adi Suryo"
      },
      username : "nowoadisryo",
      password : "$2y$10$ly2PXVEnYKPpHHl8jSewgeKwJ4tYIt869IIFV61ENL5mYzR5DoqhS",
      email : "nowoadisuryo@gmail.com",
      age : 19,
      primary_phone_number : "081617728770",
      secondary_phone_number : "080000000000",
      fav_coins : ["Bitcoin", "Etherium"],
      balance : {
        btc : 0.29000238,
        eth : 2.83339021,
        stq : 0,
        vex : 0
      },
      verified : "0",
      verification_code : "0",
      created_at : new Date(),
      updated_at : ""
    },
    {
      _id : 2,
      name : {
        first_name: "Meow",
        last_name: "Ed"
      },
      username : "meowed",
      password : "$2y$10$ly2PXVEnYKPpHHl8jSewgeKwJ4tYIt869IIFV61ENL5mYzR5DoqhS",
      email : "meowed@gmail.com",
      age : 19,
      primary_phone_number : "081617728771",
      secondary_phone_number : "080000000001",
      fav_coins : ["Storiqa", "Vexanium"],
      balance : {
        btc : 0,
        eth : 0,
        stq : 999.29000238,
        vex : 300.83339021
      },
      verified : "0",
      verification_code : "0",
      created_at : new Date(),
      updated_at : ""
    },
  ];

  var depositArray = [
    {
      _id : 1,
      user_id : 1,
      amount : 200000,
      channel : "BCA",
      transfer_method : "BCA Mobile",
      account_number : "077948338",
      payment_method : "Transfer Online to VA",
      status : "OK",
      created_at : new Date()
    },
    {
      _id : 2,
      user_id : 1,
      amount : 500000,
      channel : "BCA",
      transfer_method : "BCA Mobile",
      account_number : "077948338",
      payment_method : "Transfer Online to VA",
      status : "OK",
      created_at : new Date()
    },
    {
      _id : 3,
      user_id : 1,
      amount : 500000,
      channel : "BCA",
      transfer_method : "BCA Mobile",
      account_number : "077948338",
      payment_method : "Transfer Online to VA",
      status : "PENDING",
      created_at : new Date()
    },
  ];

  users.insertMany(usersArray, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      console.log("Documents inserted", result.length, result);
    }
  });

  deposit.insertMany(depositArray, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      console.log("Documents inserted", result.length, result);
    }
  });

  //If connected to mongodb, will print this massage.
  console.log("Connected to MongoDB");

  //Close the connections.
  db.close();
});
