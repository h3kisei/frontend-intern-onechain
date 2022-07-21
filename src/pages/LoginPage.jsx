import { Button, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from "../firebase";
import './styles.css';
// import validate from '/utils/validateInfo';

function LoginPage() {
	const initialValues = { username: "", email: "", password: "" };
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState({});
	const [formValues, setFormValues] = useState(initialValues);
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	
	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
		if(user) navigate("/loginpage");
	}, [formErrors]);

	const validate = (values) => {
		const errors = {}
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!values.email) {
			errors.email = "Email is required!";
		  } else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		  }
		  if (!values.password) {
			errors.password = "Password is required";
		  } else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		  } else if (values.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		  }
		return errors;
	};

  return (
    <div className="login-main">
      <div className="sub-main">
		{Object.keys(formErrors).length === 0 && isSubmit ? (
			<div className="ui message success">Signed in successfully</div>
		) : (
			<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
		)}
        <div className="sub-main1">
		<form onSubmit={handleSubmit}>
        <Text fontSize='4xl' as='b'>Login Page</Text>
		<div>
          <Input placeholder='Email' mt='40px' type="email" value={formValues.email} onChange={handleChange} />
		<p>{formErrors.email}</p>
			<InputGroup size='md'>
				<Input
				mt='20px'
				mb='20px'
				pr='4.5rem'
				type={'password'}
				placeholder='Enter password'
				value={formValues.password}
				onChange={handleChange}
				/>
			</InputGroup>
			<p>{formErrors.password}</p>     
		  <Link to='/list'>
              <Button colorScheme='blue' mt='40px' mb='20px' width="100%" onClick={() => logInWithEmailAndPassword(email, password)} >Login</Button>
			</Link>
			  <NavLink to='/signup'><Text color='blue'>Already haven't a account?</Text></NavLink>
			</div>
		</form>
</div>
      </div>
    </div>
  );
  }

export default LoginPage;

