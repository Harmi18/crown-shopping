import { useState } from "react";
import Button from "../Button-Component/ButtonComponent";
import { useDispatch } from "react-redux";

import FormInput from "../Form-Input/FormInput";

import "./SignIn.style.scss";
import { googleSignIn, emailSignInStart } from "../../store/user/userActions";

const defaultFormField = {
  email: "",
  password: "",
};
const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormField] = useState(defaultFormField);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignIn());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Already have account ?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
