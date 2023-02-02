import { useState } from "react";
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    pwd: "",
  });
  const [errors, setErrors] = useState({
    emailErr: "",
    pwdErr: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const changeData = (e) => {
    if (e.target.name == "email") {
      showPass(e);

      setUserData({
        ...userData,
        email: e.target.value,
      });
      if (e.target.value.length == 0) {
        setErrors({
          ...errors,
          emailErr: "* email required",
        });
      } else if (!isValidEmail(e.target.value)) {
        setErrors({
          ...errors,
          emailErr: "* email must be valid",
        });
      } else {
        setErrors({
          ...errors,
          emailErr: "",
        });
      }
    } else {
      setUserData({
        ...userData,
        pwd: e.target.value,
      });

      if (e.target.value.length == 0) {
        setErrors({
          ...errors,
          pwdErr: "* password required",
        });
      } else if (e.target.value.length < 8) {
        setErrors({
          ...errors,
          pwdErr: "* password must be greater than 8 character ",
        });
      } else {
        setErrors({
          ...errors,
          pwdErr: "",
        });
      }
    }
  };
  const [passwordShown, setpasswordShown] = useState(false);
  function showPass() {
    setpasswordShown(!passwordShown);
  }
  return (
    <>
      <div className="w-50 mx-auto border border-info p-3 my-5">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            value={userData.email}
            onChange={(e) => changeData(e)}
            name="email"
          />
          <p className="text-danger">{errors.emailErr}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            value={userData.pwd}
            onChange={(e) => changeData(e)}
            name="pwd"
          />
          <p className="text-danger">{errors.pwdErr}</p>

          <button className="btn btn-light my-3" onClick={() => showPass()}>
            show Password
          </button>
        </div>

        <div className="mb-3">
          <button className="btn btn-info">Login</button>
        </div>
      </div>
    </>
  );
}
export default Login;
