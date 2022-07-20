import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
import ModalInfo from "../components/Modal.jsx";
import { getDataFromFirebase } from "../firebase";

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
        <Flex mt='30px' mr='30px' justifyContent='flex-end'>
        <Link to='/info'>
        <Button colorScheme='blue' width="120px">Add Student</Button>
        </Link>
        </Flex>
        <div>
        {sinhvien.length > 0 && sinhvien.map(student => (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m='20px' key={student.id}>
            <Box p='6'>

            <Box
                display='flex' justifyContent='center'
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                <div>{student.name}</div>
            </Box>

            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal' key={student.id}>
                <div>{student.sex}</div>
                </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        <div>{student.age}</div>
                    </Box>
                
            </Box>
        <Box display='flex' alignItems='baseline'>

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

        <Box display='flex' mt='2' alignItems='center' justifyContent='center'>
        <ModalInfo name={student.name} />
                <IconButton
                mr='20px'
                variant='outline'
                colorScheme='teal'
                aria-label='Edit'
                icon={<EditIcon />}
                />
                <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Delete'
                icon={<DeleteIcon />}
                />
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