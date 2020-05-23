import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

// Api
import api from "../../services/api";

// Login
import { login } from "../../services/auth";

// Styles
import { Container, Form } from "./styles";

const Login = ({ history }) => {
  const [steamId, setSteamId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!steamId || !password) {
      setErrors("Please fill all the fields to sign in!");
    } else {
      try {
        const response = await api.post("/auth/login", { steamId, password });

        console.log(response.data);

        login(response.data.access_token);

        history.push("/");
      } catch (error) {
        console.error(error.response.data);
        return setErrors(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        {errors && <p>{errors}</p>}
        <input
          type="text"
          placeholder="Steam ID"
          onChange={(e) => setSteamId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link to="/register">Register</Link>
          <button type="submit">Sign In</button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
