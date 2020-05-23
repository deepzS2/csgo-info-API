import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

// Api
import api from "../../services/api";

// Styles
import { Container, Form } from "./styles";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [steamId, setSteamId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !steamId || !password) {
      return setErrors("Please fill all the fields to sign up!");
    }

    try {
      await api.post("/auth/register", { name, steamId, password });
      return history.push("/login");
    } catch (error) {
      console.error(error.response.data);
      return setErrors(error.response.data.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        {errors && <p>{errors}</p>}
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Steam URL"
          onChange={(e) => setSteamId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(Register);
