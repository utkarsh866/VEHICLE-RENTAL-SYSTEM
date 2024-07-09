import postRoutes from './routes/post.route.js'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import multer from 'multer';
import path from "path"
import authRoutes from "./routes/auth.route.js"
import userRoutes from './routes/user.route.js'
import UserModel from './models/image.model.js';
const app = express();
app.use(express.json());

app.use(express.static('images'))
 
app.use(cors());

const mongoUrl = "mongodb+srv://Awesome12:Awesome123@cluster0.9tdgbtc.mongodb.net/";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, 
    tlsInsecure: true, 
  })
  
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("Server started");
});

app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)
app.use('/api/auth',authRoutes)


const storage = multer.diskStorage({
  destination:(req, file, cb) =>{
    cb(null, '../vite-project/src/pictures/')
  },
  filename:(req, file, cb) =>{
    cb(null, file.filename + "_"+ Date.now() + path.extname(file.originalname))
  }

})

const upload= multer({
  storage: storage,
})

// app.post('/upload',upload.single('image'), (req,res) => {
//   UserModel.create({image:req.file.filename,

//   })
//   .then(result => res.json(result))
//   .catch((e) => console.log(err))
// })

app.post('/upload', upload.single('image'), (req, res) => {
  const { description } = req.body;
  const { price } = req.body;
  const { detail } = req.body;


  const image = req.file.filename;

  UserModel.create({ image, description, price , detail})
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    });
});



app.get('/getImage',async(req,res)=>{
  try {
    UserModel.find({}).then((data)=>{
      res.send({status: 'ok',data:data})
    });

  } catch(error){

  }
})




  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  })
  
