import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ContactCard = ({ RenderIcon, title, desc }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <RenderIcon fontSize="3rem" my={5} />
      <Text fontSize="xl" as="b">
        {title}
      </Text>
      <Text fontSize="lg">{desc}</Text>
    </Flex>
  );
};

export default ContactCard;
