import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from "../firebase";
import './styles.css';
// import validate from '/utils/validateInfo';

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if(loading) {
			return;
		}
		if(user) navigate("/loginpage");
	}, [user, loading]);
  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Login Page</Text>
		<div>
          <Input placeholder='Email' mt='40px' type="email" onChange={(e) => setEmail(e.target.value)} />
		
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
		  <Flex justify="flex-end">
              <NavLink to='/signup'><Text color='blue'>Forgot Password?</Text></NavLink>
		  </Flex>
		  <Link to='/list'>
              <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={() => logInWithEmailAndPassword(email, password)} >Login</Button>
			</Link>
			  <NavLink to='/signup'><Text color='blue'>Already haven't a account?</Text></NavLink>
			</div>
</div>
      </div>
    </div>
  );
  }

export default LoginPage;

