import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import {
  Box, Typography, Grid, Card, CardContent,
  Chip, LinearProgress, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Avatar, Divider
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon           from "@mui/icons-material/TrendingUp";
import RequestQuoteIcon         from "@mui/icons-material/RequestQuote";
import SwapHorizIcon            from "@mui/icons-material/SwapHoriz";
import SavingsIcon              from "@mui/icons-material/Savings";
import ArrowUpwardIcon          from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon        from "@mui/icons-material/ArrowDownward";
import VerifiedIcon             from "@mui/icons-material/Verified";
import CreditCardIcon           from "@mui/icons-material/CreditCard";
import BadgeIcon                from "@mui/icons-material/Badge";
import AccountBalanceIcon       from "@mui/icons-material/AccountBalance";
import EmojiEventsIcon          from "@mui/icons-material/EmojiEvents";
import SecurityIcon             from "@mui/icons-material/Security";
import NotificationsActiveIcon  from "@mui/icons-material/NotificationsActive";
import BarChartIcon             from "@mui/icons-material/BarChart";
import Sidebar from "../components/Sidebar";
import Navbar  from "../components/Navbar";

/* ── mock transactions ── */
const MOCK_TXN = [
  { id:"TXN-A1B2", type:"deposit",  label:"Cash Deposit",       amount: 5000,  date:"11 Jun 2026" },
  { id:"TXN-C3D4", type:"withdraw", label:"ATM Withdrawal",      amount:-1200,  date:"10 Jun 2026" },
  { id:"TXN-E5F6", type:"transfer", label:"Transfer to ACC1234", amount:-800,   date:"09 Jun 2026" },
  { id:"TXN-G7H8", type:"deposit",  label:"Salary Credit",       amount: 45000, date:"01 Jun 2026" },
  { id:"TXN-I9J0", type:"invest",   label:"FD Investment",       amount:-10000, date:"28 May 2026" },
];

const TYPE_CFG = {
  deposit:  { color:"#16a34a", bg:"#dcfce7", icon:<ArrowDownwardIcon sx={{fontSize:14}}/>, label:"Credit"     },
  withdraw: { color:"#dc2626", bg:"#fee2e2", icon:<ArrowUpwardIcon   sx={{fontSize:14}}/>, label:"Debit"      },
  transfer: { color:"#d97706", bg:"#fef3c7", icon:<SwapHorizIcon     sx={{fontSize:14}}/>, label:"Transfer"   },
  invest:   { color:"#7c3aed", bg:"#ede9fe", icon:<TrendingUpIcon    sx={{fontSize:14}}/>, label:"Investment" },
};

/* ─────────────────── Stat Card ─────────────────── */
const StatCard = ({ icon, label, value, sub, gradient }) => (
  <Card sx={{
    borderRadius: "20px",
    background: gradient,
    color: "#fff",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    position: "relative",
    overflow: "hidden",
    height: 156,
  }}>
    <Box sx={{ position:"absolute", top:-30, right:-30, width:130, height:130,
      borderRadius:"50%", background:"rgba(255,255,255,0.08)" }} />
    <Box sx={{ position:"absolute", bottom:-40, left:-10, width:100, height:100,
      borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
    <CardContent sx={{ p:3, position:"relative", zIndex:1 }}>
      <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", mb:2 }}>
        <Typography sx={{ fontSize:13, opacity:0.85, fontWeight:500 }}>{label}</Typography>
        <Box sx={{ bgcolor:"rgba(255,255,255,0.18)", borderRadius:"12px", p:1, display:"flex" }}>
          {icon}
        </Box>
      </Box>
      <Typography sx={{ fontSize:28, fontWeight:800, letterSpacing:-1, lineHeight:1 }}>{value}</Typography>
      <Typography sx={{ fontSize:12, opacity:0.75, mt:1 }}>{sub}</Typography>
    </CardContent>
  </Card>
);

/* ─────────────────── Main ─────────────────── */
const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [account, setAccount]           = useState(null);
  const [transactions, setTransactions] = useState(MOCK_TXN);
  const [loans, setLoans]               = useState([]);

  useEffect(() => {
    API.get("/account/balance").then(r => setAccount(r.data)).catch(()=>{});
    API.get("/loans/my").then(r => setLoans(r.data?.slice(0,3)||[])).catch(()=>{});
  }, []);

  const balance  = account?.balance ?? 0;
  const spendAmt = Math.round(balance * 0.3);

  return (
    <Box sx={{ display:"flex", bgcolor:"#EEF2F7", minHeight:"100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow:1, minWidth:0, display:"flex", flexDirection:"column" }}>
        <Navbar />

        <Box sx={{ p:{ xs:2, md:"28px 32px" }, flexGrow:1 }}>

          {/* ══ PAGE HEADER ══ */}
          <Box sx={{ display:"flex", justifyContent:"space-between",
            alignItems:"flex-start", mb:3.5, flexWrap:"wrap", gap:2 }}>
            <Box>
              <Typography sx={{ fontSize:26, fontWeight:800, color:"#0f172a",
                letterSpacing:"-0.6px", lineHeight:1.2 }}>
                Customer Dashboard
              </Typography>
              <Typography sx={{ color:"#94a3b8", mt:0.5, fontSize:13, fontWeight:400 }}>
                Thursday, 11 June 2026 &nbsp;·&nbsp; Smart Banking
              </Typography>
            </Box>
            <Chip
              icon={<VerifiedIcon sx={{ fontSize:14, color:"#16a34a !important" }}/>}
              label="Account Active"
              sx={{ bgcolor:"#dcfce7", color:"#166534", fontWeight:700,
                fontSize:12, border:"1.5px solid #86efac",
                borderRadius:"10px", height:32, px:0.5 }}
            />
          </Box>

          {/* ══ ROW 1 — 3 Stat Cards + Welcome Card ══ */}
          <Grid container spacing={2.5} mb={3}>
            <Grid item xs={12} sm={6} md={2.4}>
              <StatCard
                icon={<AccountBalanceWalletIcon sx={{fontSize:20}}/>}
                label="Account Balance"
                value={`₹${balance.toLocaleString("en-IN")}`}
                sub={`A/C: ${account?.accountNumber ?? "Loading..."}`}
                gradient="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4}>
              <StatCard
                icon={<TrendingUpIcon sx={{fontSize:20}}/>}
                label="Total Deposits"
                value="₹50,000"
                sub="This month"
                gradient="linear-gradient(135deg, #065f46 0%, #10b981 100%)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4}>
              <StatCard
                icon={<RequestQuoteIcon sx={{fontSize:20}}/>}
                label="Loan Status"
                value="Available"
                sub="Apply Anytime"
                gradient="linear-gradient(135deg, #6b21a8 0%, #a855f7 100%)"
              />
            </Grid>

            {/* ── 4th card: Financial Health ── */}
            <Grid item xs={12} sm={6} md={2.4}>
              <Card sx={{
                borderRadius:"20px", height:156,
                background:"linear-gradient(135deg,#0f172a 0%,#1e293b 100%)",
                boxShadow:"0 8px 32px rgba(0,0,0,0.18)",
                position:"relative", overflow:"hidden",
              }}>
                <Box sx={{ position:"absolute", top:-20, right:-20, width:110, height:110,
                  borderRadius:"50%", border:"1.5px solid rgba(255,255,255,0.07)" }}/>
                <Box sx={{ position:"absolute", top:-8, right:-8, width:80, height:80,
                  borderRadius:"50%", border:"1.5px solid rgba(255,255,255,0.05)" }}/>
                <Box sx={{ position:"absolute", bottom:-30, left:-20, width:90, height:90,
                  borderRadius:"50%", background:"rgba(59,130,246,0.08)" }}/>
                <CardContent sx={{ p:2.5, position:"relative", zIndex:1 }}>
                  <Box sx={{ display:"flex", alignItems:"center",
                    justifyContent:"space-between", mb:1.5 }}>
                    <Typography sx={{ fontSize:13, color:"#94a3b8", fontWeight:500 }}>
                      Financial Health
                    </Typography>
                    <Box sx={{ bgcolor:"rgba(59,130,246,0.15)", borderRadius:"10px",
                      p:0.8, display:"flex" }}>
                      <BarChartIcon sx={{ fontSize:18, color:"#3b82f6" }}/>
                    </Box>
                  </Box>
                  <Box sx={{ display:"flex", alignItems:"baseline", gap:0.8, mb:1.5 }}>
                    <Typography sx={{ fontSize:32, fontWeight:900, color:"#fff",
                      letterSpacing:-1.5, lineHeight:1 }}>82</Typography>
                    <Typography sx={{ fontSize:13, color:"#64748b", fontWeight:500 }}>/ 100</Typography>
                    <Chip label="Good" size="small" sx={{
                      bgcolor:"rgba(16,185,129,0.15)", color:"#10b981",
                      fontSize:10, height:18, fontWeight:700, borderRadius:"5px" }}/>
                  </Box>
                  <Box sx={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:0.5 }}>
                    {[
                      { label:"Savings", pct:68, color:"#3b82f6" },
                      { label:"Loans",   pct:20, color:"#a855f7" },
                      { label:"Spends",  pct:30, color:"#f59e0b" },
                    ].map(s => (
                      <Box key={s.label}>
                        <Typography sx={{ fontSize:10, color:"#64748b", mb:0.4 }}>{s.label}</Typography>
                        <LinearProgress variant="determinate" value={s.pct}
                          sx={{ height:4, borderRadius:3, bgcolor:"rgba(255,255,255,0.06)",
                            "& .MuiLinearProgress-bar":{ bgcolor:s.color, borderRadius:3 }}}/>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* ── 5th card: Gold & Silver Prices ── */}
            <Grid item xs={12} sm={6} md={2.4}>
              <Card sx={{
                borderRadius:"20px", height:156,
                background:"linear-gradient(135deg,#451a03 0%,#78350f 60%,#92400e 100%)",
                boxShadow:"0 8px 32px rgba(120,53,15,0.35)",
                position:"relative", overflow:"hidden",
              }}>
                <Box sx={{ position:"absolute", top:-40, right:-40, width:140, height:140,
                  borderRadius:"50%", background:"rgba(251,191,36,0.12)" }}/>
                <Box sx={{ position:"absolute", bottom:-30, left:-10, width:100, height:100,
                  borderRadius:"50%", background:"rgba(251,191,36,0.06)" }}/>
                {[{t:18,l:60},{t:55,l:20},{t:30,l:180},{t:80,l:140}].map((d,i)=>(
                  <Box key={i} sx={{ position:"absolute", top:d.t, left:d.l,
                    width:3, height:3, borderRadius:"50%", bgcolor:"rgba(253,224,71,0.5)" }}/>
                ))}
                <CardContent sx={{ p:2.5, position:"relative", zIndex:1 }}>
                  <Box sx={{ display:"flex", alignItems:"center",
                    justifyContent:"space-between", mb:1.5 }}>
                    <Box sx={{ display:"flex", alignItems:"center", gap:0.8 }}>
                      <Typography sx={{ fontSize:18 }}>🪙</Typography>
                      <Typography sx={{ fontSize:13, color:"#fde68a", fontWeight:600 }}>
                        Metals Today
                      </Typography>
                    </Box>
                    <Chip label="Live" size="small" sx={{
                      bgcolor:"rgba(253,224,71,0.15)", color:"#fde047",
                      fontSize:9, height:17, fontWeight:700, borderRadius:"5px",
                      border:"1px solid rgba(253,224,71,0.3)",
                      animation:"pulse 2s infinite",
                      "@keyframes pulse":{ "0%,100%":{ opacity:1 }, "50%":{ opacity:0.6 } },
                    }}/>
                  </Box>

                  {/* Gold row */}
                  <Box sx={{ display:"flex", alignItems:"center",
                    justifyContent:"space-between", mb:1.2,
                    bgcolor:"rgba(253,224,71,0.08)", borderRadius:"10px", px:1.5, py:0.8 }}>
                    <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
                      <Box sx={{ width:8, height:8, borderRadius:"50%",
                        bgcolor:"#fbbf24", boxShadow:"0 0 6px #fbbf24" }}/>
                      <Typography sx={{ fontSize:13, color:"#fde68a", fontWeight:700 }}>
                        Gold
                      </Typography>
                      <Typography sx={{ fontSize:10, color:"#92400e" }}>/ 10g</Typography>
                    </Box>
                    <Box sx={{ textAlign:"right" }}>
                      <Typography sx={{ fontSize:14, fontWeight:800, color:"#fef08a",
                        letterSpacing:"-0.5px" }}>
                        ₹72,450
                      </Typography>
                      <Box sx={{ display:"flex", alignItems:"center", justifyContent:"flex-end", gap:0.3 }}>
                        <ArrowUpwardIcon sx={{ fontSize:10, color:"#4ade80" }}/>
                        <Typography sx={{ fontSize:10, color:"#4ade80", fontWeight:700 }}>
                          +0.42%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Silver row */}
                  <Box sx={{ display:"flex", alignItems:"center",
                    justifyContent:"space-between",
                    bgcolor:"rgba(255,255,255,0.05)", borderRadius:"10px", px:1.5, py:0.8 }}>
                    <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
                      <Box sx={{ width:8, height:8, borderRadius:"50%",
                        bgcolor:"#d1d5db", boxShadow:"0 0 6px #9ca3af" }}/>
                      <Typography sx={{ fontSize:13, color:"#e2e8f0", fontWeight:700 }}>
                        Silver
                      </Typography>
                      <Typography sx={{ fontSize:10, color:"#92400e" }}>/ 10g</Typography>
                    </Box>
                    <Box sx={{ textAlign:"right" }}>
                      <Typography sx={{ fontSize:14, fontWeight:800, color:"#f1f5f9",
                        letterSpacing:"-0.5px" }}>
                        ₹890
                      </Typography>
                      <Box sx={{ display:"flex", alignItems:"center", justifyContent:"flex-end", gap:0.3 }}>
                        <ArrowDownwardIcon sx={{ fontSize:10, color:"#f87171" }}/>
                        <Typography sx={{ fontSize:10, color:"#f87171", fontWeight:700 }}>
                          −0.18%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* ══ ROW 2 — 3 Columns ══ */}
          <Grid container spacing={2.5} alignItems="stretch">

            {/* ── COL A: Account Details ── */}
            <Grid item xs={12} md={3.5}>
              <Card sx={{ borderRadius:"20px", boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                border:"1px solid #e2e8f0", bgcolor:"#fff", height:"100%" }}>
                <CardContent sx={{ p:3 }}>

                  {/* Profile block */}
                  <Box sx={{ display:"flex", alignItems:"center", gap:2, mb:2.5 }}>
                    <Avatar sx={{ width:52, height:52, bgcolor:"#1e40af",
                      background:"linear-gradient(135deg,#1e40af,#3b82f6)",
                      boxShadow:"0 4px 14px rgba(30,64,175,0.35)", fontSize:22 }}>
                      <AccountBalanceIcon sx={{ fontSize:26 }}/>
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>
                        Account Details
                      </Typography>
                      <Typography sx={{ fontSize:12, color:"#94a3b8" }}>
                        {account?.accountType
                          ? account.accountType.charAt(0).toUpperCase()+account.accountType.slice(1)+" Account"
                          : "Savings Account"}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ mb:2.5, borderColor:"#f1f5f9" }}/>

                  {/* Info rows */}
                  {[
                    { icon:<BadgeIcon sx={{fontSize:16, color:"#3b82f6"}}/>,
                      label:"Account No.", value: account?.accountNumber ?? "—", accent:"#1e40af" },
                    { icon:<SavingsIcon sx={{fontSize:16, color:"#10b981"}}/>,
                      label:"Account Type",
                      value: account?.accountType
                        ? account.accountType.charAt(0).toUpperCase()+account.accountType.slice(1)
                        : "Savings", accent:"#065f46" },
                    { icon:<AccountBalanceWalletIcon sx={{fontSize:16, color:"#a855f7"}}/>,
                      label:"Balance",
                      value:`₹${balance.toLocaleString("en-IN")}`, accent:"#6b21a8" },
                    { icon:<VerifiedIcon sx={{fontSize:16, color:"#16a34a"}}/>,
                      label:"Status", value:"Active", accent:"#166534" },
                  ].map(row => (
                    <Box key={row.label} sx={{
                      display:"flex", alignItems:"center", justifyContent:"space-between",
                      py:1.4, px:1.5, mb:1, borderRadius:"12px", bgcolor:"#f8fafc",
                      border:"1px solid #f1f5f9",
                    }}>
                      <Box sx={{ display:"flex", alignItems:"center", gap:1.2 }}>
                        {row.icon}
                        <Typography sx={{ fontSize:12, color:"#64748b", fontWeight:500 }}>
                          {row.label}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize:13, fontWeight:700, color: row.accent }}>
                        {row.value}
                      </Typography>
                    </Box>
                  ))}

                  <Divider sx={{ my:2.5, borderColor:"#f1f5f9" }}/>

                  {/* Spending */}
                  <Box sx={{ bgcolor:"#f8fafc", borderRadius:"14px", p:2, border:"1px solid #f1f5f9" }}>
                    <Box sx={{ display:"flex", justifyContent:"space-between", mb:1 }}>
                      <Typography sx={{ fontSize:12, fontWeight:700, color:"#374151" }}>
                        Monthly Spending
                      </Typography>
                      <Typography sx={{ fontSize:12, fontWeight:700, color:"#1e40af" }}>30%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={30}
                      sx={{ height:8, borderRadius:6, bgcolor:"#e2e8f0",
                        "& .MuiLinearProgress-bar":{
                          background:"linear-gradient(90deg,#1e40af,#3b82f6)", borderRadius:6 }}}/>
                    <Box sx={{ display:"flex", justifyContent:"space-between", mt:1 }}>
                      <Typography sx={{ fontSize:11, color:"#94a3b8" }}>
                        ₹{spendAmt.toLocaleString("en-IN")} spent
                      </Typography>
                      <Typography sx={{ fontSize:11, color:"#94a3b8" }}>
                        of ₹{balance.toLocaleString("en-IN")}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* ── COL B: Quick Actions + My Loans ── */}
            <Grid item xs={12} md={3}>
              <Box sx={{ display:"flex", flexDirection:"column", gap:2.5, height:"100%" }}>

                {/* Quick Actions */}
                <Card sx={{ borderRadius:"20px", boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                  border:"1px solid #e2e8f0", bgcolor:"#fff" }}>
                  <CardContent sx={{ p:3 }}>
                    <Typography sx={{ fontSize:15, fontWeight:700, color:"#0f172a", mb:2 }}>
                      Quick Actions
                    </Typography>
                    <Grid container spacing={1.5}>
                      {[
                        { icon:<ArrowDownwardIcon sx={{fontSize:22}}/>, label:"Deposit",    path:"/deposit",    color:"#1e40af", bg:"#eff6ff", shadow:"rgba(30,64,175,0.2)"  },
                        { icon:<ArrowUpwardIcon   sx={{fontSize:22}}/>, label:"Withdraw",   path:"/withdraw",   color:"#dc2626", bg:"#fef2f2", shadow:"rgba(220,38,38,0.2)"   },
                        { icon:<SwapHorizIcon     sx={{fontSize:22}}/>, label:"Transfer",   path:"/transfer",   color:"#d97706", bg:"#fffbeb", shadow:"rgba(217,119,6,0.2)"   },
                        { icon:<SavingsIcon       sx={{fontSize:22}}/>, label:"Apply Loan", path:"/loan-apply", color:"#7c3aed", bg:"#f5f3ff", shadow:"rgba(124,58,237,0.2)"  },
                      ].map(a => (
                        <Grid item xs={6} key={a.label}>
                          <Box
                            onClick={() => navigate(a.path)}
                            sx={{
                              display:"flex", flexDirection:"column", alignItems:"center",
                              gap:0.8, py:2, borderRadius:"16px", cursor:"pointer",
                              bgcolor: a.bg, border:`1.5px solid ${a.bg}`,
                              transition:"all 0.2s ease",
                              "&:hover":{ transform:"translateY(-3px)",
                                boxShadow:`0 8px 20px ${a.shadow}`,
                                border:`1.5px solid ${a.color}33` },
                            }}>
                            <Box sx={{ color: a.color }}>{a.icon}</Box>
                            <Typography sx={{ fontSize:12, fontWeight:700, color:"#374151" }}>
                              {a.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>

                {/* My Loans */}
                <Card sx={{ borderRadius:"20px", boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                  border:"1px solid #e2e8f0", bgcolor:"#fff", flexGrow:1 }}>
                  <CardContent sx={{ p:3 }}>
                    {/* ── FIX: header row properly closed before ternary ── */}
                    <Box sx={{ display:"flex", justifyContent:"space-between",
                      alignItems:"center", mb:2.5 }}>
                      <Typography sx={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>
                        My Loans
                      </Typography>
                      <Typography sx={{ fontSize:12, color:"#3b82f6",
                        cursor:"pointer", fontWeight:700 }}
                        onClick={() => navigate("/my-loans")}>
                        View All →
                      </Typography>
                    </Box>

                    {/* ── FIX: ternary now properly opened ── */}
                    {loans.length === 0 ? (
                      <Box sx={{ textAlign:"center", py:3 }}>
                        <Box sx={{ width:60, height:60, borderRadius:"50%",
                          bgcolor:"#f1f5f9", display:"flex", alignItems:"center",
                          justifyContent:"center", mx:"auto", mb:2 }}>
                          <CreditCardIcon sx={{ fontSize:30, color:"#cbd5e1" }}/>
                        </Box>
                        <Typography sx={{ fontSize:13, color:"#94a3b8",
                          fontWeight:500, mb:0.5 }}>
                          No loan applications yet
                        </Typography>
                        <Typography sx={{ fontSize:12, color:"#cbd5e1", mb:2 }}>
                          Get funds when you need them
                        </Typography>
                        <Button variant="contained" size="small" onClick={() => navigate("/loan-apply")} sx={{
                          borderRadius:"10px", fontSize:12, textTransform:"none",
                          px:2.5, py:1, fontWeight:700,
                          background:"linear-gradient(135deg,#1e40af,#3b82f6)",
                          boxShadow:"0 4px 14px rgba(30,64,175,0.4)",
                          "&:hover":{ boxShadow:"0 6px 20px rgba(30,64,175,0.5)" },
                        }}>
                          Apply for a Loan
                        </Button>
                      </Box>
                    ) : loans.map(loan => (
                      <Box key={loan._id} sx={{ mb:1.5, p:2, bgcolor:"#f8fafc",
                        borderRadius:"14px", border:"1px solid #e2e8f0" }}>
                        <Box sx={{ display:"flex", justifyContent:"space-between", mb:0.5 }}>
                          <Typography sx={{ fontSize:14, fontWeight:800, color:"#0f172a" }}>
                            ₹{loan.amount?.toLocaleString("en-IN")}
                          </Typography>
                          <Chip label={loan.status} size="small" sx={{
                            fontSize:10, height:20, fontWeight:700, borderRadius:"6px",
                            bgcolor: loan.status==="approved"?"#dcfce7":loan.status==="pending"?"#fef3c7":"#fee2e2",
                            color:   loan.status==="approved"?"#166534":loan.status==="pending"?"#92400e":"#991b1b",
                          }}/>
                        </Box>
                        <Typography sx={{ fontSize:12, color:"#64748b", mb:1 }}>
                          EMI ₹{loan.emi}/mo · {loan.tenureMonths} months
                        </Typography>
                        <LinearProgress variant="determinate" value={40}
                          sx={{ height:5, borderRadius:4, bgcolor:"#e2e8f0",
                            "& .MuiLinearProgress-bar":{ bgcolor:"#3b82f6", borderRadius:4 }}}/>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* ── COL C: Recent Transactions ── */}
            <Grid item xs={12} md={5.5}>
              <Card sx={{ borderRadius:"20px", boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                border:"1px solid #e2e8f0", bgcolor:"#fff", height:"100%" }}>
                <CardContent sx={{ p:3 }}>

                  {/* ── FIX: header row properly closed before stats grid ── */}
                  <Box sx={{ display:"flex", justifyContent:"space-between",
                    alignItems:"center", mb:2 }}>
                    <Box>
                      <Typography sx={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>
                        Recent Transactions
                      </Typography>
                      <Typography sx={{ fontSize:12, color:"#94a3b8", mt:0.3 }}>
                        Last 5 activities
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize:12, color:"#3b82f6",
                      cursor:"pointer", fontWeight:700 }}
                      onClick={() => navigate("/transactions")}>
                      View All →
                    </Typography>
                  </Box>

                  {/* Stats summary grid */}
                  <Box sx={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)",
                    gap:1.5, mb:2.5, p:2, borderRadius:"16px",
                    background:"linear-gradient(135deg,#f8fafc,#f1f5f9)",
                    border:"1px solid #e2e8f0" }}>
                    {[
                      { label:"This Week",  value:"5 txns",  color:"#3b82f6",  bg:"#eff6ff"  },
                      { label:"Credited",   value:"₹50K",    color:"#16a34a",  bg:"#dcfce7"  },
                      { label:"Debited",    value:"₹12K",    color:"#dc2626",  bg:"#fee2e2"  },
                      { label:"Pending",    value:"0",       color:"#d97706",  bg:"#fef3c7"  },
                    ].map(s => (
                      <Box key={s.label} sx={{ textAlign:"center" }}>
                        <Box sx={{ width:36, height:36, borderRadius:"10px", bgcolor:s.bg,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          mx:"auto", mb:0.5 }}>
                          <Typography sx={{ fontSize:12, fontWeight:800, color:s.color }}>
                            {s.value}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize:11, color:"#94a3b8", fontWeight:500 }}>
                          {s.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Transaction list */}
                  <Box sx={{ display:"flex", flexDirection:"column", gap:1 }}>
                    {transactions.map((txn) => {
                      const cfg = TYPE_CFG[txn.type] || TYPE_CFG.deposit;
                      const isCredit = txn.amount > 0;
                      return (
                        <Box key={txn.id} sx={{
                          display:"flex", alignItems:"center", gap:2,
                          p:1.8, borderRadius:"14px", bgcolor:"#f8fafc",
                          border:"1px solid #f1f5f9",
                          transition:"all 0.15s",
                          "&:hover":{ bgcolor:"#f1f5f9", transform:"translateX(3px)" },
                        }}>
                          {/* icon */}
                          <Box sx={{ width:42, height:42, borderRadius:"14px",
                            bgcolor:cfg.bg, color:cfg.color,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            flexShrink:0, fontSize:18 }}>
                            {cfg.icon}
                          </Box>

                          {/* label + date */}
                          <Box sx={{ flexGrow:1, minWidth:0 }}>
                            <Typography sx={{ fontSize:13, fontWeight:700,
                              color:"#0f172a", whiteSpace:"nowrap",
                              overflow:"hidden", textOverflow:"ellipsis" }}>
                              {txn.label}
                            </Typography>
                            <Box sx={{ display:"flex", alignItems:"center", gap:1, mt:0.3 }}>
                              <Typography sx={{ fontSize:11, color:"#94a3b8" }}>{txn.date}</Typography>
                              <Box sx={{ width:3, height:3, borderRadius:"50%", bgcolor:"#d1d5db" }}/>
                              <Typography sx={{ fontSize:10, fontFamily:"monospace",
                                color:"#94a3b8", bgcolor:"#e2e8f0", px:0.8,
                                py:0.2, borderRadius:"5px" }}>
                                {txn.id}
                              </Typography>
                            </Box>
                          </Box>

                          {/* type chip */}
                          <Chip label={cfg.label} size="small" sx={{
                            bgcolor:cfg.bg, color:cfg.color, fontWeight:700,
                            fontSize:10, height:22, borderRadius:"6px", flexShrink:0,
                          }}/>

                          {/* amount */}
                          <Typography sx={{
                            fontSize:14, fontWeight:800, flexShrink:0, minWidth:72,
                            textAlign:"right", letterSpacing:"-0.3px",
                            color: isCredit ? "#16a34a" : "#dc2626",
                          }}>
                            {isCredit ? "+" : "−"}₹{Math.abs(txn.amount).toLocaleString("en-IN")}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Summary strip */}
                  <Box sx={{
                    mt:3, borderRadius:"16px",
                    background:"linear-gradient(135deg,#f8fafc,#f1f5f9)",
                    border:"1px solid #e2e8f0", p:2,
                    display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
                  }}>
                    {[
                      { label:"Total Credits", value:"₹50,000", color:"#16a34a", bg:"#dcfce7" },
                      { label:"Total Debits",  value:"₹12,000", color:"#dc2626", bg:"#fee2e2" },
                      { label:"Net Flow",      value:"₹38,000", color:"#1e40af", bg:"#eff6ff" },
                    ].map((s, i) => (
                      <Box key={s.label} sx={{
                        textAlign:"center",
                        borderRight: i < 2 ? "1px solid #e2e8f0" : "none",
                        px:1,
                      }}>
                        <Typography sx={{ fontSize:15, fontWeight:800,
                          color:s.color, letterSpacing:"-0.3px" }}>
                          {s.value}
                        </Typography>
                        <Typography sx={{ fontSize:11, color:"#94a3b8",
                          fontWeight:500, mt:0.2 }}>
                          {s.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;