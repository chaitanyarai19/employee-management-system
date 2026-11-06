function EmployeeCard({ employee }) {
    return(
        <div>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p><b>Department: {employee.department}</b></p>
            <p>Salary: Rs. {employee.salary.toLocaleString()}</p>
        </div>
    )
}
export default EmployeeCard;