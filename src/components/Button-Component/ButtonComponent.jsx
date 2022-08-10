import "./Button-Component.style.scss";

const Button_Type_Class = {
  google: "google-sign-in",
  invert: "invert",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_Class[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
