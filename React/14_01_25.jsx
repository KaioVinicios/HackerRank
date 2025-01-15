// Employee Validation
// https://www.hackerrank.com/challenges/employee-validation/problem

import React, { useState } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState("");
  const [nameStatus, setNameStatus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(false);

  const [id, setId] = useState("");
  const [idStatus, setIdStatus] = useState(false);

  const [date, setDate] = useState("");
  const [dateStatus, setDateStatus] = useState(false);

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
            setNameStatus(value.length >= 4 && /^[a-zA-Z\s]+$/.test(value));
          }}
        />
        {!nameStatus && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces.
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            setEmailStatus(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
          }}
        />
        {!emailStatus && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={id}
          placeholder="Employee ID"
          onChange={(e) => {
            setId(e.target.value);
            /^\d{6}$/.test(id) && setIdStatus(true);
          }}
        />
        {!idStatus && (
          <p className="error mt-2">Employee ID must be exactly 6 digits.</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={date}
          placeholder="Joining Date"
          onChange={(e) => {
            const value = e.target.value;
            setDate(value);
            const today = new Date();
            const selectedDate = new Date(value);
            setDateStatus(selectedDate <= today);
          }}
        />
        {!dateStatus && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={!(nameStatus && emailStatus && dateStatus && idStatus)}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
