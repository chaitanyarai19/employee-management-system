import { useState } from "react";

function EmployeeForm({ onAddEmployee }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            id: Date.now(),
            name: name,
            email: email,
            department: department,
            salary: parseFloat(salary)
        };
        onAddEmployee(newEmployee);

        setName('');
        setEmail('');
        setDepartment('');
        setSalary('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add New Employee</h2>
            <input 
                type="text" 
                placeholder="Enter employee name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="Enter employee email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
            </select>
            <input 
                type="number" 
                placeholder="Enter employee salary" 
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;