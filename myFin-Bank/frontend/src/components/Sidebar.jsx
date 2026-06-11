import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import {
  Dashboard,
  AccountBalanceWallet,
  MoneyOff,
  SwapHoriz,
  ReceiptLong,
  RequestQuote,
  People,
  LockReset,
  Assignment,
} from "@mui/icons-material";

import ChatIcon from "@mui/icons-material/Chat";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import {useEffect,useState,} from "react";

import {Link,} from "react-router-dom";

const Sidebar = () => {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const userData =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      );

    setUser(userData);
  }, []);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Dashboard />,
      path: "/customer-dashboard",
    },
    {
      text: "Profile",
      icon: <People />,
      path: "/profile",
    },
    {
      text: "Change Password",
      icon: <LockReset />,
      path: "/change-password",
    },
    {
      text: "Deposit",
      icon:
        <AccountBalanceWallet />,
      path: "/deposit",
    },
    {
      text: "Withdraw",
      icon: <MoneyOff />,
      path: "/withdraw",
    },
    {
      text: "Transfer",
      icon: <SwapHoriz />,
      path: "/transfer",
    },
    {
      text: "Transactions",
      icon: <ReceiptLong />,
      path: "/transactions",
    },
    {
      text: "Loan Apply",
      icon:
        <RequestQuote />,
      path: "/loan-apply",
    },
    {
      text: "Fixed Deposit",
      icon: <SavingsIcon />,
      path: "/fd",
    },
    {
      text:
        "Recurring Deposit",
      icon:
        <AccountBalanceWalletIcon />,
      path: "/rd",
    },
    {
      text: "My Loans",
      icon:
        <Assignment />,
      path: "/my-loans",
    },
    {
      text: "Support Chat",
      icon: <ChatIcon />,
      path: "/support-chat",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper":
          {
            width: 260,
            background:
              "linear-gradient(180deg,#0F172A,#1E293B)",
            color: "white",
            boxSizing:
              "border-box",
          },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          MyFin Bank
        </Typography>

        <Typography variant="body2">
          Smart Banking
        </Typography>

        <Box
          sx={{
            mt: 3,
            p: 1.5,
            borderRadius: 2,
            bgcolor:
              "rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
          >
            Hello 👋{" "}
            {user?.fullName}
          </Typography>
        </Box>
      </Box>

      <List>
        {menuItems.map(
          (item) => (
            <ListItem
              key={item.text}
              disablePadding
            >
              <ListItemButton
                component={Link}
                to={item.path}
              >
                <ListItemIcon
                  sx={{
                    color:
                      "white",
                    minWidth:
                      "40px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={
                    item.text
                  }
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;