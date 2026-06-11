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

const RecurringDeposit = () => {
  const [formData, setFormData] =
    useState({
      monthlyAmount: "",
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

  const createRD =
    async () => {
      if (
        !formData.monthlyAmount
      ) {
        alert(
          "Monthly Amount is required"
        );
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
            "/rd/create",
            formData
          );

        alert(
          res.data.message
        );

        setFormData({
          monthlyAmount: "",
          tenure: "",
          interestRate: "",
        });
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "RD Creation Failed"
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
            Recurring Deposit
          </Typography>

          <TextField
            fullWidth
            label="Monthly Amount"
            name="monthlyAmount"
            value={
              formData.monthlyAmount
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
              createRD
            }
          >
            Create RD
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default RecurringDeposit;