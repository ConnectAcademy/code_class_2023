import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { Stack, Input, Button, Container, Alert } from "@chakra-ui/react";

import { addSingleStudent } from "../services/studentServices";

const AddStudent = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const locationRef = useRef();
  const [isStudentAddedSuccessful, setIsStudentAddedSuccessful] =
    useState(false);
  const [isStudentAdding, setIsStudentAdding] = useState(false);

  const addStudent = () => {
    setIsStudentAdding(true);
    setIsStudentAddedSuccessful(false);
    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      from: locationRef.current.value,
    };

    addSingleStudent(data)
      .then((res) => {
        setIsStudentAdding(false);
        setIsStudentAddedSuccessful(true);
      })
      .catch((err) => {
        setIsStudentAdding(false);
        setIsStudentAddedSuccessful(false);
      });
  };

  return (
    <div>
      <Header />
      <Container mt={30}>
        <Stack>
          <Input variant="filled" placeholder="Name" ref={nameRef} />
          <Input variant="filled" placeholder="Age" ref={ageRef} />
          <Input variant="filled" placeholder="Location" ref={locationRef} />
          <Button onClick={addStudent} isLoading={isStudentAdding}>
            Add student
          </Button>
          {isStudentAddedSuccessful && (
            <Alert status="success">
              Data uploaded to the server. Fire on!
            </Alert>
          )}
        </Stack>
      </Container>
    </div>
  );
};

export default AddStudent;
