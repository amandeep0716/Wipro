import { useState } from "react";
import API from "../services/api";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ChangePassword = () => {
  const [formData, setFormData] =
    useState({
      currentPassword: "",
      newPassword: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async () => {
      try {
        const res =
          await API.put(
            "/profile/change-password",
            formData
          );

        alert(
          res.data.message
        );

        setFormData({
          currentPassword: "",
          newPassword: "",
        });
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Password change failed"
        );
      }
    };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Box p={4}>
          <Paper sx={{ p: 4 }}>
            <Typography
              variant="h5"
              mb={3}
            >
              Change Password
            </Typography>

            <TextField
              fullWidth
              type="password"
              label="Current Password"
              name="currentPassword"
              value={
                formData.currentPassword
              }
              onChange={
                handleChange
              }
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              type="password"
              label="New Password"
              name="newPassword"
              value={
                formData.newPassword
              }
              onChange={
                handleChange
              }
            />

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={
                handleSubmit
              }
            >
              Change Password
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;