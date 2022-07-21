import {
	Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper, Select, Text
} from '@chakra-ui/react';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { profile } from "../firebase";
import './styles.css';


function Info() {
	const [name, setName] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [level, setLevel] = useState("");
	const [describe, setDescribe] = useState("");
	const navigate = useNavigate();

  return (
    <div className="info-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Profile</Text>
		<div>
          <Input placeholder='Fullname' mt='40px' type="text" onChange={(e) => setName(e.target.value)} />
		  <Flex flex-direction='row' mt='20px'>
		  <Select placeholder='Sex' mr='20px' onChange={(e) => setSex(e.target.value)}>
			<option value='Male'>Male</option>
			<option value='Female'>Female</option>
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
		  <Input placeholder='Describe' mt='20px' onChange={(e) => setDescribe(e.target.value)} />
		  <Link to='/list'>    
        <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={() => profile(name, sex, age, level, describe)} >Add Info</Button>
		</Link>
		</div>
</div>
      </div>
    </div>
  );
  }

export default Info;