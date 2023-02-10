import React from "react";
import { Box, Container, Flex, Heading, Image, Wrap } from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  ArrowDownIcon,
  CalendarIcon,
} from "@chakra-ui/icons";

import ContactCard from "./components/ContactCard";
import Info from "./components/Info";
import Form from "./components/Form";
import map from "./mkd.webp";

function App() {
  return (
    <Box backgroundColor="blackAlpha.200" height="100vh">
      <Container maxW="container.xl">
        <Heading textAlign="center">LET'S CONNECT</Heading>
        <Wrap justify="space-between" my="5rem">
          <ContactCard
            RenderIcon={ArrowDownIcon}
            title="LOCATION"
            desc="Negde sever 123"
          />
          <ContactCard
            RenderIcon={PhoneIcon}
            title="PHONE"
            desc="222 222 222"
          />
          <ContactCard
            RenderIcon={CalendarIcon}
            title="FAX"
            desc="333 333 333"
          />
          <ContactCard
            RenderIcon={EmailIcon}
            title="EMAIL"
            desc="jhon@doeski.com"
          />
        </Wrap>
        <Flex justifyContent="space-between">
          <Info
            title="Get a free case evaluation today!"
            desc="AVAILABLE 24 HOURS A DAY!"
          >
            <Form />
          </Info>
          <Info
            title="We are here"
            desc="Mon-Fri 8:30am- 5pm / Phones are open 24/7"
          >
            <Image
              src={map}
              alt="Macedonia"
              objectFit="cover"
              width={480}
              height={300}
            />
          </Info>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
