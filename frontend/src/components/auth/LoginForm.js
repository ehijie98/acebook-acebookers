import React, { useState } from 'react';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      console.log("login unsuccessful")
      navigate('/login')
    } else {
      console.log("login successful")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <div className="col-md-4">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <input
            className="form-control"
            placeholder="Email"
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            className="form-control"
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>

          <div>
            <h5>New to Acebookers? Sign up here!</h5>
            <div className="col-12">
              <a href="/signup">
                <button className="btn btn-primary" type="button">
                  Sign up
                </button>
              </a>
            </div>
          </div>
          
        </form>
      </div>
    );
}

export default LogInForm;
