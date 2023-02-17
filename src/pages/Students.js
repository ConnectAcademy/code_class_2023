import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Text, Button } from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";
import Header from "../components/Header";
import { listAllStudents } from "../services/studentServices";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    listAllStudents()
      .then((res) => setStudents(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(students);
  return (
    <div>
      <Header />
      <Container maxW="container.xl">
        {students.map((student) => (
          <Card key={student.id} my={2.5}>
            <CardBody>
              <Text>Student Name: {student.name}</Text>
              <Text>Student Age: {student.age}</Text>
              <Text>Student Location: {student.from}</Text>
            </CardBody>
            <CardFooter>
              <Button onClick={() => nav("/students/" + student.id)}>
                See student details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Home;
