import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
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
          MyFin Bank Admin Panel
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={logout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;