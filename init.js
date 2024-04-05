const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
 
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let  allChats = [
    {
        from:"neha",
     to:"preeti",
     msg:"send me notes for exam",
     created_at:new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"send me your js callbacks",
        created_at:new Date(), 
    },
    {
        from:"sumit",
     to:"amit",
     msg:"send your math notes",
     created_at:new Date(),
    },
    {
        from:"neha",
     to:"preeti",
     msg:"send me notes for exam",
     created_at:new Date(),
    },
    {
        from:"anita",
     to:"ramesh",
     msg:"bring me some fruits",
     created_at:new Date(),
    },
    {
        from:"peter",
     to:"tony",
     msg:"love you 3000",
     created_at:new Date(),
    },
     

];

  Chat.insertMany(allChats);
   