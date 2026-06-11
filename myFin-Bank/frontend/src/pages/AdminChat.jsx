import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import {
  Box,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

const AdminChat = () => {
  const navigate = useNavigate();

  const [
    customers,
    setCustomers,
  ] = useState([]);

  const [
    selectedUser,
    setSelectedUser,
  ] = useState(null);

  const [messages, setMessages] =
    useState([]);

  const [message, setMessage] =
    useState("");

  const fetchCustomers =
    async () => {
      try {
        const res =
          await API.get(
            "/chat/users/list"
          );

        setCustomers(
          res.data.customers
        );
      } catch (error) {
        console.log(error);
      }
    };

  const fetchMessages =
    async (userId) => {
      try {
        const res =
          await API.get(
            `/chat/${userId}`
          );

        setMessages(
          res.data.messages
        );
      } catch (error) {
        console.log(error);
      }
    };

  const sendMessage =
    async () => {
      if (
        !message.trim() ||
        !selectedUser
      )
        return;

      try {
        await API.post(
          "/chat/send",
          {
            receiverId:
              selectedUser._id,
            message,
          }
        );

        setMessage("");

        fetchMessages(
          selectedUser._id
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
      <Typography
        variant="h4"
        mb={3}
      >
        Admin Support Chat
      </Typography>

      <Grid
        container
        spacing={2}
      >
        {/* Customer List */}
        <Grid
          item
          xs={3}
        >
          <Paper
            sx={{
              height:
                "70vh",
              overflowY:
                "auto",
            }}
          >
            <Typography
              p={2}
              fontWeight="bold"
            >
              Customers
            </Typography>

            <List>
              {customers.map(
                (customer) => (
                  <ListItemButton
                    key={
                      customer._id
                    }
                    onClick={() => {
                      setSelectedUser(
                        customer
                      );

                      fetchMessages(
                        customer._id
                      );
                    }}
                  >
                    <ListItemText
                      primary={
                        customer.fullName
                      }
                    />
                  </ListItemButton>
                )
              )}
            </List>
          </Paper>
        </Grid>

        {/* Chat Window */}
        <Grid
          item
          xs={9}
        >
          <Paper
            sx={{
              p: 2,
              height:
                "70vh",
              display:
                "flex",
              flexDirection:
                "column",
            }}
          >
            <Typography
              variant="h6"
              mb={2}
            >
              {selectedUser
                ? selectedUser.fullName
                : "Select Customer"}
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                overflowY:
                  "auto",
              }}
            >
              {messages.map(
                (msg) => (
                  <Paper
                    key={
                      msg._id
                    }
                    sx={{
                      p: 1,
                      mb: 1,
                    }}
                  >
                    <Typography>
                      <strong>
                        {
                          msg.sender
                            ?.fullName
                        }
                        :
                      </strong>{" "}
                      {
                        msg.message
                      }
                    </Typography>
                  </Paper>
                )
              )}
            </Box>

            {selectedUser && (
              <Box
                sx={{
                  display:
                    "flex",
                  mt: 2,
                }}
              >
                <TextField
                  fullWidth
                  value={
                    message
                  }
                  onChange={(
                    e
                  ) =>
                    setMessage(
                      e.target
                        .value
                    )
                  }
                  placeholder="Type reply..."
                />

                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                  }}
                  onClick={
                    sendMessage
                  }
                >
                  Send
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>

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
    </Box>
  );
};

export default AdminChat;