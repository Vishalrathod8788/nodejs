import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const staticPath = path.join(import.meta.dirname, 'public');

app.use(express.static(staticPath));
app.use(express.urlencoded({extended: true}));
app.use((req, res) => {
    res.status(404).sendFile(path.join(import.meta.dirname, 'views', '404.html'));
})

// without using async/await
const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).catch(err => console.error('Error fetching data:', err));
console.log(response[99].userId);


app.get('/', (req, res) => {
    const homePagePath = path.join(import.meta.dirname, 'public', 'index.html');
    res.sendFile(homePagePath);
})

// Route parameter
app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    // console.log(req.params);
    res.send(`Hello, My name is ${username}`);
})

// Query parameter
app.get('/product', (req, res) => {
    console.log(req.query);
    res.send(`The product name is ${req.query.product} and the price is ${req.query.price}`);
})

// contact route
app.post('/contact', (req, res) => {
    console.log(req.body);
    // res.redirect(`https://www.google.com/search?q=${req.body.message}`);
    res.send(`The message is ${req.body.user.message}`);
})

app.listen(PORT, () => {
    console.log(`Server is running ${`http://localhost:${PORT}`}`);
})