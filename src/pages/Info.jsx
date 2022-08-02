import {
	Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper, Select, Text
} from '@chakra-ui/react';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { profile } from "../firebase";
import './info.css';


function Info() {
	const [name, setName] = useState("");
	const [studentID, setStudentID] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [birth, setBirth] = useState("");
	const [hometown, setHomeTown] = useState("");
	const [level, setLevel] = useState("");
	const [describe, setDescribe] = useState("");
	const navigate = useNavigate();

	const info = () => {
		profile(name, studentID, sex, age, birth, hometown, level, describe).then(() => {
		  navigate('/list');
		}).catch(error => console.log(error));
	  };

  return (
    <div className="info-main">
      <div className="sub-maini">
        <div className="sub-maini1">
        <Text fontSize='4xl' as='b'>Profile</Text>
		<div>
          <Input placeholder='Fullname' mt='30px' type="text" onChange={(e) => setName(e.target.value)} />
		  <Input placeholder='Student ID' mt='15px' type="text" onChange={(e) => setStudentID(e.target.value)} />
		  <Flex flex-direction='row' mt='15px'>
		  <Select placeholder='Sex' mr='15px' onChange={(e) => setSex(e.target.value)}>
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
			<Input
				mt='15px'			
				placeholder="Select Date"
				size="md"
				backgroundColor="#ffffff"
				type="date"
				onChange={(e) => setBirth(e.target.value)}
				/>
			<Input placeholder='Home Town' mt='15px' type="text" onChange={(e) => setHomeTown(e.target.value)} />
		  <Input placeholder='Level' mt='15px' type="text" onChange={(e) => setLevel(e.target.value)} />
		  <Input placeholder='Describe' mt='15px' onChange={(e) => setDescribe(e.target.value)} />
		  <Link to='/list'>    
        <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={ info } >Add Info</Button>
		</Link>
		</div>
</div>
      </div>
    </div>
  );
  }

export default Info;