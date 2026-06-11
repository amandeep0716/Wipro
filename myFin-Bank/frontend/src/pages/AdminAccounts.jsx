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

const AdminAccounts = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] =
    useState([]);

  const fetchAccounts =
    async () => {
      try {
        const res =
          await API.get(
            "/admin/accounts"
          );

        setAccounts(
          res.data.accounts
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <Box p={4}>
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h4"
          mb={3}
        >
          Account Management
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Customer
              </TableCell>

              <TableCell>
                Email
              </TableCell>

              <TableCell>
                Account No
              </TableCell>

              <TableCell>
                Balance
              </TableCell>

              <TableCell>
                Type
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {accounts.map(
              (account) => (
                <TableRow
                  key={
                    account._id
                  }
                >
                  <TableCell>
                    {
                      account.user
                        ?.fullName
                    }
                  </TableCell>

                  <TableCell>
                    {
                      account.user
                        ?.email
                    }
                  </TableCell>

                  <TableCell>
                    {
                      account.accountNumber
                    }
                  </TableCell>

                  <TableCell>
                    ₹
                    {
                      account.balance
                    }
                  </TableCell>

                  <TableCell>
                    {
                      account.accountType
                    }
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

export default AdminAccounts;