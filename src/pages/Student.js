import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

import { getSingleStudent } from "../services/studentServices";
import { getListeningCourses } from "../services/courseServices";
import { Container } from "@chakra-ui/layout";
import { Text, Kbd } from "@chakra-ui/react";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [listeningCourses, setListeningCourses] = useState([]);

  useEffect(() => {
    getSingleStudent(id)
      .then((res) => setStudent(res))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (student) {
      getListeningCourses(student.courses).then((res) =>
        setListeningCourses(res)
      );
    }
  }, [student]);
  return (
    <div>
      <Header />
      <Container>
        {student && (
          <>
            <Text>{student.name}</Text>
            <Text>{student.age}</Text>
            <Text>{student.from}</Text>
          </>
        )}
        {listeningCourses.map((course) => (
          <Kbd key={course.id} mr={2}>
            {course.name}
          </Kbd>
        ))}
      </Container>
    </div>
  );
};

export default Student;
