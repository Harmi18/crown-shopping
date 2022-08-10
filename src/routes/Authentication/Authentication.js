import SignUp from "../../components/Sign-Up-Form/Sign-Up";
import SignIn from "../../components/Sign-in-Form/Sign-In";

import "../Authentication/Authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
