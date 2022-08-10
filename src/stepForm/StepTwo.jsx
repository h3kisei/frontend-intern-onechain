import { Button, Flex, Input, Text, Spacer } from '@chakra-ui/react';
import React from "react";
import '../pages/styles.css';

const StepTwo = ({ prevStep, handleFormData, handleSubmit }) => {
    const handlePrev = (e) => {
      e.preventDefault();
        prevStep();
      };

  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
        <form onSubmit={handleSubmit}>
        <Text fontSize='3xl' as='b'>Sign Up</Text>
		    <div>
        <Input 
            mt='40px'
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")} />
        <Input 
            mt='20px'
            mb='30px'
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")} />
          <Flex>
            <Button colorScheme='blue' mt='20px' mb='20px' width='30%' type="submit" onClick = { handlePrev }>Back</Button>
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