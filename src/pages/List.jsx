import { DeleteIcon, EditIcon, InfoIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { db } from "../firebase";


function List() {
    const [sinhvien, setSinhvien] = useState([])
    const fetchSinhvien = async()=>{
        const response = db.collection('Blogs');
        const data = await response.get();
        data.docs.forEach(item=>{
         setBlogs([...blogs,item.data()])
        })
      }
      useEffect(() => {
        fetchBlogs();
      }, [])

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
        {
            sinhvien && sinhvien.map(sv => {
                return(
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m='20px'>
        <Box p='6'>
        <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
            </Badge>
            <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
            >
            {sv.name}
            </Box>
        </Box>

        <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
        >
            {sv.sex}
        </Box>

        <Box>
            {sv.age}
            <Box as='span' color='gray.600' fontSize='sm'>
            / wk
            </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center' justifyContent='center'>
        <Link to='/info' mt='20px'>
                <IconButton
                mr='20px'
                variant='outline'
                colorScheme='teal'
                aria-label='Info'
                icon={<InfoIcon />}
                />
        </Link>
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
                )
            })
        }
        </div>
    </div>
    </div>
    );
}

export default List;