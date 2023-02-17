import React from "react";
import { HStack } from "@chakra-ui/layout";
import { IoHome, IoPersonAdd } from "react-icons/io5";
import { Button, Divider, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <HStack backgroundColor="teal">
      <Button variant="unstiled" onClick={() => nav("/")} leftIcon={<IoHome />}>
        Home
      </Button>
      <Box border="1px solid black" height={15}></Box>
      <Button
        variant="unstiled"
        onClick={() => nav("/add-student")}
        leftIcon={<IoPersonAdd />}
      >
        Add Student
      </Button>
    </HStack>
  );
};

export default Header;
