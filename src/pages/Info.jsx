import { Button, Input, Text, NumberInput, 
	NumberInputField, NumberInputStepper, NumberIncrementStepper,
	Select, NumberDecrementStepper, Flex
 } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


function Info() {
	const [name, setName] = useState("");
	const [sex] = useState("");
	const [age] = useState("");
	const [level, setLevel] = useState("");
	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();
	const profile = () => {
		if (!name) alert("Please enter name");
    	profile(name, sex, age, level);

	};
  return (
    <div className="login-main">
      <div className="sub-main">
        <div className="sub-main1">
        <Text fontSize='4xl' as='b'>Profile</Text>
		<div>
          <Input placeholder='Fullname' mt='40px' type="text" onChange={(e) => setName(e.target.value)} />
		  <Flex flex-direction='row' mt='20px'>
		  <Select placeholder='Sex' mr='20px'>
			<option value='option1'>Nam</option>
			<option value='option2'>Nữ</option>
			</Select>
			<NumberInput placeholder='Age' maxW={20} defaultValue={15} min={10}>
				<NumberInputField />
				<NumberInputStepper>
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