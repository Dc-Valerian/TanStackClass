import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import postSchema from "./Model"

const PORT= express()

const app = express()
app.use(express.json())
app.use(cors())

// CREATE A POST
app.post("/api/createpost",(req,res)=>{
    const {title,description} = req.body
    const creating = postSchema.create({
        title,description
    })
    res.status(201).json({
        creating
    })
})

// TO GET ALL POST
app.get("/api/getPost",(req,res)=>{
    const retrievePost = postSchema.find()
    res.status(200).json(retrievePost)
})

// get single post 
app.get("/api/getpost/:id",(req,res)=>{
    const retrieveSinglePost = postSchema.findById(req.params.id)
    res.status(200).json(retrieveSinglePost)
})

// edit single post 
app.patch("/api/editPost/:id",(req,res)=>{
    const {title} = req.body;
    const retrieveSinglePost = postSchema.findByIdAndUpdate(req.params.id,{title})
    res.status(200).json(retrieveSinglePost)
})


// DELETE SINGLE POST
app.patch("/api/removePost/:id",(req,res)=>{
    const retrieveSinglePost = postSchema.findByIdAndRemove(req.params.id);
    res.status(200).json(retrieveSinglePost)
})

app.listen(()=>{
    console.log(`Listening to ${[PORT]}`);
    
})