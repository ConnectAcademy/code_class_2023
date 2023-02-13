import React, { useEffect, useState } from "react";
import {
  Card,
  Text,
  CardBody,
  InputGroup,
  InputLeftAddon,
  Input,
  Container,
  Button,
  Alert,
} from "@chakra-ui/react";

import { getUcenici, addUcenik } from "./services/uceniceiService";

function App() {
  const [ucenici, setUcenici] = useState([]);
  const [ime, setIme] = useState("");
  const [godini, setGodini] = useState("");
  const [mesto, setMesto] = useState("");
  const [isAddUcenikSuccess, setIsAddUcenikSuccess] = useState(false);
  const [isAddUcenikLoading, setIsAddUcenikLoading] = useState(false);
  useEffect(() => {
    setIsAddUcenikLoading(true);
    getUcenici()
      .then((res) => {
        setIsAddUcenikLoading(false);
        setUcenici(res);
      })
      .catch((err) => {
        setIsAddUcenikLoading(false);
        console.log(err);
      });
  }, []);
  const createUcenik = () => {
    setIsAddUcenikLoading(true);
    setIsAddUcenikSuccess(false);
    let data = {
      id: ucenici.length + 1,
      name: ime,
      age: parseInt(godini),
      from: mesto,
    };
    addUcenik(data)
      .then((res) => {
        console.log(res);
        getUcenici()
          .then((res) => {
            setIsAddUcenikLoading(false);
            setIsAddUcenikSuccess(true);
            setUcenici(res);
          })
          .catch((err) => {
            setIsAddUcenikLoading(false);
            setIsAddUcenikSuccess(false);
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container mt={50}>
        <InputGroup m={3}>
          <InputLeftAddon children="Ime" />
          <Input
            type="text"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            placeholder="Ve molime vnesete go vasheto ime"
          />
        </InputGroup>
        <InputGroup m={3}>
          <InputLeftAddon children="Godini" />
          <Input
            type="text"
            value={godini}
            onChange={(e) => setGodini(e.target.value)}
            placeholder="Ve molime vnesete ja vasheta vozrast"
          />
        </InputGroup>
        <InputGroup m={3}>
          <InputLeftAddon children="Grad/Selo" />
          <Input
            type="text"
            value={mesto}
            onChange={(e) => setMesto(e.target.value)}
            placeholder="Ve molime vnesete go vasheto mesto na ziveenje"
          />
        </InputGroup>
        <Button onClick={createUcenik} isLoading={isAddUcenikLoading}>
          Dodaj Ucenik
        </Button>
        {isAddUcenikSuccess && (
          <Alert mt={3} status="success">
            Data uploaded to the server. Fire on!
          </Alert>
        )}
      </Container>
      {ucenici.map((ucenik, idx) => (
        <Card key={idx} m={10} variant="outline">
          <CardBody>
            <Text>{ucenik.name}</Text>
            <Text>{ucenik.age}</Text>
            <Text>{ucenik.from}</Text>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default App;
