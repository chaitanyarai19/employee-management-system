import { useState } from "react";

function EmployeeForm({
    onAddEmployee,
    onUpdateEmployee,
    employee,
    onCancelEdit,
    isSubmitting
}) {
    const [name, setName] = useState(employee?.name ?? '');
    const [email, setEmail] = useState(employee?.email ?? '');
    const [department, setDepartment] = useState(employee?.department ?? '');
    const [salary, setSalary] = useState(employee?.salary?.toString() ?? '');

    async function handleSubmit(e) {
        e.preventDefault();

        const employeeDetails = {
            name: name,
            email: email,
            department: department,
            salary: parseFloat(salary)
        };

        if (employee) {
            const success = await onUpdateEmployee({
                ...employee,
                ...employeeDetails
            });
            if (success) {
                onCancelEdit();
            }
        } else {
            const success = await onAddEmployee(employeeDetails);
            if (success) {
                setName('');
                setEmail('');
                setDepartment('');
                setSalary('');
            }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>{employee ? "Update Employee" : "Add New Employee"}</h2>
            <input 
                type="text" 
                placeholder="Enter employee name" 
                value={name}
                required
                disabled={isSubmitting}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="Enter employee email" 
                value={email}
                required
                disabled={isSubmitting}
                onChange={(e) => setEmail(e.target.value)}
            />
            <select 
                value={department}
                required
                disabled={isSubmitting}
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
                required
                disabled={isSubmitting}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting
                    ? "Saving Employee..."
                    : employee
                        ? "Save Changes"
                        : "Add Employee"}
            </button>
            {employee && (
                <button type="button" onClick={onCancelEdit} disabled={isSubmitting}>
                    Cancel
                </button>
            )}
        </form>
    );
}

export default EmployeeForm;