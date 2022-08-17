import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Select,
  Spacer,
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
import { getDataFromFirebase } from "../firebase";
import "./styles.css";

function List() {
  const [sinhvien, setSinhvien] = useState([]);
  const [search, setSearch] = useState("");
  const [originStudents, setOriginStudents] = useState([]);
  const [filterSex, setFilterSex] = useState("All");

  useEffect(() => {
    getDataFromFirebase("sinhvien").then((results) => {
      setOriginStudents(results);
      setSinhvien(results);
    });
  }, []);

  function filterListStudentBy() {
    const resultSearch = originStudents.filter((student) => {
      return (
        student.name.includes(search) &&
        (filterSex === "All" || student.sex === filterSex)
      );
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
          <Spacer />
          <div className="search">
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
                onClick={filterListStudentBy}
              />
            </Flex>
          </div>
        </Flex>
        <div className="list">
          {sinhvien.length === 0 && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Not found!</AlertTitle>
              <AlertDescription>No valid student found.</AlertDescription>
            </Alert>
          )}
          {sinhvien.length > 0 &&
            sinhvien.map((student) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                height="240px"
                width="310px"
                m="20px"
                key={student.id}
              >
                <Box p="6">
                  <Flex>
                    <img src={student.avatar} />
                    <Flex
                      justifyContent="center"
                      fontWeight="semibold"
                      lineHeight="tight"
                      mb="10px"
                      flexDirection="column"
                    >
                      <div>{student.name}</div>
                      <Badge
                        mt="6px"
                        mb="6px"
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        key={student.id}
                      >
                        <div>ID: {student.studentID}</div>
                      </Badge>
                      <Box
                        color="gray.600"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                      >
                        <div>Gender: {student.sex}</div>
                        <div>Age: {student.age}</div>
                        <div>Majors: {student.level}</div>
                        <div>Hometown: {student.hometown}</div>
                      </Box>
                    </Flex>
                  </Flex>
                  <Box
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="center"
                  >
                    <ModalInfo
                      name={student.name}
                      studentID={student.studentID}
                      sex={student.sex}
                      age={student.age}
                      level={student.level}
                      describe={student.describe}
                      birth={student.birth}
                      hometown={student.hometown}
                      avatar={student.avatar}
                    />
                    <UpdateInfo student={student} />
                    <DeleteInfo student={student} />
                    <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
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
