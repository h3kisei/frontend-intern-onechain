import {
	Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputField, NumberInputStepper, Select, Text
} from '@chakra-ui/react';
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
	const inputAvatarRef = useRef();
	const [errors, setErrors] = useState({
		name: null,
		studentID: null,
		sex: null,
		age: null,
		birth: null,
		hometown: null,
		level: null,
		describe: null,
	  });
	  
	  const formValidation = (name, studentID, sex, age, birth, hometown, level, describe) => {
		let errors = {
		  name: null,
		  studentID: null,
		  sex: null,
		  age: null,
		  birth: null,
		  hometown: null,
		  level: null,
		  describe: null,
		};
	
		if (!name) {
		  errors = {
			...errors,
			name: "Name is required!"
		  }
		}
		if (!studentID) {
		  errors = {
			...errors,
			studentID: "StudentID is required!"
		  }
		};
		if (!sex) {
		  errors = {
			...errors,
			sex: "Sex is required!"
		  }
		} 
		if (!age) {
			errors = {
			  ...errors,
			  age: "Age is required!"
			}
		  } 
		  if (!birth) {
			errors = {
			  ...errors,
			  birth: "Birth is required!"
			}
		  } 
		  if (!hometown) {
			errors = {
			  ...errors,
			  hometown: "Hometown is required!"
			}
		  }
		  if (!level) {
			errors = {
			  ...errors,
			  level: "Level is required!"
			}
		  } 
		  if (!describe) {
			errors = {
			  ...errors,
			  describe: "Describe is required!"
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

	const info = async () => {
		const reader = new FileReader();
		reader.readAsDataURL(inputAvatarRef.current.files[0]);
		reader.onload = function(e) {
			e.preventDefault();
			const {errors, isValid} = formValidation(name, studentID, sex, age, birth, hometown, level, describe);
			setErrors(errors);
			if(isValid){
			profile(name, studentID, sex, age, birth, hometown, level, describe, reader.result).then(() => {
			  navigate('/grid');
			}).catch(error => console.log(error));
		};
		}
	  };

  return (
    <div className="info-main">
      <div className="sub-maini">
        <div className="sub-maini1">
        <Text fontSize='4xl' as='b'>Profile</Text>
		<div>
          <Input placeholder='Fullname' mt='10px' type="text" onChange={(e) => setName(e.target.value)} 
			  isInvalid={errors?.name}
		  />
		  {!!errors?.name && (
					<div className="errors">{errors?.name}</div>
				)}
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
		  <Input placeholder='Describe' mt='15px' mb='15px' onChange={(e) => setDescribe(e.target.value)} />
		  <div className="image">
		  <input
				type="file"
				name="myImage"
				ref={inputAvatarRef}
			/>
			</div>
        <Button colorScheme='blue' mt='20px' mb='20px' width="100%" onClick={ info } >Add Info</Button>
		</div>
</div>
      </div>
    </div>
  );
  }

export default Info;