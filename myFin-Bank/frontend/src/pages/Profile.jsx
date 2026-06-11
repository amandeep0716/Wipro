
import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [profile, setProfile] =
    useState(null);

  const fetchProfile =
    async () => {
      try {
        const res =
          await API.get(
            "/profile/me"
          );

        setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
      }}
    >
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Box p={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
          >
            My Profile
          </Typography>

          <Grid
            container
            spacing={4}
          >
            {/* Personal Information */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    Personal Information
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#E3F2FD",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Full Name
                          </Typography>

                          <Typography
                            variant="h6"
                            fontWeight="bold"
                          >
                            {
                              profile
                                ?.user
                                ?.fullName
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#E8F5E9",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Email
                          </Typography>

                          <Typography
                            variant="h6"
                          >
                            {
                              profile
                                ?.user
                                ?.email
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#FFF3E0",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Phone Number
                          </Typography>

                          <Typography
                            variant="h6"
                          >
                            {
                              profile
                                ?.user
                                ?.phone
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#F3E5F5",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Role
                          </Typography>

                          <Typography
                            variant="h6"
                            textTransform="capitalize"
                          >
                            {
                              profile
                                ?.user
                                ?.role
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Account Information */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    Account Information
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#E3F2FD",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Account Number
                          </Typography>

                          <Typography
                            variant="h6"
                            fontWeight="bold"
                          >
                            {
                              profile
                                ?.account
                                ?.accountNumber
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#E8F5E9",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Account Type
                          </Typography>

                          <Typography
                            variant="h6"
                          >
                            {
                              profile
                                ?.account
                                ?.accountType
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Card
                        sx={{
                          bgcolor:
                            "#F3E5F5",
                        }}
                      >
                        <CardContent>
                          <Typography color="text.secondary">
                            Available Balance
                          </Typography>

                          <Typography
                            variant="h5"
                            fontWeight="bold"
                          >
                            ₹
                            {
                              profile
                                ?.account
                                ?.balance
                            }
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

