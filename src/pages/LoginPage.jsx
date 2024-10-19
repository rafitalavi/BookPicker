import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import Input from '../components/Input'; 
import '../styles/loginsingup.css';

export default function LoginPage() {
  const [enteredInput, setEnteredInput] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = didEdit.email && (!isEmail(enteredInput.email) || !isNotEmpty(enteredInput.email));
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredInput.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsValid || passwordIsInvalid) {
      console.log("Form contains errors. Please fix them before submitting.");
      return;
    }
    console.log("submitted!", enteredInput);
  }

  function handleInputChange(identifier, value) {
    setEnteredInput((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleReset() {
    // Reset the form state and didEdit tracking state
    setEnteredInput({
      email: "",
      password: "",
    });
    setDidEdit({
      email: false,
      password: false,
    });
  }

  return (
    <form className="maincontainer" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          value={enteredInput.email}
          error={emailIsValid ? 'Please enter a valid email address' : null}
          className="custom-input" // Custom class for email input
        />
        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange("password", event.target.value)}
          onBlur={() => handleInputBlur("password")}
          value={enteredInput.password}
          error={passwordIsInvalid ? 'Password must be at least 6 characters long' : null}
          className="custom-input" // Custom class for password input
        />
      </div>

      <p className="form-actions">
        {/* Call handleReset function on reset button click */}
        <button className="button button-flat" type="button" onClick={handleReset}>Reset</button>
        <button className="button button-login" type="submit">Login</button>
      </p>
    </form>
  );
}
