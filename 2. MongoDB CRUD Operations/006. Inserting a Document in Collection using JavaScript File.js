/*
 * We can use "load('path/to/js/file')" function in the mongo shell, to run
 * a JavaScript file containing mongodb command for creating a document.
 */

db.users.insert({
   username : "nowoadisuryo",
   password : "$2y$10$ly2PXVEnYKPpHHl8jSewgeKwJ4tYIt869IIFV61ENL5mYzR5DoqhS",
   email : "nowoadisuryo@gmail.com",
   primary_phone_number : "081617728770",
   secondary_phone_number : "080000000000",
   verified : "0",
   verification_code : "0",
   created_at : new Date(),
   updated_at : ""
});

db.users.insert({
   username : "meowed",
   password : "$2y$10$ly2PXVEnYKPpHHl8jSewgeKwJ4tYIt869IIFV61ENL5mYzR5DoqhS",
   email : "meowed@gmail.com",
   primary_phone_number : "081617728771",
   secondary_phone_number : "080000000001",
   verified : "0",
   verification_code : "0",
   created_at : new Date(),
   updated_at : ""
});
