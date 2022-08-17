import {
  SearchIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Input,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteInfo from "../components/DeleteInfo.jsx";
import Header from "../components/Header.jsx";
import ModalInfo from "../components/Modal.jsx";
import UpdateInfo from "../components/UpdateInfo.jsx";
import {
  getDataEachPage,
  getQueryNextPage,
  getQueryPrevPage,
  filterWhere,
} from "../firebase";
import "./styles.css";

function List() {
  const [sinhvien, setSinhvien] = useState([]);
  const [search, setSearch] = useState("");
  const [originStudents, setOriginStudents] = useState([]);
  const [filterSex, setFilterSex] = useState("All");
  const [lastStudent, setLastStudent] = useState([]);
  const [previousStudent, setPreviousStudent] = useState([]);

  useEffect(() => {
    getDataEachPage().then((results) => {
      console.log(results);
      setLastStudent(results.lastDoc);
      setPreviousStudent(results.previousDoc);
      setOriginStudents(results.data);
      setSinhvien(results.data);
    });
  }, []);

  const handleNextPage = () => {
    const query = getQueryNextPage(lastStudent);
    getDataEachPage(query).then((results) => {
      console.log(results.data);
      setSinhvien(results.data);
    });
  };

  const handlePrevPage = () => {
    const query = getQueryPrevPage(previousStudent);
    getDataEachPage(query).then((results) => {
      console.log(results.data);
      setSinhvien(results.data);
    });
  };

  function handleSearch() {
    const sameName = search;
    const query = filterWhere(sameName);
    getDataEachPage(query).then((results) => {
      console.log(results.data);
      setSinhvien(results.data);
    });
  }

  // function filterListStudentBy() {
  //   const resultSearch = originStudents.filter((student) => {
  //     return (
  //       student.name.includes(search) &&
  //       (filterSex === "All" || student.sex === filterSex)
  //     );
  //   });
  //   setSinhvien(resultSearch);
  // }

  // useEffect(() => {
  //   filterListStudentBy();
  // }, [filterSex]);

  return (
    <div>
      <Header />
      <div>
        <Flex mt="15px" ml="20px" mr="20px">
          <Link to="/list">
            <Button colorScheme="blue" width="110px" mr="10px">
              List View
            </Button>
          </Link>
          <Link to="/grid">
            <Button colorScheme="blue" width="110px">
              Grid View
            </Button>
          </Link>
          <Spacer />
          <Link to="/info">
            <Button colorScheme="blue" width="110px">
              Add Student
            </Button>
          </Link>
        </Flex>
        <Flex ml="30px" mr="30px" mt="20px" mb="20px">
          <Select
            defaultValue="All"
            width="110px"
            onChange={(e) => setFilterSex(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
          <div className="search">
            <Spacer />
            <Flex>
              <Input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <IconButton
                ml="10px"
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </Flex>
          </div>
        </Flex>
        {sinhvien.length === 0 && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Not found!</AlertTitle>
            <AlertDescription>No valid student found.</AlertDescription>
          </Alert>
        )}
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Fullname</Th>
                <Th>Student ID</Th>
                <Th>Gender</Th>
                <Th>Age</Th>
                <Th>Birthday</Th>
                <Th>Level</Th>
                <Th>Home Town</Th>
                <Th isNumeric>Click</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sinhvien.length > 0 &&
                sinhvien.map((student) => (
                  <Tr>
                    <Td>{student.name}</Td>
                    <Td>{student.studentID}</Td>
                    <Td>{student.sex}</Td>
                    <Td>{student.age}</Td>
                    <Td>{student.birth}</Td>
                    <Td>{student.level}</Td>
                    <Td>{student.hometown}</Td>
                    <Td isNumeric>
                      <ModalInfo
                        name={student.name}
                        studentID={student.studentID}
                        sex={student.sex}
                        age={student.age}
                        level={student.level}
                        describe={student.describe}
                        birth={student.birth}
                        hometown={student.hometown}
                      />
                      <UpdateInfo student={student} />
                      <DeleteInfo student={student} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex>
          <IconButton
            aria-label="Search database"
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
          />
          <IconButton
            aria-label="Search database"
            icon={<ChevronRightIcon />}
            onClick={handleNextPage}
          />
        </Flex>
      </div>
    </div>
  );
}

export default List;
