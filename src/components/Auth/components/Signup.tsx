import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// functions
import { signupAction } from '../actions';

// Images
import Icons from "../../icons";

const Signup = () => {
  const [passType, setPassType] = useState<string>("password");
  const [confirmPassType, setConfirmPassType] = useState<string>("password");
  const [form, setForm] = useState<object>({
    firstName: {
      value: "",
      entered: false,
    },
    lastName: {
      value: "",
      entered: false,
    },
    email: {
      value: "",
      entered: false,
    },
    password: {
      value: "",
      entered: false,
    },
    confirmPassword: {
      value: "",
      entered: false,
    },
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    const newForm = { ...form };
    newForm[e.target.name].value = e.target.value;
    newForm[e.target.name].entered = true;
    setForm(newForm);
  };

  const togglePassType = () => {
    setPassType(passType === "password" ? "text" : "password");
  };
  const toggleConfirmPassType = () => {
    setConfirmPassType(confirmPassType === "password" ? "text" : "password");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(form).map(el => {
      data[el] = form[el].value
    });
    dispatch(signupAction(data))
  }
  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <h1 className="auth-page__signupHead">New Account</h1>
        <form className="auth-page__form">
          <div className="row auth-page__row">
            <div className="col">
              <div className="auth-page__inputGroup">
                <label
                  htmlFor="firstname"
                  style={{
                    color:
                      form["firstName"].entered && !form["firstName"].value
                        ? "#EB5757"
                        : "",
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="auth-page__input"
                  value={form["firstName"].value}
                  onChange={onChange}
                  style={{
                    borderBottomColor:
                      form["firstName"].entered && !form["firstName"].value
                        ? "#EB5757"
                        : "",
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="auth-page__inputGroup">
                <label
                  htmlFor="lastname"
                  style={{
                    color:
                      form["lastName"].entered && !form["lastName"].value
                        ? "#EB5757"
                        : "",
                  }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="auth-page__input"
                  value={form["lastName"].value}
                  onChange={onChange}
                  style={{
                    borderBottomColor:
                      form["lastName"].entered && !form["lastName"].value
                        ? "#EB5757"
                        : "",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row auth-page__row">
            <div className="col">
              <div className="auth-page__inputGroup">
                <label
                  htmlFor="email"
                  style={{
                    color:
                      form["email"].entered && !form["email"].value
                        ? "#EB5757"
                        : "",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="auth-page__input"
                  value={form["email"].value}
                  onChange={onChange}
                  style={{
                    borderBottomColor:
                      form["email"].entered && !form["email"].value
                        ? "#EB5757"
                        : "",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row auth-page__row">
            <div className="col">
              <div className="auth-page__inputGroup">
                <label
                  htmlFor="password"
                  style={{
                    color:
                      form["password"].entered && !form["password"].value
                        ? "#EB5757"
                        : "",
                  }}
                >
                  Choose a password
                </label>
                <input
                  type={passType}
                  name="password"
                  id="password"
                  className="auth-page__input"
                  value={form["password"].value}
                  onChange={onChange}
                  style={{
                    borderBottomColor:
                      form["password"].entered && !form["password"].value
                        ? "#EB5757"
                        : "",
                  }}
                />
                <div
                  className="auth-page__inputGroup-passTxt"
                  onClick={togglePassType}
                >
                  {passType === "password" ? "Show" : "Hide"}
                </div>
              </div>
            </div>
          </div>
          <div className="row auth-page__row">
            <div className="col">
              <div className="auth-page__inputGroup">
                <label
                  htmlFor="password"
                  style={{
                    color:
                      form["confirmPassword"].entered && !form["confirmPassword"].value
                        ? "#EB5757"
                        : "",
                  }}
                >
                  Password Again
                </label>
                <input
                  type={confirmPassType}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="auth-page__input"
                  value={form["confirmPassword"].value}
                  onChange={onChange}
                  style={{
                    borderBottomColor:
                      form["confirmPassword"].entered && !form["confirmPassword"].value
                        ? "#EB5757"
                        : "",
                  }}
                />
                <div
                  className="auth-page__inputGroup-passTxt"
                  onClick={toggleConfirmPassType}
                >
                  {confirmPassType === "password" ? "Show" : "Hide"}
                </div>
              </div>
            </div>
          </div>
          <p className="auth-page__confirmText">
            By clicking this button, I agree to the{" "}
            <span>Terms and Conditions</span> and the{" "}
            <span>Privacy Policy</span>
          </p>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col">
              <p className="auth-page__signinLink">
                Have an account? <Link to="/signin">Sign in</Link>
              </p>
            </div>
            <div className="col">
              <button className="button" onClick={onSubmit}>
                GET STARTED FOR FREE
                <Icons.RightArrow />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
