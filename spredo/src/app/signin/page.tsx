"use client";
import { Input, Button, Form } from "antd";
import React, { useState } from "react";
import "./styles.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [hoveredForgotPassword, setHoveredForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [isReset, setIsReset] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      console.log("Hi");
      setEmail("");
      setPassword("");
    }
  };

  const toggleReset = () => {
    setIsReset(true);
  };

  const buttonStyle = {
    width: "100%",
    color: hovered ? "#640223" : "#FFFFFF", // '#3b82f6' is Tailwind's blue-500
    transition: "color 0.2s, transform 0.2s",
    transform: hovered ? "scale(1.05)" : "scale(1)",
  };

  const forgotPasswordStyle = {
    width: "100%",
    color: hovered ? "#3b82f6" : "#FFFFFF", // '#3b82f6' is Tailwind's blue-500
    transition: "color 0.2s, transform 0.2s",
    transform: hovered ? "scale(1.05)" : "scale(1)",
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Login with", { email, password });
      // Add login API call or action here...
    } else {
      console.log("Sign up with", { email, password, fullname });
      // Add sign-up API call or action here...
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-10">
      <div
        className="bg-midnightGreen p-12 rounded shadow-md max-w-2xl w-full"
        style={{ color: "white" }}
      >
        <h2 className="text-3xl mb-6">
          {isReset ? "Reset Password" : isLogin ? "Sign In" : "Sign Up"}
        </h2>
        <Form onFinish={handleSubmit} autoComplete="off">
          {!isLogin && !isReset && (
            <Form.Item
              name="fullname"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          {!isReset && (
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          )}
          <Form.Item>
            <Button
              htmlType="submit"
              style={buttonStyle}
              className="bg-darkJelly"
            >
              {isReset ? "Send Reset Link" : isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center">
          {isReset ? (
            <>
              Remembered?{" "}
              <span
                className="cursor-pointer"
                onClick={() => setIsReset(false)}
                style={{ color: "#dba76c" }}
              >
                Go back to Sign In.
              </span>
            </>
          ) : (
            <>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                className="cursor-pointer"
                style={{ color: "#dba76c" }}
                onClick={toggleForm}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </span>
              {!isLogin && (
                <>
                  {" "}
                  or{" "}
                  <span
                    className=" cursor-pointer"
                    onClick={toggleReset}
                    style={{ color: "#dba76c" }}
                  >
                    Forgot Password?
                  </span>
                </>
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
