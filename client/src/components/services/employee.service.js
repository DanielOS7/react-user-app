const api = 'http://localhost:2700/api/v1/employee';

export default class EmployeeService {

    getEmployees() {
        return fetch(`${api}`)
            .then(response => response.json())
    }

    updateEmployee(body) {
        return fetch(`${api}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Employee Updated');
                    window.location.reload();
                } else {
                    alert('Failed to update employee');
                };
            })
    }

    createEmployee(data) {
        return fetch(`${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }

    deleteEmployee(body) {
        return fetch(`${api}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Employee Deleted');
                    window.location.reload();
                } else {
                    alert('Failed to update employee');
                };
            })
    }

    /**
     * HTML http request body for employee 
     * 
     * @typedef RequestBodyEmployee
     * @type {Object}
     * @property {Number} empno
     * @property {String} role of the person joining
     * @property {String} username of the person
     * @property {String} password must be hashed before sending
     */


    /**
    * Example of reuseable request.
    * 
    * @param {String} method Request method.
    * 
    * @param {RequestBodyEmployee} body Body of data.
    * 
    * @param endpoint Where the request is to be sent.
    * 
    */
    // Example of use is commented out in employee.component.js in deleteEmployee function.
    employeeRequest(method, body, endpoint) {
        return fetch(`${api}${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Employee Deleted');
                    window.location.reload();
                } else {
                    alert('Failed to update employee');
                };
            });
    }

}
