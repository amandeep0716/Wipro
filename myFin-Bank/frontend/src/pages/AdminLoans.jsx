import {
  useEffect,
  useState,
} from "react";

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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

const AdminLoans = () => {
  const navigate = useNavigate();

  const [loans, setLoans] =
    useState([]);

  const fetchLoans =
    async () => {
      try {
        const res =
          await API.get(
            "/admin-loans/all"
          );

        setLoans(
          res.data.loans
        );
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
          Loan Management
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
                Status
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
                    <Typography
                      fontWeight="bold"
                      color={
                        loan.status ===
                        "approved"
                          ? "green"
                          : loan.status ===
                            "rejected"
                          ? "red"
                          : "orange"
                      }
                    >
                      {loan.status}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {loan.status ===
                    "pending" ? (
                      <>
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
                          sx={{
                            ml: 1,
                          }}
                          onClick={() =>
                            rejectLoan(
                              loan._id
                            )
                          }
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <Typography
                        fontWeight="bold"
                        color={
                          loan.status ===
                          "approved"
                            ? "green"
                            : "red"
                        }
                      >
                        Completed
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>

        {/* Back Button */}

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "center",
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            startIcon={
              <ArrowBackIcon />
            }
            onClick={() =>
              navigate(
                "/admin-dashboard"
              )
            }
          >
            Back to Dashboard
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLoans;