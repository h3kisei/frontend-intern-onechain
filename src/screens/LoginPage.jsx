import { Button, Input, InputGroup, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import "./styles.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setEmail("");
      setPassword("");
    }
  };

  const formValidation = () => {
    let emailErr = {};
    let passwordErr = {};
    let isValid = true;

    if (!email) {
      emailErr = "Email is required!";
      isValid = false;
    }
    if (!password) {
      passwordErr = "Password is required!";
      isValid = false;
    }
    if (password.length < 6 && password.length > 10) {
      passwordErr =
        "Password must be more than 6 characters and cannot exceed more than 10 characters";
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  const login = () => {
    logInWithEmailAndPassword(email, password).then(() => {
      navigate("/list");
    });
  };

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
          <form onSubmit={handleSubmit}>
            <Text fontSize="3xl" as="b">
              Login Page
            </Text>
            <div>
              <Input
                placeholder="Email"
                mt="30px"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {Object.keys(emailErr).map((key) => {
                return <div className="err">{emailErr[key]}</div>;
              })}
              <InputGroup size="md">
                <Input
                  mt="20px"
                  mb="20px"
                  pr="4.5rem"
                  type={"password"}
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </InputGroup>
              {Object.keys(passwordErr).map((key) => {
                return <div className="err">{passwordErr[key]}</div>;
              })}
              <Button
                colorScheme="blue"
                mt="30px"
                mb="20px"
                width="100%"
                type="submit"
                onClick={login}
              >
                Login
              </Button>
              <NavLink to="/signup">
                <Text color="blue">Already haven't a account?</Text>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
