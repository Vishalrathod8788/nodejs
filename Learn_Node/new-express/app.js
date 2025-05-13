import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const staticPath = path.join(import.meta.dirname, 'public');
app.use(express.static(staticPath));

app.get('/', (req, res) =>{
    const homePagePath = path.join(import.meta.dirname, 'public', 'index.html');
    res.sendFile(homePagePath);
})

app.listen(PORT, () => {
    console.log(`Server is running ${`http://localhost:${PORT}`}`);
})