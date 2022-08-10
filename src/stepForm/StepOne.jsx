import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../screens/styles.css';
import { NavLink } from 'react-router-dom';

function StepOne({ handleSubmit, handleFormData, nextStep }) {
	const {email, setEmail} = useState("");
	const [hasError, setHasError] = useState({
		  email: null,
		});
	const handleBlurEmail = () => {
		let hasError = false
		if (
		  !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
			email
		  )
		) {
		  hasError = true;
		}
		return {
			hasError,
			isValid: true,
		  }
	  }

	// const changeHandler2 = e => {
	// const passwordValue = e.target.value.trim().toLowerCase()
	// let hasError = false
	// if (6 < passwordValue.length && passwordValue.length < 10) {
	// 	hasError = true;
	// }
	// setPassword(currentValue => ({
	// 	...currentValue,
	// 	value: e.target.value,
	// 	hasError,
	// }))
	// }

	const handleNext = (e) => {
		e.preventDefault();
		const {hasError, isValid} = handleBlurEmail();
		setHasError(hasError);
		console.log(isValid);
			if(isValid){
				nextStep();
			};
			};
	
	return (
		<div className="signup-main">
		<div className="sub-main">
			<div className="sub-main1">
			<form onSubmit={handleSubmit}>
				<Text fontSize='4xl' as='b'>Sign Up</Text>
				<div>
				<Input placeholder='Email' mt='30px' type="email" 
				onChange={(e) => {setEmail(e.target.value)}} 
				onBlur={ handleBlurEmail } 
				isInvalid={hasError.email}
				/>
				{hasError.email && <div className="err">Please enter a valid email</div>}
				
				<InputGroup size='md'>
					<Input
					mt='20px'
					mb='20px'
					pr='4.5rem'
					type={'password'}
					placeholder='Enter password'
					/>
				</InputGroup>   
				{/* {password.hasError && <div className="err">Password must be more than 6 characters and cannot exceed more than 10 characters</div>} */}

				<InputGroup 
					size='md'>
					<Input
					mb='10px'
					pr='4.5rem'
					type={'password'}
					placeholder='Re enter password'
					onChange={handleFormData("passwordConfirm")}
					/>
				</InputGroup>

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
