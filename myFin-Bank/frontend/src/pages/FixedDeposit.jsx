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

const FixedDeposit = () => {
  const [formData, setFormData] =
    useState({
      amount: "",
      tenure: "",
      interestRate: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const createFD =
    async () => {
      if (!formData.amount) {
        alert("Amount is required");
        return;
      }

      if (!formData.tenure) {
        alert("Tenure is required");
        return;
      }

      if (
        !formData.interestRate
      ) {
        alert(
          "Interest Rate is required"
        );
        return;
      }

      try {
        const res =
          await API.post(
            "/fd/create",
            formData
          );

        alert(
          res.data.message
        );

        setFormData({
          amount: "",
          tenure: "",
          interestRate: "",
        });
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "FD Creation Failed"
        );
      }
    };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          p: 4,
          flexGrow: 1,
        }}
      >
        <Paper sx={{ p: 4 }}>
          <Typography
            variant="h5"
            mb={2}
          >
            Fixed Deposit
          </Typography>

          <TextField
            fullWidth
            label="Amount"
            name="amount"
            value={
              formData.amount
            }
            onChange={
              handleChange
            }
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Tenure (Months)"
            name="tenure"
            value={
              formData.tenure
            }
            onChange={
              handleChange
            }
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Interest Rate (%)"
            name="interestRate"
            value={
              formData.interestRate
            }
            onChange={
              handleChange
            }
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={
              createFD
            }
          >
            Create FD
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default FixedDeposit;