import React, { useState } from "react";
import Login from "../loginSignUp/login"
import Header from "../loginSignUp/header"
import RegistrationForm from "../loginSignUp/register"

interface componentRenderingInfo {
  status: string;
}

const NotLoggedIn : React.FC = () => {
  //this container will render either Login or Signup/Register

  const [componentRendering, setComponentRendering] = useState<
    componentRenderingInfo
  >({
    status: "OFF",
  });

  const goToSignup = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setComponentRendering(() => ({
      status: "SIGNUP",
    }));
  };

  const goToLogin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setComponentRendering(() => ({
      status: "LOGIN",
    }));
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      {componentRendering.status === "OFF" ? 
      <div>
        <div id="buttonGroup">
            <button
              className="loginSignUpButtons"
              onClick={goToSignup}
              >
              Signup
            </button>
            <button
              className="loginSignUpButtons"
              onClick={goToLogin}
              >
              Login
            </button>
          </div>
        </div> : null}

      <div id="loginSignUpContainer">
      {componentRendering.status === "LOGIN" ?
          <div className="logIn">
            <Login />
          </div> : null}

      {componentRendering.status === "SIGNUP" ?
          <div className="signUp">
            <RegistrationForm />
          </div> : null}

    </div>
    </div>
  )
}








export default NotLoggedIn;