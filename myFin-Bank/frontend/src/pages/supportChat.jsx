
import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const SupportChat = () => {
  const [admin, setAdmin] =
    useState(null);

  const [messages, setMessages] =
    useState([]);

  const [message, setMessage] =
    useState("");

  const fetchAdmin =
    async () => {
      try {
        const res =
          await API.get(
            "/chat/admin"
          );

        setAdmin(
          res.data.admin
        );

        fetchMessages(
          res.data.admin._id
        );
      } catch (error) {
        console.log(error);
      }
    };

  const fetchMessages =
    async (adminId) => {
      try {
        const res =
          await API.get(
            `/chat/${adminId}`
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
      if (!message.trim())
        return;

      try {
        await API.post(
          "/chat/send",
          {
            receiverId:
              admin._id,
            message,
          }
        );

        setMessage("");

        fetchMessages(
          admin._id
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          p: 4,
          flexGrow: 1,
        }}
      >
        <Paper
          sx={{
            p: 3,
            height: "75vh",
            overflowY:
              "auto",
          }}
        >
          <Typography
            variant="h5"
            mb={3}
          >
            Customer Support
          </Typography>

          {messages.map(
            (msg) => (
              <Paper
                key={msg._id}
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
        </Paper>

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
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Type message..."
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
      </Box>
    </Box>
  );
};

export default SupportChat;

