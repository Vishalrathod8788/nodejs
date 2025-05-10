import express from 'express';

const app = express();

// Create Middleware 
app.get('/', (req, res) => {
    return res.send("Hello World");
})

app.listen(import.meta.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})