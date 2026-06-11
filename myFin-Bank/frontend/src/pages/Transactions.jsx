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
} from "@mui/material";

import Sidebar from "../components/Sidebar";

const Transactions = () => {
  const [
    transactions,
    setTransactions,
  ] = useState([]);

  const fetchTransactions =
    async () => {
      try {
        const res =
          await API.get(
            "/transactions/history"
          );

        setTransactions(
          res.data.transactions
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          p: 4,
          flexGrow: 1,
        }}
      >
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h5"
            mb={3}
          >
            Transaction History
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Transaction ID
                </TableCell>

                <TableCell>
                  Type
                </TableCell>

                <TableCell>
                  Amount
                </TableCell>

                <TableCell>
                  Date
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions.map(
                (txn) => (
                  <TableRow
                    key={
                      txn._id
                    }
                  >
                    <TableCell>
                      {
                        txn.transactionId
                      }
                    </TableCell>

                    <TableCell>
                      {
                        txn.type
                      }
                    </TableCell>

                    <TableCell>
                      ₹
                      {
                        txn.amount
                      }
                    </TableCell>

                    <TableCell>
                      {new Date(
                        txn.createdAt
                      ).toLocaleString()}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
};

export default Transactions;