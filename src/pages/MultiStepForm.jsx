import React, { useState } from "react";
import StepOne from "../stepForm/StepOne";
import StepTwo from "../stepForm/StepTwo";

function MultiStepForm() {
    const [step, setstep] = useState(1);

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })

    const nextStep = () => {
      setstep(step + 1);
    };
  
    const prevStep = () => {
      setstep(step - 1);
    };

    const handleInputData = input => e => {
      const {value } = e.target;

      setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
}

switch (step) {
    case 1:
      return (
        <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
      );
    case 2:
      return (
        <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );

    }
}



export default MultiStepForm;