import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MyLoans = () => {
  const [loans, setLoans] =
    useState([]);

  const fetchLoans =
    async () => {
      try {
        const res =
          await API.get(
            "/loans/my-loans"
          );

        setLoans(
          res.data.loans
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Box p={4}>
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h5"
              mb={3}
            >
              My Loans
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Amount
                  </TableCell>

                  <TableCell>
                    Tenure
                  </TableCell>

                  <TableCell>
                    Interest
                  </TableCell>

                  <TableCell>
                    EMI
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {loans.map(
                  (loan) => (
                    <TableRow
                      key={
                        loan._id
                      }
                    >
                      <TableCell>
                        ₹
                        {
                          loan.amount
                        }
                      </TableCell>

                      <TableCell>
                        {
                          loan.tenure
                        }{" "}
                        Months
                      </TableCell>

                      <TableCell>
                        {
                          loan.interestRate
                        }
                        %
                      </TableCell>

                      <TableCell>
                        ₹
                        {loan.emi}
                      </TableCell>

                      <TableCell>
                        {
                          loan.status
                        }
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default MyLoans;