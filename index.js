const express = require('express');
const cors = require('cors');

// Route management
// import userRoutes from './routes/users';
const duneRoutes = require('./routes/dune');

// General configuration of the Express Application
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());


// API Routes
// Users 
// app.use('/api',userRoutes);

// Dune
app.use('/api/dune', duneRoutes);


// Server start 
app.listen( port, ()=> {
    console.log(`MDG Api Server runing on port: ${port}`);
});
