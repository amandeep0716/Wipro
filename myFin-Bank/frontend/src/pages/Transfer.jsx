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

const Transfer = () => {
  const [formData, setFormData] =
    useState({
      receiverAccountNumber: "",
      amount: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleTransfer =
    async () => {

      // Client Side Validation

      if (
        !formData.receiverAccountNumber.trim()
      ) {
        alert(
          "Receiver Account Number is required"
        );
        return;
      }

      if (
        !formData.amount
      ) {
        alert(
          "Please enter an amount"
        );
        return;
      }

      if (
        isNaN(
          formData.amount
        )
      ) {
        alert(
          "Amount must be a number"
        );
        return;
      }

      if (
        Number(
          formData.amount
        ) <= 0
      ) {
        alert(
          "Amount must be greater than 0"
        );
        return;
      }

      try {
        const res =
          await API.post(
            "/account/transfer",
            formData
          );

        alert(
          res.data.message
        );

        setFormData({
          receiverAccountNumber:
            "",
          amount: "",
        });
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Transfer Failed"
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
            Fund Transfer
          </Typography>

          <TextField
            fullWidth
            label="Receiver Account Number"
            name="receiverAccountNumber"
            value={
              formData.receiverAccountNumber
            }
            onChange={
              handleChange
            }
            sx={{ mb: 2 }}
          />

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
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={
              handleTransfer
            }
          >
            Transfer
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Transfer;