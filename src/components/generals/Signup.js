import { useState } from "react";
function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    pwd: "",
    cpwd: "",
  });
  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    usernameErr: "",
    emailErr: "",
    pwdErr: "",
    cpwdErr: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isContainSpace(username) {
    return /^[A-Za-z0-9]*$/.test(username);
  }
  function pwdIsStrong(password) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/.test(
      password
    );
  }
  const changeData = (e) => {
    if (e.target.name == "email") {
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
    } else if (e.target.name === "username") {
      setUserData({
        ...userData,
        username: e.target.value,
      });
      if (e.target.value.length === 0) {
        setErrors({
          ...errors,
          usernameErr: "* Username requierd",
        });
      } else if (!isContainSpace(e.target.value)) {
        setErrors({
          ...errors,
          usernameErr: "* Username Must be not contain space",
        });
      } else {
        setErrors({
          ...errors,
          usernameErr: "",
        });
      }
    } else if (e.target.name === "name") {
      setUserData({
        ...userData,
        name: e.target.value,
      });

      if (e.target.value.length === 0) {
        setErrors({
          ...errors,
          nameErr: "* name required",
        });
      } else {
        setErrors({
          ...errors,
          pwdErr: "",
        });
      }
    } else if (e.target.name === "pwd") {
      setUserData({
        ...userData,
        pwd: e.target.value,
      });

      if (e.target.value.length === 0) {
        setErrors({
          ...errors,
          pwdErr: "* password required",
        });
      } else if (e.target.value.length < 8) {
        setErrors({
          ...errors,
          pwdErr: "* password must be greater than 8 character ",
        });
      } else if (!pwdIsStrong(e.target.value)) {
        setErrors({
          ...errors,
          pwdErr: "* password must be Strong ",
        });
      } else {
        setErrors({
          ...errors,
          pwdErr: "",
        });
      }
    } else if (e.target.name === "cpwd") {
      setUserData({
        ...userData,
        cpwd: e.target.value,
      });

      if (e.target.value.length === 0) {
        setErrors({
          ...errors,
          cpwdErr: "* password required",
        });
      } else if (e.target.value !== userData.pwd) {
        setErrors({
          ...errors,
          cpwdErr: "* password must be matched",
        });
      } else {
        setErrors({
          ...errors,
          cpwdErr: "",
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
          <label className="form-label">name</label>
          <input
            type="text"
            className="form-control"
            value={userData.name}
            onChange={(e) => changeData(e)}
            name="name"
          />
          <p className="text-danger">{errors.nameErr}</p>
        </div>

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
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={userData.username}
            onChange={(e) => changeData(e)}
            name="username"
          />
          <p className="text-danger">{errors.usernameErr}</p>
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
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            value={userData.cpwd}
            onChange={(e) => changeData(e)}
            name="cpwd"
          />
          <p className="text-danger">{errors.cpwdErr}</p>
        </div>
        <button className="btn btn-light my-3" onClick={() => showPass()}>
          show Password
        </button>

        <div className="mb-3">
          <button className="btn btn-info"> Register</button>
        </div>
      </div>
    </>
  );
}
export default Register;
