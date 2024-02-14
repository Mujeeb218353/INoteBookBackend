const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const connectToMongo = require('./db');
connectToMongo();
//middleware
app.use(express.json());

app.use(cors({
    origin: 'https://inotebook-app-mu.vercel.app'
}));


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.get('/', (req, res) => {
    res.send('Hello from index.js');
});

app.listen(port, ()=>{
    console.log(`iNotebook backend app listening at http://localhost:${port}`);
});
