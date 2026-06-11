import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            MyFin Bank
          </Typography>

          <Button
            color="inherit"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              navigate("/register")
            }
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}

      <Box
        sx={{
          minHeight: "85vh",
          background:
            "linear-gradient(135deg,#1565C0,#00ACC1)",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
          >
            Digital Banking
            <br />
            Made Simple & Secure
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mb: 4,
            }}
          >
            Manage your accounts,
            transfer funds, track loans,
            receive instant notifications
            and enjoy secure banking with
            MyFin Bank's modern digital
            platform.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "#1565C0",
              mr: 2,
            }}
            onClick={() =>
              navigate("/register")
            }
          >
            Open Account
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "white",
              color: "white",
            }}
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </Button>
        </Container>
      </Box>

      {/* Statistics */}

      <Container
        sx={{
          mt: -6,
          mb: 8,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 4,
                boxShadow: 4,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
              >
                10,000+
              </Typography>

              <Typography>
                Happy Customers
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 4,
                boxShadow: 4,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="success.main"
              >
                ₹50 Cr+
              </Typography>

              <Typography>
                Transactions Processed
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                height: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 4,
                boxShadow: 4,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="secondary"
              >
                99.9%
              </Typography>

              <Typography>
                Secure Banking
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Services */}

      <Container
        maxWidth="lg"
        sx={{ py: 8 }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Our Banking Services
        </Typography>

        <Grid
          container
          spacing={3}
          mt={2}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Paper
              sx={{
                p: 3,
                height: 220,
                textAlign: "center",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "0.3s",
                cursor: "pointer",

                "&:hover": {
                  transform:
                    "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <PaymentsIcon
                sx={{
                  fontSize: 50,
                  color: "#1565C0",
                }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                Instant Transfers
              </Typography>

              <Typography variant="body2">
                Transfer money securely
                between accounts.
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Paper
              sx={{
                p: 3,
                height: 220,
                textAlign: "center",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "0.3s",
                cursor: "pointer",

                "&:hover": {
                  transform:
                    "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <SavingsIcon
                sx={{
                  fontSize: 50,
                  color: "#1565C0",
                }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                Savings &
                Investments
              </Typography>

              <Typography variant="body2">
                Grow your wealth
                with smart financial
                planning.
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            md={4}
          >
            <Paper
              sx={{
                p: 3,
                height: 220,
                textAlign: "center",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "0.3s",
                cursor: "pointer",

                "&:hover": {
                  transform:
                    "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <AccountBalanceIcon
                sx={{
                  fontSize: 50,
                  color: "#1565C0",
                }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                Easy Loan
                Approval
              </Typography>

              <Typography variant="body2">
                Apply and track
                loans directly
                from your account.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us */}

      <Box
        sx={{
          bgcolor: "#f5f7fb",
          py: 10,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={6}
          >
            Why Choose
            MyFin Bank?
          </Typography>

          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Paper
                sx={{
                  p: 4,
                  height: 220,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  cursor: "pointer",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <SecurityIcon
                  sx={{
                    fontSize: 60,
                    color: "#1565C0",
                  }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  Secure Banking
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              <Paper
                sx={{
                  p: 4,
                  height: 220,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  cursor: "pointer",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <SpeedIcon
                  sx={{
                    fontSize: 60,
                    color: "#1565C0",
                  }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  Fast
                  Transactions
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
            >
              <Paper
                sx={{
                  p: 4,
                  height: 220,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  cursor: "pointer",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <SupportAgentIcon
                  sx={{
                    fontSize: 60,
                    color: "#1565C0",
                  }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  24/7 Support
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}

      <Box
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Ready to Start Banking?
        </Typography>

        <Typography mb={3}>
          Join thousands of
          customers using
          MyFin Bank every day.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ mr: 2 }}
          onClick={() =>
            navigate("/register")
          }
        >
          Open Account
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() =>
            navigate("/login")
          }
        >
          Login
        </Button>
      </Box>

      {/* Footer */}

      <Box
        sx={{
          bgcolor: "#0F172A",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>
          MyFin Bank | Secure • Fast • Reliable
        </Typography>

        <Typography>
          © 2026 MyFin Bank.
          All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Home;