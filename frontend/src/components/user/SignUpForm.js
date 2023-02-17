import React, { useState } from "react";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail()) {
      setEmailError(false);
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
      })}
      else {
        setEmailError(true); 
      }
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
    <>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        placeholder="First Name"
        id="firstName"
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last Name"
        id="lastName"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        id="dateOfBirth"
        type="date"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
      />

      <input id="submit" type="submit" value="Submit" />

    </form>
    {emailError && <p>invalid email address</p>}
    </>
  );
};

export default SignUpForm;
