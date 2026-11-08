const API_BASE_URL = 'https://employee-management-system-b9h1.onrender.com/api';

const apiRequest = async (url, options = {}) => {
    let response;
    try {
        response = await fetch(url, options);
    } catch (error) {
        throw new Error('Network error: ' + error.message);
    }
    const responseText = await response.text();
    let result = {};

    if(responseText) {
        try {
            result = JSON.parse(responseText);
        } catch (error) {
            throw new Error('Invalid JSON response: ' + error.message);
        }
    }
    return result;

}

export const getEmployees = async () => {
    return apiRequest(`${API_BASE_URL}/employees`);
}

export const createEmployee = async (employeeData) => {
    return apiRequest(`${API_BASE_URL}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
    });
};


export const updatedEmployee = async (employeeId, updatedData) => {
    return apiRequest(`${API_BASE_URL}/employees/${employeeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    });
};

export const deleteEmployee = async (employeeId) => {
    return apiRequest(`${API_BASE_URL}/employees/${employeeId}`, {
        method: 'DELETE'
    });

};
