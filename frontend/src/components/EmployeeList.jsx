import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, onDeleteEmployee, onEditEmployee }) {
    return(
        <div>
            <br />
            <h2>Employee List</h2>
            {employees.map(employee => (
                <EmployeeCard 
                    key={employee._id} 
                    employee={employee} 
                    onDeleteEmployee={onDeleteEmployee}
                    onEditEmployee={onEditEmployee}
                />
            ))}
        </div>
    );
}

export default EmployeeList;