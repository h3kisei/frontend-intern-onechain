import { Button, Input, Text, NumberInput, 
	NumberInputField, NumberInputStepper, NumberIncrementStepper
 } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, info } from "../firebase";
import './styles.css';
// import validate from '/utils/validateInfo';

function Info() {
	const [name, setName] = useState("");
	const [grade, setGrade] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const info = () => {
		if (!name) alert("Please enter name");
    	info(name, email, password);

	};

	useEffect(() => {
		if(loading) {
			return;
		}
		if(user) navigate("/info");
	}, [user, loading]);
  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Infomation</Text>
		<div>
          <Input placeholder='Fullname' mt='40px' type="text" onChange={(e) => setName(e.target.value)} />
		  <div flex-direction='row' mt='20px'>
		  <Select placeholder='Sex'>
			<option value='option1'>Nam</option>
			<option value='option2'>Nữ</option>
			</Select>
			<NumberInput placeholder='Age' size='sm' maxW={20} defaultValue={15} min={10}>
				<NumberInputField />
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</div>
		  <Input placeholder='Grade' mt='20px' type="text" onChange={(e) => setGrade(e.target.value)} />    
        <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={() => info(name, sex, age, grade)} >Add Info</Button>
		</div>
</div>
      </div>
    </div>
  );
  }

export default Info;