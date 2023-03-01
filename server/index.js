import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
 res.send('hello from backend');
})


mongoose.connect(process.env.MONGO_URI).then(() => {
 app.listen('8080', () => console.log('Server is listening at port 8080'))
}).catch((err) => console.log(err));