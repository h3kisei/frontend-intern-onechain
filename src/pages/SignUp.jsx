import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from "../firebase";
import './styles.css';

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailErr, setEmailErr] = useState({});
	const [passwordErr, setPasswordErr] = useState({});
  const [passwordConfirmErr, setPasswordConfirmErr] = useState({});
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

  const handleSubmit = (e) => {
		e.preventDefault();
		const isValid = formValidation();
		if(isValid){
			setEmail("");
			setPassword("");
      setPasswordConfirm("");
		}
	  };
	  
	  const formValidation = () => {
		  let emailErr = {};
		  let passwordErr = {};
      		let passwordConfirmErr = {};
		  let isValid = true;

		  if (!email) {
			emailErr = "Email is required!";
			isValid = false;
		  }
		  if (!password) {
			passwordErr = "Password is required!";
			isValid = false;
		  } else if (password.length < 4) {
			passwordErr = "Password must be more than 4 characters";
			isValid = false;
		  } else if (password.length > 10) {
			passwordErr = "Password cannot exceed more than 10 characters";
			isValid = false;
		  }
      if (!passwordConfirm) {
        passwordConfirmErr = "PasswordConfirm is required!";
        isValid = false;
        } else if (passwordConfirm.length < 4) {
        passwordConfirmErr = "PasswordConfirm must be more than 4 characters";
        isValid = false;
        } else if (passwordConfirm.length > 10) {
        passwordConfirmErr = "PasswordConfirm cannot exceed more than 10 characters";
        isValid = false;
        } 
      

		setEmailErr(emailErr);
		setPasswordErr(passwordErr);
			setPasswordConfirmErr(passwordConfirmErr);
		return isValid;
	};

  const register = () => {
    registerWithEmailAndPassword(email, password).then(() => {
      navigate('/loginpage');
    })
  };

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
        <form onSubmit={handleSubmit}>
        <Text fontSize='4xl' as='b'>Sign Up</Text>
		    <div>
        <Input placeholder='Email' mt='40px' type="email" onChange={(e) => setEmail(e.target.value)} />
        {Object.keys(emailErr).map((key) => {
			  return <div className="err">{emailErr[key]}</div>
		  })}
			<InputGroup size='md'>
				<Input
				mt='20px'
				mb='20px'
				pr='4.5rem'
				type={'password'}
				placeholder='Enter password'
				onChange={(e) => setPassword(e.target.value)}
				/>
			</InputGroup> 
      {Object.keys(passwordErr).map((key) => {
			  return <div className="err">{passwordErr[key]}</div>
		  })}     
      <InputGroup size='md'>
				<Input
				mb='20px'
				pr='4.5rem'
				type={'password'}
				placeholder=' Re enter password'
        onChange={(e) => setPasswordConfirm(e.target.value)}
				/>
			</InputGroup>
      {Object.keys(passwordConfirmErr).map((key) => {
			  return <div className="err">{passwordConfirmErr[key]}</div>
		  })}  
          <Button colorScheme='blue' mt='20px' mb='20px' width='100%' type="submit" onClick={register}>Signup</Button>
          </div>
          <Flex justify="flex-end">
              <NavLink to='/info'><Text color='blue'>Already have a account?</Text></NavLink>
		  </Flex>
      </form>
			</div>
</div>
      </div>
  );
  }

export default Signup;
