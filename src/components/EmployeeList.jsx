import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, onDeleteEmployee, onUpdateEmployee }) {
    return(
        <div>
            <br />
            <h2>Employee List</h2>
            {employees.map(employee => (
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee} 
                    onDeleteEmployee={onDeleteEmployee}
                    onUpdateEmployee={onUpdateEmployee}
                />
            ))}
        </div>
    );
}

export default EmployeeList;