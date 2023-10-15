import { useState } from "react";
import InputField from "../../Components/InputField";
import loginImg from "../../assets/login-pic.svg";
import "./Login.scss";
import Checkbox from "../../Components/CheckBox";
import { useNavigate } from "react-router";
import SocialMedia from "../../Components/SocialMedia";
const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [check, setChecked] = useState(false);
  const navigate =useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/home")
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value?.trimStart() }));
  };


  return (
    <div className="login-wrapper main-wrapper">
      <div className="login-form">
        <div className="form-wrapper">
          <h2>Sign In</h2>
          <div className="new-user-wrapper">
            New User? <a href="">Create an account</a>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <InputField
                type="text"
                placeholder="Username or email"
                name="username"
                value={data?.username}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <InputField
                type="text"
                name="password"
                placeholder="Password"
                value={data?.password}
                onChange={onChangeHandler}
              />
            </div>
            <div className="keep-me-signin">
              <Checkbox
                label="Keep me signed in"
                onChange={() => setChecked((pre) => !pre)}
                checked={check}
              />
            </div>
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <div className="social-media-signin">
            <div className="line"></div>
            <h5>Or Sign In With</h5>
            <div className="line"></div>
          </div>
          <SocialMedia/>
        </div>
      </div>
      <div className="login-image">
        <img src={loginImg} alt="Login" />
      </div>
    </div>
  );
};
export default Login;
