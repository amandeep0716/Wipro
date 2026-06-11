import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import API from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    // Client Side Validation

    if (
      !formData.email.trim()
    ) {
      alert(
        "Email is required"
      );
      return;
    }

    if (
      !/\S+@\S+\.\S+/.test(
        formData.email
      )
    ) {
      alert(
        "Enter a valid email"
      );
      return;
    }

    if (
      !formData.password
    ) {
      alert(
        "Password is required"
      );
      return;
    }

    if (
      formData.password.length <
      6
    ) {
      alert(
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      const res =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      if (
        res.data.user.role ===
        "admin"
      ) {
        navigate(
          "/admin-dashboard"
        );
      } else {
        navigate(
          "/customer-dashboard"
        );
      }
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          p: 4,
          mt: 8,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Login
        </Typography>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            margin="normal"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;