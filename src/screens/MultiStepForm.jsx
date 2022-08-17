import StepOne from "../stepForm/StepOne";
import StepTwo from "../stepForm/StepTwo";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { validate } from "uuid";

const validateEmail = (email) => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    return true;
  }
};
const validatePassword = (password) => {
  if (6 > password.value.length || password.value.length > 10) {
    return true;
  }
};
const validatePasswordConfirm = (passwordConfirm) => {
  if (6 > passwordConfirm.value.length || passwordConfirm.value.length > 10) {
    return true;
  }
};

const validateFirstName = (firstName) => {
  if (!firstName.value) {
    return true;
  }
};
const validateLastName = (lastName) => {
  if (!lastName.value) {
    return true;
  }
};
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
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: "",
    hasError: false,
  });
  const [firstName, setFirstName] = useState({
    value: "",
    hasError: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    hasError: false,
  });
  const handleChangeEmail = (e) => {
    setEmail({ ...email, value: e.target.value });
  };
  const handleChangePassword = (e) => {
    setPassword({ ...password, value: e.target.value });
  };
  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm({ ...passwordConfirm, value: e.target.value });
  };
  const handleChangeFirstName = (e) => {
    setFirstName({ ...firstName, value: e.target.value });
  };
  const handleChangeLastName = (e) => {
    setLastName({ ...lastName, value: e.target.value });
  };
  const handleBlurEmail = () => {
    setEmail({
      ...email,
      hasError: validateEmail(email),
    });
  };

  const handleBlurPassword = () => {
    setPassword({
      ...password,
      hasError: validatePassword(password),
    });
  };
  const handleBlurPasswordConfirm = () => {
    setPasswordConfirm({
      ...passwordConfirm,
      hasError: validatePasswordConfirm(passwordConfirm),
    });
  };

  const handleBlurFirstName = () => {
    setFirstName({
      ...firstName,
      hasError: validateFirstName(firstName),
    });
  };
  const handleBlurLastName = () => {
    setLastName({
      ...lastName,
      hasError: validateLastName(lastName),
    });
  };

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email.hasError &&
      !password.hasError &&
      !firstName.hasError &&
      !lastName.hasError
    ) {
      registerWithEmailAndPassword(
        email.value,
        password.value,
        firstName.value,
        lastName.value
      ).then((res) => {
        console.log(res);
        navigate("/");
      });
    }
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
        <StepOne
          nextStep={nextStep}
          onChangeEmail={handleChangeEmail}
          onChangePassword={handleChangePassword}
          onChangePasswordConfirm={handleChangePasswordConfirm}
          onBlurEmail={handleBlurEmail}
          onBlurPassword={handleBlurPassword}
          onBlurPasswordConfirm={handleBlurPasswordConfirm}
          hasErrorEmail={email.hasError}
          hasErrorPassword={password.hasError}
          hasErrorPasswordConfirm={passwordConfirm.hasError}
        />
      );
    case 2:
      return (
        <StepTwo
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onBlurFirstName={handleBlurFirstName}
          onBlurLastName={handleBlurLastName}
          hasErrorFirstName={firstName.hasError}
          hasErrorLastName={lastName.hasError}
        />
      );
    default:
      return null;
  }
}

export default MultiStepForm;
