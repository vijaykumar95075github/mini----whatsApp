const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // for data parsing
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

// new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// create route
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body; // for data parsing
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  try {
    await newChat.save();
    console.log("chat was saved");
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving chat");
  }
});

   //edit route
   app.get("/chats/:id/edit",async (req,res)=>{
    let { id } = req.params;
    let chat=await Chat.findById(id);

    res.render("edit.ejs", { chat });
   });

   //update route
   app.put("/chats/:id", async (req,res)=>{
    let { id }=req.params;
    let {msg: newMsg}= req.body;
    console.log(newMsg);

    let updateChat= await Chat.findByIdAndUpdate(
      id,
      {
        msg:newMsg 

      },
      {
        runvalidators:true,new:true
      }
    );
    console.log(updateChat);
    res.redirect("/chats");
   })

   //destroy route
   app.delete("/chats/:id", async (req,res)=>{
    let { id }= req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
   })

app.get("/", (req, res) => {
  res.send("root is working");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
