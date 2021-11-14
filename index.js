const express = require('express');
const cors = require('cors');

// Route management
// import userRoutes from './routes/users';
const duneRoutes = require('./routes/dune');
const timeTrackingRoutes = require('./routes/timeTracking');

// General configuration of the Express Application
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());


// API Routes
// Users 
// app.use('/api',userRoutes);

// Dune API
app.use('/api/dune', duneRoutes);


// Time Tracking API
app.use('/api/timetracking', timeTrackingRoutes);

// Server start 
app.listen( port, ()=> {
    console.log(`MDG Api Server runing on port: ${port}`);
});
