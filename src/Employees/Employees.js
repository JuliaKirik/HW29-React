import React from "react";
import EmployeesTable from "../EmployeesTable/EmployeesTable";

import './Employees.scss';

function Employees() {
    const employees = [
        {id: 1, name: 'John Smoth', workingDays: 59, amount: 55},
        {id: 2, name: 'Sue Doe', workingDays: 189, amount: 99},
        {id: 3, name: 'Victor Salivan', workingDays: 50, amount: 12},
        {id: 4, name: 'Alexandr Shevchuk', workingDays: 86, amount: 88},
        {id: 5, name: 'Pavel Borh', workingDays: 1, amount: 50},
    ];

    return (
        <div className="employees">
            <EmployeesTable employees={employees}></EmployeesTable>
        </div>
    );
}

export default Employees;
