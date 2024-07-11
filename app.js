import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes.js'
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).
 then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', productRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));