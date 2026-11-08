const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema, 'EMS');

module.exports = Employee;