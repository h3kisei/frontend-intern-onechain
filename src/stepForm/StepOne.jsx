import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../pages/styles.css';
import { NavLink } from 'react-router-dom';

function StepOne({ handleNext, handleSubmit, errors, handleFormData }) {
	const [email, setEmail] = useState({
		value: "",
		hasError: false,
	  })
	const [password, setPassword] = useState({
	value: "",
	hasError: false,
	})
	const changeHandler1 = e => {
		// console.log("value changed: ", e.target.value)
		const emailValue = e.target.value.trim().toLowerCase()
		let hasErrorEmail = false
		if (
		  !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
			emailValue
		  )
		) {
		  hasErrorEmail = true;
		}
		setEmail(currentValue => ({
		  ...currentValue,
		  value: e.target.value,
		  hasErrorEmail,
		}))
	  }

	const changeHandler2 = e => {
	// console.log("value changed: ", e.target.value)
	const passwordValue = e.target.value.trim().toLowerCase()
	let hasErrorPassword = false
	if (6 < passwordValue.length && passwordValue.length < 10) {
		hasErrorPassword = true;
	}
	setPassword(currentValue => ({
		...currentValue,
		value: e.target.value,
		hasErrorPassword,
	}))
	}
	
	return (
		<div className="signup-main">
		<div className="sub-main">
			<div className="sub-main1">
			<form onSubmit={handleSubmit}>
				<Text fontSize='4xl' as='b'>Sign Up</Text>
				<div>
				<Input placeholder='Email' mt='30px' type="email" onBlur={ changeHandler1 } />
				{email.hasErrorEmail && <div className="err">Please enter a valid email</div>}
				
				<InputGroup size='md'>
					<Input
					mt='20px'
					mb='20px'
					pr='4.5rem'
					type={'password'}
					placeholder='Enter password'
					onBlur={ changeHandler2 }
					/>
				</InputGroup>   
				{password.hasErrorPassword && <div className="err">Password must be more than 6 characters and cannot exceed more than 10 characters</div>}

				<InputGroup 
					size='md'>
					<Input
					mb='10px'
					pr='4.5rem'
					type={'password'}
					placeholder='Re enter password'
					onChange={handleFormData("passwordConfirm")}
					isInvalid={errors?.passwordConfirm}
					/>
				</InputGroup>
				{!!errors?.passwordConfirm && (
					<div className="errors">{errors?.passwordConfirm}</div>
				)}

				<Flex justifyContent='flex-end'> 
				<Button colorScheme='blue' mt='20px' mb='10px' width='30%' onClick = { handleNext }>Next</Button>
				</Flex>
				<NavLink to='/'><Text color='blue'>Already have a account?</Text></NavLink>
				</div>
			</form>
			</div>
		</div>
		</div>
	);
  }

export default StepOne;
