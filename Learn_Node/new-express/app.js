import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Create Middleware 
app.get('/', (req, res) => {
    return res.send("Hello World");
})


app.get('/about', (req, res) => {
    return res.send("About Page");
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})