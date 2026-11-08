const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            data: employees,
            count: employees.length
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message});
    }
});

router.post('/', async (req, res) => {
    try{
    const { name, email, department, salary } = req.body;

    const employee = await Employee.create({
        name,
        email,
        department,
        salary,
    });
    res.status(201).json({ success: true, data: employee, message: 'Employee created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    };
});

router.put('/:id', async (req, res) => {
    try{
        const {name, email, department, salary} = req.body;
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, department, salary },
            { new: true, runValidators: true }
        );
        
        if(!employee){
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, data: employee, message: 'Employee updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, data: employee, message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});

module.exports = router;