/*
 * We can use array to store documents and then we can store the documents
 * into mongoDB.
 */
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

db.users.insert(usersArray);
db.deposit.insert(depositArray);
