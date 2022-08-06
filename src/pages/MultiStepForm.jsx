import StepOne from "../stepForm/StepOne";
import StepTwo from "../stepForm/StepTwo";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from "../firebase";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirm: null
  });
  
  const formValidation = (firstName, lastName, email, password, passwordConfirm) => {
    let errors = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordConfirm: null,
    };
    
    if (!firstName) {
      errors = {
        ...errors,
        firstName: "FirstName is required!"
      }
    }
    if (!lastName) {
      errors = {
        ...errors,
        lastName: "LastName is required!"
      }
    }
    if (!email) {
      errors = {
        ...errors,
        email: "Email is required!"
      }
    }
    if (!password) {
      errors = {
        ...errors,
        password: "Password is required!"
      }
    };
    if (6 < password.length && password.length < 10) {
      errors = "Password must be more than 6 characters and cannot exceed more than 10 characters";
    }
    if (!passwordConfirm) {
      errors = {
        ...errors,
        passwordConfirm: "PasswordConfirm is required!"
      }
    } 
    if (passwordConfirm !== password) {
      errors = {
        ...errors,
        passwordConfirm: "PasswordConfirm is invalid!"
      }
    } 
    for (const key in errors) {
      if (errors[key]) return {
        errors,
        isValid: false,
      }
    }
    return {
      errors,
      isValid: true,
    }
    
  };
  
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm, firstName, lastName} = formData;
    const {errors, isValid} = formValidation(firstName, lastName, email, password, passwordConfirm);
    setErrors(errors);
    if(isValid){
      registerWithEmailAndPassword(email, password, firstName, lastName).then((res) => {
      console.log(res);
      navigate('/');
    })
    };
  };

  const handleNext = (e) => {
    e.preventDefault();
		const { email, password, passwordConfirm, firstName, lastName} = formData;
		const {errors, isValid} = formValidation(firstName, lastName, email, password, passwordConfirm);
		setErrors(errors);
		if(isValid){
			nextStep();
		};
		};
  
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };

    const handleInputData = input => e => {
      setFormData({
        ...formData,
        [input]: e.target.value,
      })
    }

switch (step) {
    case 1:
      return (
        <StepOne nextStep={nextStep} handleFormData={handleInputData} errors={errors} handleNext={handleNext} />
      );
      case 2:
        return (
        <StepTwo prevStep={prevStep} handleFormData={handleInputData} errors={errors} handleSubmit={handleSubmit} values={formData} />
      );

    }
}

export default MultiStepForm;