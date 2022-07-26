import {
	Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper, Select, Text, Image
} from '@chakra-ui/react';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { profile } from "../firebase";
import './styles.css';


function Info() {
	const [name, setName] = useState("");
	const [studentID, setStudentID] = useState("");
	const [avatar, setAvatar] = useState(null);
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [level, setLevel] = useState("");
	const [describe, setDescribe] = useState("");
	const navigate = useNavigate();

	const info = () => {
		profile(name, studentID, sex, age, level, describe, avatar).then(() => {
		  navigate('/list');
		}).catch(error => console.log(error));
	  };

  return (
    <div className="info-main">
      <div className="sub-main">
        <div className="sub-main1">
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
		  <Input placeholder='Level' mt='15px' type="text" onChange={(e) => setLevel(e.target.value)} />
		  <Input placeholder='Describe' mt='15px' onChange={(e) => setDescribe(e.target.value)} />
		  {/* <div className="avatar">
		  {avatar && (
        <div>
        <img alt="not fount" width={"100px"} src={URL.createObjectURL(avatar)} />
        <br />
        <button onClick={()=>setAvatar(null)}>Remove</button>
        </div>
      )}
		<input
        type="file"
        name="myImage"
        onChange={(e) => {
          setAvatar(e.target.files[0]);
        }}
      />
		  </div> */}
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