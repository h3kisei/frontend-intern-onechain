import { Button, Flex, Input, Text, Spacer } from '@chakra-ui/react';
import React from "react";
import { NavLink } from 'react-router-dom';
import '../pages/styles.css';

const StepTwo = ({ prevStep, handleFormData, values, errors, handleSubmit }) => {
    const submitFormData = (e) => {
      e.preventDefault();
        prevStep();
      };

  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
        <form onSubmit={submitFormData}>
        <Text fontSize='3xl' as='b'>Sign Up</Text>
		    <div>
        <Input 
            mt='40px'
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            isInvalid={errors?.firstName}
            onChange={handleFormData("firstName")} />
            {!!errors?.firstName && (
              <div className="errors">{errors?.firstName}</div>
            )}
        <Input 
            mt='20px'
            mb='30px'
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            isInvalid={errors?.lastName}
            onChange={handleFormData("lastName")} />
            {!!errors?.lastName && (
              <div className="errors">{errors?.lastName}</div>
            )}
          <Flex>
            <Button colorScheme='blue' mt='20px' mb='20px' width='30%' type="submit">Back</Button>
            <Spacer />
				  <Button colorScheme='blue' mt='20px' mb='20px' width='30%' type="submit" onClick={handleSubmit}>Signup</Button>
          </Flex>
         <NavLink to='/'><Text color='blue'>Already have a account?</Text></NavLink>
          </div>
      </form>
			</div>
</div>
      </div>
  );
  }

export default StepTwo;