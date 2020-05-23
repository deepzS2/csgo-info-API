import React, { useState } from "react";

import {
  Container,
  Box,
  ServerContainer,
  ServerName,
  Text,
  Welcome,
} from "./styles";

// https://steamcommunity.com/id/deepzqueen
// DeepWeb666

// Components
import Header from "../../components/Header";
import Table from "../../components/Table";

const Home = () => {
  const [server, setServer] = useState(null);

  return (
    <>
      <Header setServer={setServer} />
      <Welcome>
        Welcome <span>User</span> to CSGO Info API!
      </Welcome>
      <Container>
        <ServerContainer>
          <ServerName>Server name: {server && server.name}</ServerName>

          <Box>
            <Text>Ping: {server && `${server.ping}ms`}</Text>
            <Text>Map: {server && server.map}</Text>
            <Text>
              Password: <br />
              {server &&
                (server.passwordRequired ? "Required" : "Not required")}
            </Text>
            <Text>IP: {server && server.connect}</Text>
          </Box>
        </ServerContainer>
        <Table rows={server && server.players} />
      </Container>
    </>
  );
};

export default Home;
