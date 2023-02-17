import React from "react";
import { HStack } from "@chakra-ui/layout";
import { IoHome, IoPersonAdd, IoBook } from "react-icons/io5";
import { Button, Divider, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <HStack backgroundColor="teal">
      <Button
        variant={pathname === "/" ? "solid" : "unstyled"}
        onClick={() => nav("/")}
        leftIcon={<IoHome />}
      >
        Home
      </Button>
      <Box border="1px solid black" height={15}></Box>
      <Button
        variant={pathname === "/add-student" ? "solid" : "unstyled"}
        onClick={() => nav("/add-student")}
        leftIcon={<IoPersonAdd />}
      >
        Add Student
      </Button>
      <Box border="1px solid black" height={15}></Box>
      <Button
        variant={pathname === "/add-course" ? "solid" : "unstyled"}
        onClick={() => nav("/add-course")}
        leftIcon={<IoBook />}
      >
        Add Course
      </Button>
    </HStack>
  );
};

export default Header;
