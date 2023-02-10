import React from "react";
import { Flex, Button, Input, Textarea } from "@chakra-ui/react";

const Form = () => {
  return (
    <Flex gap={2} flexDirection="column" mt="1rem">
      <Input backgroundColor="white" />
      <Input backgroundColor="white" />
      <Textarea backgroundColor="white" />
      <Button backgroundColor="white">Submit</Button>
    </Flex>
  );
};

export default Form;
