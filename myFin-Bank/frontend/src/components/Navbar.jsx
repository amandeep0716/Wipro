
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

import {useNavigate,} from "react-router-dom";

import {useEffect,useState,} from "react";

import API from "../services/api";

const Navbar = () => {
  const navigate =
    useNavigate();

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [
    anchorEl,
    setAnchorEl,
  ] = useState(null);

  const fetchNotifications =
    async () => {
      try {
        const res =
          await API.get(
            "/notifications"
          );

        setNotifications(
          res.data.notifications
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  const openMenu = (
    event
  ) => {
    setAnchorEl(
      event.currentTarget
    );
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
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
          Welcome to MyFin Bank
        </Typography>

        <Badge
          badgeContent={
            notifications.length
          }
          color="error"
          sx={{
            cursor: "pointer",
            mr: 3,
          }}
          onClick={openMenu}
        >
          <NotificationsIcon
            fontSize="large"
          />
        </Badge>

        <Menu
          anchorEl={anchorEl}
          open={
            Boolean(anchorEl)
          }
          onClose={closeMenu}
        >
          {notifications.length >
          0 ? (
            notifications.map(
              (
                notification
              ) => (
                <MenuItem
                  key={
                    notification._id
                  }
                >
                  {
                    notification.message
                  }
                </MenuItem>
              )
            )
          ) : (
            <MenuItem>
              No Notifications
            </MenuItem>
          )}
        </Menu>

        <Typography
          sx={{ mr: 3 }}
        >
          {new Date().toLocaleDateString()}
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={
            <LogoutIcon />
          }
          onClick={logout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

