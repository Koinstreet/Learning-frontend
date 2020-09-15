import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

// functions
import { signinAction } from '../actions';

// Images
import Icons from "../../icons";

const Signin = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth)
  const [passType, setPassType] = useState<string>("password");
  const [form, setForm] = useState<object>({
    email: {
      value: "",
      entered: false,
    },
    password: {
      value: "",
      entered: false,
    },
  });

  const togglePassType = () => {
    setPassType(passType === "password" ? "text" : "password");
  };
  const onChange = (e) => {
    const newForm = { ...form };
    newForm[e.target.name].value = e.target.value;
    newForm[e.target.name].entered = true;
    setForm(newForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(form).map(el => {
      data[el] = form[el].value
    });
    dispatch(signinAction(data))
    console.log(data);
  }

  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <div className="row align-items-start">
          <div className="col-md-6">
            <h1 className="auth-page__signinHead">
              Sign In to your Learning Site
            </h1>
            <p className="auth-page__signinLink">
              or <Link to="/signup">create a new account</Link>
            </p>
          </div>
          <div className="col-md-6">
            <form className="auth-page__form">
              <div className="row">
                <div className="col">
                  <div className="auth-page__inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="auth-page__input"
                      value={form["email"].value}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row auth-page__row">
                <div className="col">
                  <div className="auth-page__inputGroup">
                    <label htmlFor="password">Choose a password</label>
                    <input
                      type={passType}
                      name="password"
                      id="password"
                      className="auth-page__input"
                      value={form["password"].value}
                      onChange={onChange}
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

              <div className="row justify-content-center align-items-center mt-5">
                <div className="col">
                  <button disabled={loading ? true : false} className="button" onClick={onSubmit}>
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
