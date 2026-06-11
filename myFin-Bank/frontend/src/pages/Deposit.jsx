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

const Deposit = () => {
  const [amount, setAmount] =
    useState("");

  const handleDeposit =
    async () => {

      // Client Side Validation

      if (!amount) {
        alert(
          "Please enter an amount"
        );
        return;
      }

      if (
        isNaN(amount)
      ) {
        alert(
          "Amount must be a number"
        );
        return;
      }

      if (
        Number(amount) <= 0
      ) {
        alert(
          "Amount must be greater than 0"
        );
        return;
      }

      try {
        const res =
          await API.post(
            "/account/deposit",
            {
              amount,
            }
          );

        alert(
          res.data.message
        );

        setAmount("");
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Deposit Failed"
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
            Deposit Money
          </Typography>

          <TextField
            fullWidth
            label="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={
              handleDeposit
            }
          >
            Deposit
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Deposit;