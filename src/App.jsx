import {useState} from 'react';
import employeesData from './data/employees';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App(){
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [employees, setEmployees] = useState(employeesData);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 3;

  function addEmployee(newEmployee) {
    setEmployees([...employees, newEmployee]);
  }

  function deleteEmployee(employeeId) {
    setEmployees(employees.filter(employee => employee.id !== employeeId));
  }

  function updateEmployee(updatedEmployee) {
    setEmployees(employees.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    ));
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchedName = employee.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchedDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchedName && matchedDepartment;
  });

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const startIndex = (currentPage - 1) * employeesPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + employeesPerPage);

  return (
    <div className="App">
      <h1>Employee Management System </h1>
      <EmployeeForm onAddEmployee={addEmployee} />

      <div>
        <h2>Search Employees</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

      <h2>Total Employees: {employees.length}</h2>
      <h3>Matching Employees: {filteredEmployees.length}</h3>

      {filteredEmployees.length > 0 ? (
        <EmployeeList employees={paginatedEmployees}
        onDeleteEmployee={deleteEmployee}
        onUpdateEmployee={updateEmployee}
         />
      ) : (
        <p>No employees found.</p>
      )}

      <div>
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span>
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
    </div>


      
  );
}
export default App;