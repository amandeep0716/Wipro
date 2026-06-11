import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

const AdminPendingLoans = () => {
  const [loans, setLoans] =
    useState([]);

  const fetchLoans =
    async () => {
      try {
        const res =
          await API.get(
            "/admin-loans/all"
          );

        const pending =
          res.data.loans.filter(
            (loan) =>
              loan.status ===
              "pending"
          );

        setLoans(pending);
      } catch (error) {
        console.log(error);
      }
    };

  const approveLoan =
    async (id) => {
      try {
        await API.put(
          `/admin-loans/approve/${id}`
        );

        fetchLoans();
      } catch (error) {
        console.log(error);
      }
    };

  const rejectLoan =
    async (id) => {
      try {
        await API.put(
          `/admin-loans/reject/${id}`
        );

        fetchLoans();
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <Box p={4}>
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h4"
          mb={3}
        >
          Pending Loan Requests
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Customer
              </TableCell>

              <TableCell>
                Amount
              </TableCell>

              <TableCell>
                Tenure
              </TableCell>

              <TableCell>
                EMI
              </TableCell>

              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loans.map(
              (loan) => (
                <TableRow
                  key={loan._id}
                >
                  <TableCell>
                    {
                      loan.user
                        ?.fullName
                    }
                  </TableCell>

                  <TableCell>
                    ₹{loan.amount}
                  </TableCell>

                  <TableCell>
                    {loan.tenure}
                  </TableCell>

                  <TableCell>
                    ₹{loan.emi}
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        approveLoan(
                          loan._id
                        )
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      sx={{ ml: 1 }}
                      onClick={() =>
                        rejectLoan(
                          loan._id
                        )
                      }
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AdminPendingLoans;