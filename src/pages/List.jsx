import { SearchIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, IconButton, Input, Select, Spacer, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DeleteInfo from "../components/DeleteInfo.jsx";
import Header from "../components/Header.jsx";
import ModalInfo from "../components/Modal.jsx";
import UpdateInfo from "../components/UpdateInfo.jsx";
import { getDataFromFirebase } from "../firebase";
import './styles.css';

function List() {
    const [sinhvien, setSinhvien] = useState([]);
    const [search, setSearch] = useState("");
    const [originStudents, setOriginStudents] = useState([]);
    const [filterSex, setFilterSex] = useState('All');

    useEffect(() => {
        getDataFromFirebase('sinhvien').then(results => {
            setOriginStudents(results);
            setSinhvien(results);
        })
      }, []);

    function filterListStudentBy() {
        const resultSearch = originStudents.filter(student => {  
            return (student.name.includes(search)) 
                && (filterSex === 'All' || student.sex === filterSex);
        });
        setSinhvien(resultSearch);
    }

    useEffect(() => {
        filterListStudentBy();
    }, [filterSex]);


    return (
        <div>
        <Header />
        <div>
        <Flex mt='15px' mr='30px' justifyContent='flex-end'>
        <Link to='/info'>
        <Button colorScheme='blue' width="120px">Add Student</Button>
        </Link>
        </Flex>
        <Flex ml='30px' mr='30px' mt='20px' mb='20px'>
        <Select defaultValue='All' width='80px' onChange={(e) => setFilterSex(e.target.value)}>
            <option value='All'>All</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </Select>
        <Spacer />
        <Flex width='200px'>
            <Input placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            <IconButton
                ml='10px'
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon />}
                onClick= {filterListStudentBy}
                />
        </Flex>
        </Flex>
        <div className="list">
        {sinhvien.length > 0 && sinhvien.map(student => (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' height='200px' width='300px' m='25px' key={student.id}>
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
                <div>{student.name} - {student.studentID}</div>
            </Box>
        <Flex>
            <Box display='flex' alignItems='baseline' mb='15px'>
                <Badge borderRadius='full' px='2' colorScheme='teal' key={student.id}>
                <div>{student.sex}</div>
                </Badge>    
            </Box>
        </Flex>
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
        <ModalInfo name={student.name} studentID={student.studentID} sex={student.sex} age={student.age} level={student.level} describe={student.describe} birth={student.birth} hometown={student.hometown} />
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