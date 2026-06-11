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

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      role: "customer",
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
      !formData.fullName.trim()
    ) {
      alert(
        "Full Name is required"
      );
      return;
    }

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
      !formData.phone.trim()
    ) {
      alert(
        "Phone Number is required"
      );
      return;
    }

    if (
      !/^\d{10}$/.test(
        formData.phone
      )
    ) {
      alert(
        "Phone Number must be exactly 10 digits"
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
      await API.post(
        "/auth/register",
        formData
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Registration Failed"
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
          Register
        </Typography>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            margin="normal"
            value={
              formData.fullName
            }
            onChange={
              handleChange
            }
          />

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
            label="Phone"
            name="phone"
            margin="normal"
            value={
              formData.phone
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
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;