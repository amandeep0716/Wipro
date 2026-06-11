import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";

import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ChatIcon from "@mui/icons-material/Chat";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] =
    useState({
      totalCustomers: 0,
      totalAccounts: 0,
      totalLoans: 0,
      pendingLoans: 0,
    });

  const fetchStats =
    async () => {
      try {
        const res =
          await API.get(
            "/dashboard/admin-stats"
          );

        setStats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <AdminNavbar />

      <Box
        sx={{
          p: 4,
          bgcolor: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
        >
          Admin Dashboard
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* Customers */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Card
              onClick={() =>
                navigate(
                  "/admin-customers"
                )
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#1565C0,#42A5F5)",
                color: "white",
              }}
            >
              <CardContent>
                <PeopleIcon
                  sx={{
                    fontSize: 50,
                  }}
                />

                <Typography>
                  Customers
                </Typography>

                <Typography
                  variant="h4"
                >
                  {
                    stats.totalCustomers
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Accounts */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Card
              onClick={() =>
                navigate(
                  "/admin-accounts"
                )
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#00C853,#69F0AE)",
                color: "white",
              }}
            >
              <CardContent>
                <AccountBalanceIcon
                  sx={{
                    fontSize: 50,
                  }}
                />

                <Typography>
                  Accounts
                </Typography>

                <Typography
                  variant="h4"
                >
                  {
                    stats.totalAccounts
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Loans */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Card
              onClick={() =>
                navigate(
                  "/admin-loans"
                )
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#7B1FA2,#BA68C8)",
                color: "white",
              }}
            >
              <CardContent>
                <RequestQuoteIcon
                  sx={{
                    fontSize: 50,
                  }}
                />

                <Typography>
                  Loans
                </Typography>

                <Typography
                  variant="h4"
                >
                  {
                    stats.totalLoans
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Pending Loans */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Card
              onClick={() =>
                navigate(
                  "/admin-pending-loans"
                )
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#FF6F00,#FFB300)",
                color: "white",
              }}
            >
              <CardContent>
                <PendingActionsIcon
                  sx={{
                    fontSize: 50,
                  }}
                />

                <Typography>
                  Pending Loans
                </Typography>

                <Typography
                  variant="h4"
                >
                  {
                    stats.pendingLoans
                  }
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Support Chat */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Card
              onClick={() =>
                navigate(
                  "/admin-chat"
                )
              }
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#0288D1,#26C6DA)",
                color: "white",
              }}
            >
              <CardContent>
                <ChatIcon
                  sx={{
                    fontSize: 50,
                  }}
                />

                <Typography>
                  Support Chats
                </Typography>

                <Typography
                  variant="h5"
                >
                  Open
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminDashboard;