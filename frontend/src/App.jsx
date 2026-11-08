import {useState,useEffect} from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import {
  getEmployees,
  createEmployee,
  updatedEmployee as updateEmployeeRequest,
  deleteEmployee as deleteEmployeeRequest
} from './services/employeeService';

function App(){
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 3;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

useEffect(() => {
  const loadEmployees = async () => {
    try {
      setLoading(true);
      const result = await getEmployees();

      setEmployees(result.data);

      console.log("Employees fetched:", result.data);

    } catch (error) {
      console.error("Error fetching employees:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  loadEmployees();
}, []);

const addEmployee = async (employeeData) => {
    try{

      setIsSubmitting(true);
      setApiError(null);
      const result = await createEmployee(employeeData);
      setEmployees([...employees, result.data]);
      setSuccessMessage("Employee added successfully!");
      return true;
    } catch (error) {
      console.error("Error creating employee:", error);
      setApiError(error.message);
      return false;
    }finally {
      setIsSubmitting(false);
    }
};

  async function deleteEmployee(employeeId) {
    try{
      setApiError(null);
      const result = await deleteEmployeeRequest(employeeId);

      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== employeeId)
      );
      setSuccessMessage("Employee Deleted successfully!");
      console.log("Employee deleted:", result);
    } catch (error) {
      setApiError(error.message);
    }
  }

  async function updateEmployee(updatedEmployee) {
    try{
      setIsSubmitting(true);
      setApiError(null);

      const result = await updateEmployeeRequest(
        updatedEmployee._id,
        updatedEmployee
      );

      setEmployees((previousEmployees) =>
        previousEmployees.map((employee) =>
          employee._id === updatedEmployee._id ? result.data : employee
        )
      );
      setEditingEmployee(null);
      console.log("Employee updated:", result.data);
      setSuccessMessage("Employee updated successfully!");
      return true;

    } catch (error) {
      setApiError(error.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchedName = employee.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchedDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchedName && matchedDepartment;
  });

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  useEffect(() => {
    if(totalPages ===0){
      setCurrentPage(1);
    }else if(currentPage > totalPages){
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);
  const startIndex = (currentPage - 1) * employeesPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + employeesPerPage);

  return (
    <div className="App">
      <h1>Employee Management System </h1>
      <EmployeeForm
        key={editingEmployee?._id ?? "new"}
        onAddEmployee={addEmployee}
        onUpdateEmployee={updateEmployee}
        employee={editingEmployee}
        onCancelEdit={() => setEditingEmployee(null)}
        isSubmitting={isSubmitting}
      />

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

      {loading && <p>Loading employees...</p>}
      {error && <p>Error loading employees: {error}</p>}
      {successMessage && <p style={{color:"green"}}>{successMessage}</p>}
      {apiError && <p style={{color:"red"}}>Error: {apiError}</p>}
      {!loading && !error && filteredEmployees.length === 0 && (
        <p>No employees found.</p>
      )}
      {!loading && !error && filteredEmployees.length > 0 && (
        <EmployeeList employees={paginatedEmployees}
        onDeleteEmployee={deleteEmployee}
        onEditEmployee={setEditingEmployee}
        isSubmitting={isSubmitting}
         />
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