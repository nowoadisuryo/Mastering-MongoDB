/*
 * For creating custom "_id" value we can specify the value of "_id" with
 * value of other keys.
 */

 db.users.insert({
   _id : 001,
   name : {
     first_name: "Joko",
     last_name: "Juropo"
   },
   username : "jokobigman",
   password : "$2y$10$ly2PXVEnYKPpHHl8jSewgeKwJ4tYIt869IIFV61ENL5mYzR5DoqhS",
   email : "jokobigman@gmail.com",
   age : 19,
   primary_phone_number : "081617738770",
   secondary_phone_number : "080000200000",
   fav_coins : ["Bitcoin", "Etherium"],
   verified : "0",
   verification_code : "0",
   created_at : new Date(),
   updated_at : ""
 });
