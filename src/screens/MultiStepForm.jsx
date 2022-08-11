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
  const [email, setEmail] = useState({
		value: "",
		hasError: false,
	});
	const [password, setPassword] = useState({
		value: "",
		hasError: false,
	});
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword({...password, value: e.target.value});
  }
	const handleBlurEmail = () => {
		let hasError = false;
		if (
		  !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
			email
		  )
		) {
		  hasError = true;
		}
		setEmail({
			...email,
			hasError,
		})
	  }

	  const handleBlurPassword = () => {
		let hasError = false;
		if ( 6 > password.value.length ) {
		  hasError = true;
		}
		if ( password.value.length > 10 ) {
			hasError = true;
		  }
		setPassword({
			...password,
			hasError,
		  })
	  }

  
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
      const { email } = handleChangeEmail;
      const { password } = handleChangePassword;
      registerWithEmailAndPassword(email, password, firstName, lastName).then((res) => {
      console.log(res);
      navigate('/');
    })
    };
  
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };

switch (step) {
    case 1:
      return (
        <StepOne nextStep={nextStep} 
        onChangeEmail={handleChangeEmail} 
        onChangePassword={ handleChangePassword } 
        onBlurEmail={handleBlurEmail}
        onBlurPassword={handleBlurPassword}
        />
      );
      case 2:
        return (
        <StepTwo prevStep={prevStep} handleSubmit={handleSubmit} />
      );

    }
}

export default MultiStepForm;