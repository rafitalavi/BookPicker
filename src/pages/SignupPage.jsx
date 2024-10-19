import { useState } from "react";
import Input from '../components/Input'; // Assuming you have the Input component
import '../styles/loginsingup.css'

export default function SignupPage() {
  const [errors, setErrors] = useState({ password: '' });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const acquisitionChannel = fd.getAll('acquisition');

    data.acquisition = acquisitionChannel;

    // Reset errors
    setErrors({ password: '' });

    if (data.password !== data["confirm-password"]) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Passwords do not match' }));
      return;
    }

    console.log(data);
    // Reset the form after submission
    event.target.reset();
  }

  return (
    <div className="maincontainer">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Welcome on board!</h2>
        <p className="form-description">We just need a little bit of data from you to get you started 🚀</p>

        <Input className="custom-input" label="Email" id="email" type="email" name="email" required />
        
        <div className="control-row">
          <Input className="custom-input" label="Password" id="password" type="password" name="password" required minLength={8} />
          
          <Input
            className="custom-input"
            label="Confirm Password"
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            error={errors.password}
          />
          {errors.password && <div className="control-error"><p>{errors.password}</p></div>}
        </div>

        <hr className="form-divider" />

        <div className="control-row">
          <Input className="custom-input" label="First Name" id="first-name" type="text" name="first-name" required />
          <Input className="custom-input" label="Last Name" id="last-name" type="text" name="last-name" required />
        </div>

        <div className="control">
          <label htmlFor="role">What best describes your role?</label>
          <select className="custom-input" id="role" name="role" required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>

        <fieldset className="form-fieldset">
          <legend className="fieldset-legend">How did you find us?</legend>
          <div className="control">
            <input type="checkbox" id="google" name="acquisition" value="google" />
            <label htmlFor="google">Google</label>
          </div>
          <div className="control">
            <input type="checkbox" id="friend" name="acquisition" value="friend" />
            <label htmlFor="friend">Referred by friend</label>
          </div>
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>

        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required /> I agree to the terms and conditions
          </label>
        </div>

        <p className="form-actions">
          <button type="reset" className=" button-flat">Reset</button>
          <button type="submit" className=" button-singup">Sign up</button>
        </p>
      </form>
    </div>
  );
}
