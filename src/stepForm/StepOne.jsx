import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from "react";
import { NavLink } from 'react-router-dom';
import '../pages/styles.css';

const StepOne = ({ nextStep, handleFormData, values }) => {
    const submitFormData = (e) => {
      e.preventDefault();
        nextStep();
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
            onChange={handleFormData("firstName")} />
        <Input 
            mt='20px'
            mb='30px'
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")} />
          <Flex justify="flex-end">
            <Button colorScheme='blue' mt='20px' mb='20px' width='30%' type="submit">Next</Button>
          </Flex>
         <NavLink to='/loginpage'><Text color='blue'>Already have a account?</Text></NavLink>
          </div>
      </form>
			</div>
</div>
      </div>
  );
  }

export default StepOne;