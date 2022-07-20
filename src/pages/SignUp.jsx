import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from "../firebase";
import './styles.css';
// import validate from '/utils/validateInfo';

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
  const register = () => {
    if (password !== passwordConfirm) {
      alert("Password do not match")
      return;
    }
    registerWithEmailAndPassword(email, password).then((res) => {
      navigate('/loginpage');
    }).catch(error => console.log(error));

  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Sign Up</Text>
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
      <InputGroup size='md'>
				<Input
				mb='20px'
				pr='4.5rem'
				type={'password'}
				placeholder=' Re enter password'
        onChange={(e) => setPasswordConfirm(e.target.value)}
				/>
			</InputGroup>
          <Button colorScheme='blue' mt='20px' mb='20px' width='100%' onClick={register}>Signup</Button>
          </div>
          <Flex justify="flex-end">
              <NavLink to='/info'><Text color='blue'>Already have a account?</Text></NavLink>
		  </Flex>
			</div>
</div>
      </div>
  );
  }

export default Signup;
