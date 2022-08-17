import { Button, Flex, Input, Text, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import "../screens/styles.css";

function StepTwo({
  prevStep,
  handleSubmit,
  onChangeFirstName,
  onChangeLastName,
  onBlurFirstName,
  onBlurLastName,
  hasErrorFirstName,
  hasErrorLastName,
}) {
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="signup-main">
      <div className="sub-main">
        <div className="sub-main1">
          <form onSubmit={handleSubmit}>
            <Text fontSize="3xl" as="b">
              Sign Up
            </Text>
            <div>
              <Input
                mt="40px"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={onChangeFirstName}
                onBlur={onBlurFirstName}
              />
              {hasErrorFirstName && (
                <div className="err">Firstname is required!</div>
              )}
              <Input
                mt="20px"
                mb="30px"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={onChangeLastName}
                onBlur={onBlurLastName}
              />
              {hasErrorLastName && (
                <div className="err">Lastname is required!</div>
              )}
              <Flex>
                <Button
                  colorScheme="blue"
                  mt="20px"
                  mb="20px"
                  width="30%"
                  type="submit"
                  onClick={handlePrev}
                >
                  Back
                </Button>
                <Spacer />
                <Button
                  colorScheme="blue"
                  mt="20px"
                  mb="20px"
                  width="30%"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Signup
                </Button>
              </Flex>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
