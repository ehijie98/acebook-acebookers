import React, { useState } from "react";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required 
        pattern="(?=.*?[#?!@$%^&*-\]\[])"
        min="8"
        max="20"
        
      />
      <input
        placeholder="First Name"
        id="firstName"
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        required
      />
      <input
        placeholder="Last Name"
        id="lastName"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        required
      />
      <input
        id="dateOfBirth"
        type="date"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
        required
      />

      <input id="submit" type="submit" value="Sign up" />

      <div>
        <h4>Already have an account?</h4>
        <div>
          <a href="/login">
            <button type="button">Log in</button>
          </a>
        </div>
      </div>
      
    </form>
  );
};

export default SignUpForm;
