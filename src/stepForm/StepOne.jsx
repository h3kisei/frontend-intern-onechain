import { Button, Input, Text } from '@chakra-ui/react';
import React from "react";
import './styles1.css';

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
        <Text fontSize='4xl' as='b'>Sign Up</Text>
		    <div>
        <Input name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")} />
        <Input name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")} />
          <Button colorScheme='blue' mt='20px' mb='20px' width='100%' type="submit">Next</Button>
          </div>
      </form>
			</div>
</div>
      </div>
  );
  }

export default StepOne;