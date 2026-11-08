const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Employee Management System API' });
});

app.use('/api/employees', employeeRoutes);

const startServer = async () => {
    try{
        await connectDB();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();