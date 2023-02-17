import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

import { getSingleStudent } from "../services/studentServices";
import { getStudentComments } from "../services/commentServices";
import { Container, Heading } from "@chakra-ui/layout";
import { CardBody, Text, Card } from "@chakra-ui/react";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleStudent(id)
      .then((res) => setStudent(res))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getStudentComments(id)
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(comments);
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
        {comments.length === 0 && (
          <Heading>No comments found for this student!</Heading>
        )}
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardBody>
              <Text>{comment.body}</Text>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Student;
