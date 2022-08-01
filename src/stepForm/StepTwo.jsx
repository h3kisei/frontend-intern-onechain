import { Button, Flex, Input, InputGroup, Spacer, Text, FormHelperText,
	FormErrorMessage, FormControl } from '@chakra-ui/react';
import '../pages/styles.css';

function StepTwo({ prevStep, handleSubmit, errors, handleFormData }) {

	function handleBack() {
		prevStep();
	};
	return (
		<div className="signup-main">
		<div className="sub-main">
			<div className="sub-main1">
			<form onSubmit={handleSubmit}>
				<Text fontSize='4xl' as='b'>Sign Up</Text>
					<div>
					<FormControl>
				<Input placeholder='Email' mt='30px' type="email" onChange={handleFormData("email")} isInvalid={errors?.email} />
				{!!errors?.email && (
					<FormErrorMessage>{errors?.email}</FormErrorMessage>
				)}
				</FormControl>
				<InputGroup size='md'>
					<Input
					mt='20px'
					mb='20px'
					pr='4.5rem'
					type={'password'}
					placeholder='Enter password'
					onChange={handleFormData("password")}
					isInvalid={errors?.password}
					/>
				</InputGroup>   
				{!!errors?.password && (
					<FormErrorMessage>{errors?.password}</FormErrorMessage>
					
				)}
				<InputGroup size='md'>
							<Input
							mb='10px'
							pr='4.5rem'
							type={'password'}
							placeholder='Re enter password'
							onChange={handleFormData("passwordConfirm")}
							/>
				</InputGroup>
				<Flex> 
				<Button colorScheme='blue' mt='20px' mb='20px' width='30%' onClick = { handleBack}>Back</Button>
				<Spacer />
				<Button colorScheme='blue' mt='20px' mb='20px' width='30%' type="submit" onClick={handleSubmit}>Signup</Button>
				</Flex>
				</div>
			</form>
			</div>
		</div>
		</div>
	);
  }

export default StepTwo;
