import {
	Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper, Select, Text
} from '@chakra-ui/react';
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth, profile } from "../firebase";
import './styles.css';

function Info() {
	const [name, setName] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [level, setLevel] = useState("");
	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();

  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Profile</Text>
		<div>
          <Input placeholder='Fullname' mt='40px' type="text" onChange={(e) => setName(e.target.value)} />
		  <Flex flex-direction='row' mt='20px'>
		  <Select placeholder='Sex' mr='20px' onChange={(e) => setSex(e.target.value)}>
			<option value='Male'>Nam</option>
			<option value='Female'>Nữ</option>
			</Select>
			<NumberInput placeholder='Age' maxW={20} defaultValue={15} min={10} onChange={(valueAsString, valueAsNumber) => setAge(valueAsNumber)} >
				<NumberInputField />
				<NumberInputStepper >
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</Flex>
		  <Input placeholder='Level' mt='20px' type="text" onChange={(e) => setLevel(e.target.value)} />
		  <Link to='/list'>    
        <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={() => profile(name, sex, age, level)} >Add Info</Button>
		</Link>
		</div>
</div>
      </div>
    </div>
  );
  }

export default Info;