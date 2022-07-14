import { Input, InputGroup, Text, Button, Flex, Alert } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles.css';
import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext.js"

export default function Signup() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(usernameRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Sign Up</Text>
        {error && <Alert variant="danger">{error}</Alert>}
        <div onSubmit={handleSubmit}>
          <Input placeholder='Username' mt='40px' type="username" ref={usernameRef} required />
			<InputGroup size='md'>
				<Input
				mt='20px'
				mb='20px'
				pr='4.5rem'
				type={'text', 'password'}
				placeholder='Enter password'
        ref={passwordRef} required
				/>
			</InputGroup>
      <InputGroup size='md'>
				<Input
				mb='20px'
				pr='4.5rem'
				type={'text', 'password'}
				placeholder=' Re enter password'
        ref={passwordConfirmRef} required
				/>
			</InputGroup>
          <Button colorScheme='blue' mt='20px' mb='20px' width='100%' disabled={loading} type="submit">Signup</Button>
          </div>
          <Flex justify="flex-end">
              <NavLink to='/loginpage'><Text color='blue'>Already have a account?</Text></NavLink>
		  </Flex>
</div>
      </div>
    </div>
  );

