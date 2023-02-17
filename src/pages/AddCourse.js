import React, { useRef } from "react";
import { Container, Stack, Input, Button } from "@chakra-ui/react";

import Header from "../components/Header";
import { addCourse } from "../services/courseServices";

const AddCourse = () => {
  const nameRef = useRef();
  const teacherRef = useRef();
  const addCurrentCourse = () => {
    const data = {
      name: nameRef.current.value,
      teacher: teacherRef.current.value,
    };
    addCourse(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <Container mt={30}>
        <Stack>
          <Input variant="filled" placeholder="Name" ref={nameRef} />
          <Input variant="filled" placeholder="Teacher" ref={teacherRef} />
          <Button onClick={addCurrentCourse}>Add Course</Button>
        </Stack>
      </Container>
    </>
  );
};

export default AddCourse;
