// src/components/Login.tsx
import React, { useState } from "react";
import Slider from "react-slick";

// Define types for the slider settings
interface SliderSettings {
  slidesToShow: number;
  slidesToScroll: number;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  dots: boolean;
}

const RestaurantLogin: React.FC = () => {
  // Slider settings with explicit typing
  const sliderSettings: SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  };

  // Placeholder function for the login check
  const CheckLogin = (): void => {
    // Replace with actual login logic
    console.log("Checking login...");
  };

  // Event handler for form submission (if needed)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    CheckLogin(); // Call login logic
  };

  return (
    <div className="login_wrap">
      <div className="container-fluid">
        <div className="wraps-center row flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column-reverse">
          <div className="col-md-6 col-lg-6 col-sm-6 col-12 px-0">
            <div className="login_wraps-form">
              <h1>
                Sign In{" "}
                <span>
                  <img
                    src="../../Content/SuperAdmin/images/logo-1.svg"
                    alt="logo"
                    className="main-logo"
                  />
                </span>
              </h1>
              <form
                action="/Restaurant/Login"
                method="post"
                className="form_login"
                onSubmit={handleSubmit}
              >
                <div className="form-group form_login-inpts">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control text_wraps-input"
                    id="txtEmail"
                    name="txtEmail"
                    placeholder="youremail@gmail.com"
                    autoComplete="off"
                  />
                  <div id="email_error_Login" className="errorsClass"></div>
                </div>
                <div className="form-group form_login-inpts">
                  <label>Password</label>
                  <input
                    id="txtPassword"
                    name="txtPassword"
                    type="password"
                    className="form-control text_wraps-input"
                    placeholder="Password"
                  />
                  <div id="password_error_Login" className="errorsClass"></div>
                </div>

                <div className="form-group form-check">
                  <div className="sb-checkbox">
                    <label className="form-check-label">
                      <a href="2.ForgotPassword.html">
                        <span className="wrap-remember">Forgot Password?</span>
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary wrap_submit-signin"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div id="dvErrLogin_Section" className="row" style={{ display: "none" }}>
              <div className="col-md-12 col-lg-12 col-sm-12 errLoginSection">
                <span id="resp_error_Login" className="errorsClass"></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-12 px-0" style={{ padding: 0 }}>
            <div className="carousel">
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="../../Content/SuperAdmin/images/firstraps.jpg"
                    alt="login-image"
                    className="login_image"
                  />
                </div>
                <div>
                  <img
                    src="../../Content/SuperAdmin/images/loginwrap.jpg"
                    alt="login-image"
                    className="login_image"
                  />
                </div>
                <div>
                  <img
                    src="../../Content/SuperAdmin/images/firstraps.jpg"
                    alt="login-image"
                    className="login_image"
                  />
                </div>
                <div>
                  <img
                    src="../../Content/SuperAdmin/images/loginwrap.jpg"
                    alt="login-image"
                    className="login_image"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
