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

const LoanApply = () => {
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

  const handleApply =
    async () => {

      // Client Side Validation

      if (
        !formData.amount
      ) {
        alert(
          "Loan Amount is required"
        );
        return;
      }

      if (
        isNaN(
          formData.amount
        )
      ) {
        alert(
          "Loan Amount must be a number"
        );
        return;
      }

      if (
        Number(
          formData.amount
        ) < 1000
      ) {
        alert(
          "Minimum Loan Amount is ₹1000"
        );
        return;
      }

      if (
        !formData.tenure
      ) {
        alert(
          "Loan Tenure is required"
        );
        return;
      }

      if (
        isNaN(
          formData.tenure
        )
      ) {
        alert(
          "Tenure must be a number"
        );
        return;
      }

      if (
        Number(
          formData.tenure
        ) <= 0
      ) {
        alert(
          "Tenure must be greater than 0"
        );
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

      if (
        isNaN(
          formData.interestRate
        )
      ) {
        alert(
          "Interest Rate must be a number"
        );
        return;
      }

      if (
        Number(
          formData.interestRate
        ) <= 0
      ) {
        alert(
          "Interest Rate must be greater than 0"
        );
        return;
      }

      try {
        const res =
          await API.post(
            "/loans/apply",
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
            "Loan Apply Failed"
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
            Apply For Loan
          </Typography>

          <TextField
            fullWidth
            label="Loan Amount"
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
            label="Interest Rate"
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
              handleApply
            }
          >
            Apply Loan
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoanApply;