const express = require('express')
const app =  express()
const mongoose  = require('mongoose')

//xpZSP6rFcJj8sOIZ

const uri = "mongodb+srv://girmachewabebe:admin123@cluster0.dbhlz.mongodb.net/blog_app?retryWrites=true&w=majority";

async function connectToDatabase (){
try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
} catch (e) {
  console.log("could not connect", e);
}
}
connectToDatabase()

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
app.use(express.json())
const Blog  =  mongoose.model('Blog', blogSchema)
app.get('/blogs', async (req, res) =>{
  try {
    const blogs  = await Blog.find({})
    res.send({blogs})
  } catch (error) {
    console.log(error)
  }
})


app.post('/blogs', async (req, res) =>{
try {
    await Blog.create(req.body)
    res.json({success: true, message: 'Blog created'})
} catch (error) {
    console.log(error)
}
})

app.listen(3000, () =>{
    console.log('Server is running')
})