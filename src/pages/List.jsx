import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Flex } from "@chakra-ui/react";
import React from "react";
import { Input, IconButton } from '@chakra-ui/react'
import { SearchIcon, InfoIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


function ListChakra() {
    return (
        <>
        <Flex justify="center" mt='30px' mb='30px'>
            <Input placeholder='Search' htmlSize={4} width='30%' mr='10px' />
            <IconButton aria-label='Search database' colorScheme='blue' width='1em' icon={<SearchIcon />} />
        </Flex>
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Họ và tên</Th>
                <Th>Giới tính</Th>
                <Th>Lớp</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>1</Td>
                <Td>Hồ Huy Hoàng</Td>
                <Td>Nam</Td>
                <Td>ĐTVT09</Td>
                <Td isNumeric><IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Info'
                    width='1em'
                    mr='30px'
                    icon={<InfoIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    width='1em'
                    mr='30px'
                    icon={<EditIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Delete'
                    width='1em'
                    mr='100px'
                    icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
            <Tr>
                <Td>2</Td>
                <Td>Tạ Hoàng Việt</Td>
                <Td>Nam</Td>
                <Td>DM01</Td>
                <Td isNumeric><IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Info'
                    width='1em'
                    mr='30px'
                    icon={<InfoIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    width='1em'
                    mr='30px'
                    icon={<EditIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Delete'
                    width='1em'
                    mr='100px'
                    icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
            <Tr>
                <Td>3</Td>
                <Td>Nguyễn Thị A</Td>
                <Td>Nữ</Td>
                <Td>CK06</Td>
                <Td isNumeric><IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Info'
                    width='1em'
                    mr='30px'
                    icon={<InfoIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    width='1em'
                    mr='30px'
                    icon={<EditIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Delete'
                    width='1em'
                    mr='100px'
                    icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
            <Tr>
                <Td>4</Td>
                <Td>Trần Thanh Hoàng</Td>
                <Td>Nam</Td>
                <Td>CK03</Td>
                <Td isNumeric><IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Info'
                    width='1em'
                    mr='30px'
                    icon={<InfoIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Edit'
                    width='1em'
                    mr='30px'
                    icon={<EditIcon />}
                    />
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Delete'
                    width='1em'
                    mr='100px'
                    icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
            </Tbody>

        </Table>
        </TableContainer>
        </>
    );
}

export default ListChakra;