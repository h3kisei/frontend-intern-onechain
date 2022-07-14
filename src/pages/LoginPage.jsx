import { Button, Flex, Input, InputGroup, Text, Alert } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles.css';
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext.js"
// import validate from '/utils/validateInfo';

export default function LoginPage() {
	const usernameRef = useRef()
	const passwordRef = useRef()
	const { login } = useAuth()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	async function handleSubmit(e) {
	  e.preventDefault()
  
	  try {
		setError("")
		setLoading(true)
		await login(usernameRef.current.value, passwordRef.current.value)
		navigate("/")
	  } catch {
		setError("Failed to log in")
	  }
  
	  setLoading(false)
	}
  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Login Page</Text>
		{error && <Alert variant="danger">{error}</Alert>}
		<div onSubmit={handleSubmit}>
          <Input placeholder='Username' mt='40px' type="username" ref={usernameRef} required />
		
			<InputGroup size='md'>
				<Input
				mt='20px'
				mb='20px'
				pr='4.5rem'
				type={'password'}
				placeholder='Enter password'
				ref={passwordRef} required
				/>
			</InputGroup>     
		  <Flex justify="flex-end">
              <NavLink to='/signup'><Text color='blue'>Forgot Password?</Text></NavLink>
		  </Flex>
              <Button colorScheme='blue' mt='20px' mb='20px' width="100%" disabled={loading} type="submit">Login</Button>
              <NavLink to='/signup'><Text color='blue'>Already haven't a account?</Text></NavLink>
			</div>
</div>
      </div>
    </div>
  );
}

