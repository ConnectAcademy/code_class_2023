import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Info = ({ title, desc, children }) => {
  return (
    <Box>
      <Text fontSize="2xl" as="b">
        {title}
      </Text>
      <Text fontSize="2xl">{desc}</Text>
      {children}
    </Box>
  );
};

export default Info;
