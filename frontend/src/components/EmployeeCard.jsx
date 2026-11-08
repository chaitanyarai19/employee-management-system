function EmployeeCard({ employee, onDeleteEmployee, onEditEmployee }) {
    return(
        <div>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p><b>Department: {employee.department}</b></p>
            <p>Salary: Rs. {employee.salary.toLocaleString()}</p>
            <button 
            onClick={() => {
                const confirmDelete = window.confirm(`Are you sure you want to delete ${employee.name}?`);
                if(confirmDelete){
                    onDeleteEmployee(employee._id);
                }
            }}
            >Delete</button>
            <button onClick={() => onEditEmployee(employee)}>Update</button>
        </div>
    )
}
export default EmployeeCard;