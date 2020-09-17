import React, { useState } from "react";
import Search from "../searchResult/search";

interface loginInfo {
  email: string;
  password: string;
}

interface componentRenderingInfo {
  status: string;
}

type props = {
  set1: (event: React.MouseEvent<HTMLElement>) => void;
};

const Login: React.FC<props> = (props) => {
  const [loginInfo, setLogin] = useState<loginInfo>({
    email: "",
    password: "",
  });

  const [componentRendering, setComponentRendering] = useState<
    componentRenderingInfo
  >({
    status: "OFF",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // INSERT AXIOS REQUEST
    console.log("success");
    setComponentRendering({
      status: "ON",
    });
    props.set1;
  };

  return (
    <div className="login">
      <div>
        <form className="loginSignUpFields">
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="loginSignUpButtons"
          >
            Login
          </button>
          {console.log(loginInfo)}
        </form>
      </div>
    </div>
  );
};

export default Login;
