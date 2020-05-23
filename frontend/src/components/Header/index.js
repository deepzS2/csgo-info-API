import React, { useState } from "react";

import { Container, Logo, Search, Button, ButtonsDiv } from "./styles";

import api from "../../services/api";

const Header = ({ setServer }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ip = input;
    setInput("");

    if (ip.search(":") === -1) {
      return setError("Please provide a valid IP");
    }

    const search = ip.split(":");

    try {
      const { data } = await api.post("/query", {
        host: search[0],
        port: Number(search[1]),
      });

      setServer(data);
    } catch (error) {
      console.error(error.response.data);
      alert("Something went wrong!");
    }
  };

  return (
    <Container>
      <Logo>CSGO Info API</Logo>

      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder={error ? error : "Search server by IP"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <ButtonsDiv>
        <Button docs>
          <a
            href="http://localhost:3000/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/deepzS2/csgo-info-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Button>
      </ButtonsDiv>
    </Container>
  );
};

export default Header;
