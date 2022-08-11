import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../screens/styles.css';

function StepOne({ handleSubmit, nextStep, onChangeEmail, onChangePassword }) {
	const handleNext = (e) => {
		e.preventDefault();
		nextStep();
			};
	
	return (
		<div className="signup-main">
		<div className="sub-main">
			<div className="sub-main1">
			<form onSubmit={handleSubmit}>
				<Text fontSize='4xl' as='b'>Sign Up</Text>
				<div>
				<Input placeholder='Email' mt='30px' type="email" 
				value={email.value}
				onChange={ onChangeEmail } 
				onBlur={ handleBlurEmail } 
				/>
				{email.hasError && <div className="err">Please enter a valid email</div>}
				
				<InputGroup size='md'>
					<Input
					mt='20px'
					mb='20px'
					pr='4.5rem'
					type={'password'}
					placeholder='Enter password'
					onChange={ onChangePassword } 
					onBlur={ handleBlurPassword }
					/>
				</InputGroup>   
				{password.hasError && <div className="err">Password must be more than 6 characters and cannot exceed more than 10 characters</div>}

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
