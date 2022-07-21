import { SearchIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, IconButton, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
import ModalInfo from "../components/Modal.jsx";
import UpdateInfo from "../components/UpdateInfo.jsx"
import DeleteInfo from "../components/DeleteInfo.jsx"
import { getDataFromFirebase } from "../firebase";
import './styles.css';

function List() {
    const [sinhvien, setSinhvien] = useState([])

    useEffect(() => {
        getDataFromFirebase('sinhvien').then(results => {
            setSinhvien(results);
            console.log(results);
        })
      }, []);

    return (
        <div>
        <Header />
        <div>
        <Flex mt='15px' mr='30px' justifyContent='flex-end'>
        <Link to='/info'>
        <Button colorScheme='blue' width="120px">Add Student</Button>
        </Link>
        </Flex>
        <div className="search">
            <Input placeholder='Search' />
            <IconButton
                ml='10px'
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon />}
                />
        </div>
        <div className="list">
        {sinhvien.length > 0 && sinhvien.map(student => (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' height='200px' width='300px' m='20px' key={student.id}>
            <Box p='6'>

            <Box
                display='flex' justifyContent='center'
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                mb='15px'
            >
                <div>{student.name}</div>
            </Box>
            <Box display='flex' alignItems='baseline' mb='15px'>
                <Badge borderRadius='full' px='2' colorScheme='teal' key={student.id}>
                <div>{student.sex}</div>
                </Badge>    
            </Box>
        <Box display='flex' alignItems='baseline' mb='15px'>
            <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
            >
                <div>{student.level}</div>
            </Box>
            
        </Box>

        <Box display='flex' mt='2' alignItems='flex-end' justifyContent='center'>
        <ModalInfo name={student.name} sex={student.sex} age={student.age} level={student.level} describe={student.describe} />
        <UpdateInfo student={student} />
        <DeleteInfo student={student} />
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            </Box>
        </Box>
        </Box>
    </Box>
            ))}
        </div>
        </div>
    </div>
    );
}

export default List;