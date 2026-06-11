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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const AdminCustomers = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] =
    useState([]);

  const fetchCustomers =
    async () => {
      try {
        const res =
          await API.get(
            "/admin/customers"
          );

        setCustomers(
          res.data.customers
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Box p={4}>
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h4"
          mb={3}
        >
          Customer Management
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>

              <TableCell>
                Email
              </TableCell>

              <TableCell>
                Phone
              </TableCell>

              <TableCell>
                Role
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {customers.map(
              (customer) => (
                <TableRow
                  key={
                    customer._id
                  }
                >
                  <TableCell>
                    {
                      customer.fullName
                    }
                  </TableCell>

                  <TableCell>
                    {
                      customer.email
                    }
                  </TableCell>

                  <TableCell>
                    {
                      customer.phone
                    }
                  </TableCell>

                  <TableCell>
                    {
                      customer.role
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

export default AdminCustomers;