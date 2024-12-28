import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Payment_Header from "../PaymentHeader";
import { Card, Grid, Tooltip, Typography, Box } from "@mui/material";
import Donut from "./PieChart";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ApexChart from "./ApexChart";
// icons
import VuiButton from "components/VuiButton";
import Divider from "@mui/material/Divider";
import { fontSize } from "@mui/system";
function Risk() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment_Header />
      <VuiBox mt={4}>

        {/* Fraud Prevention */}
        <VuiTypography variant="h4" fontWeight="bold" color="white">
          Fraud prevention
        </VuiTypography>
        <VuiTypography color="white" variant="body2" sx={{ fontSize: "15px" }}>
          Review your account's fraud prevention performance based on your historical payment
          activity
        </VuiTypography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "16px",
            marginBottom: "16px",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {/* Date Range Dropdown */}
          <div style={{ position: "relative", display: "flex" }}>
            <FaCalendarAlt
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#cbd5e0",
                fontSize: "14px",
              }}
            />
            <select
              style={{
                background: "#1A1F37",
                color: "#fff",
                border: "1px solid #4a5568",
                borderRadius: "5px",
                padding: "10px 12px 10px 36px",

                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <option value="30">Last 30 days</option>
              <option value="7">Last 7 days</option>
              <option value="1">Today</option>
            </select>
          </div>

          {/* Payment Method Dropdown */}
          <div style={{ position: "relative", display: "flex" }}>
            <FaCreditCard
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#cbd5e0",
                fontSize: "14px",
              }}
            />
            <select
              style={{
                background: "#1A1F37",
                color: "#fff",
                border: "1px solid #4a5568",
                borderRadius: "5px",
                padding: "10px 12px 10px 36px",

                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <option value="/">Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <VuiBox display="flex" alignItems="center">
            <VuiTypography variant="sm" color="white">
              Include duplicates
            </VuiTypography>
            <IoInformationCircle color="white" />
          </VuiBox>

          {/* Reset Button */}
          <VuiBox>
            <VuiButton
              size="md"
              variant="gradient"
              color="primary"
              style={{
                padding: "0px",
                margin: "3px",
                minHeight: "1.5rem",
              }}
            >
              Reset
            </VuiButton>
          </VuiBox>
        </div>
        {/* Fraud Prevention */}



        {/* Key metrices */}
        <Card>
          <VuiBox mt={2}>
            <VuiTypography variant="h5" fontWeight="bold" color="white">
              Key metrices
            </VuiTypography>
            <VuiTypography color="white" variant="body2" sx={{ fontSize: "15px" }}>
              Overview of your fraud and dispute performance over the selected period.
            </VuiTypography>
          </VuiBox>
          <Divider light />
          {/* Grid Section */}
          <Grid container spacing={4} mt={0}>
            {/* Fraud Performance */}
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "16px" }}>
                <Box display="flex" justifyContent="space-between">
                  <VuiTypography
                    variant="h5"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Fraud performance
                  </VuiTypography>
                </Box>
                <Box mt={1} display="flex" justifyContent="space-between">
                  <VuiTypography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Fraud rate (amount)
                    <Tooltip title="Fraud rate based on amount">
                      <IoInformationCircle color="#cbd5e0" />
                    </Tooltip>
                  </VuiTypography>
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    0.05%
                  </Typography>
                </Box>

                <Box mt={2}></Box>
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Amount
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    $965.92
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Count
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    5
                  </Typography>
                </Box>

                <Typography variant="body2" color="lightgreen" mt={2}>
                  Lower than similar businesses
                </Typography>
              </Card>
            </Grid>

            {/* Dispute Performance */}
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "16px" }}>
                <Box display="flex" justifyContent="space-between">
                  <VuiTypography
                    variant="h5"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Disputes performance
                  </VuiTypography>
                  <VuiTypography
                    variant="caption"
                    color="white"
                    style={{fontSize:"small"}}
                  >
                    Visit Disputes
                  </VuiTypography>
                </Box>
                <Box mt={1} display="flex" justifyContent="space-between">
                  <VuiTypography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Dispute rate (count)
                  </VuiTypography>
                  <VuiTypography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    0.2%
                  </VuiTypography>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Amount
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    $0.02
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Count
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    0
                  </Typography>
                </Box>
                <Box mt={1} display="flex" justifyContent="space-between">
                  <VuiTypography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    Fraud rate Disputes
                    <Tooltip title="Fraud rate based on amount">
                      <IoInformationCircle color="#cbd5e0" />
                    </Tooltip>
                  </VuiTypography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white !important",
                      textShadow: "none !important",
                    }}
                  >
                    0%
                  </Typography>
                </Box>

                <Typography variant="body2" color="lightgreen">
                  Lower than similar businesses
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
        {/* Key metrices */}

        {/* Risk engine performance  */}
        <Card style={{ marginTop: "10px" }}>
          <VuiBox display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
            {/* // Left side: Risk Engine Performance */}
            <VuiBox>
              <VuiTypography variant="h5" fontWeight="bold" color="white" mt={3}>
                Risk engine performance
              </VuiTypography>
              <VuiTypography color="white" variant="body2" style={{ fontSize: "15px" }}>
                Understand trends in your risk engine performance over time. To analyse your payment
                acceptance rates further, visit Payment analytics.
              </VuiTypography>
            </VuiBox>

            {/* Right side: Buttons */}
            <VuiBox

            >
              <VuiButton style={{ marginRight: "5px", marginBottom: "3px" }} variant="gradient" color="primary">
                Count
              </VuiButton>
              <VuiButton style={{ marginRight: "5px", marginBottom: "3px" }} variant="gradient" color="primary">
                Amount
              </VuiButton>
              <VuiButton style={{ marginBottom: "3px" }} variant="gradient" color="primary">
                Daily
                <ArrowDropDownIcon style={{ fontSize: "24px" }} />
              </VuiButton>
            </VuiBox>

          </VuiBox>

          <Divider light />
          <VuiBox mt={2} display="flex" justifyContent="end">
            <VuiTypography variant="h5" color="white" mt={3} mr={5}>
              Approved by risk engine. Blocked by risk engine.
            </VuiTypography>
          </VuiBox>

          <ApexChart />

        </Card>
        {/* Risk engine performance  */}

        {/* Blocked breakdown */}
        <Card style={{ marginTop: "10px" }}>


          <VuiTypography mt={3} variant="h5" color="white"   >
            Blocked breakdown
            <Tooltip title="Fraud rate based on amount">
              <IoInformationCircle color="#cbd5e0" />
            </Tooltip>
          </VuiTypography>
          <VuiTypography variant="h6" color="white">
            Number of payments automatically blocked by our risk engine
          </VuiTypography>
          <VuiTypography variant="h6" color="white">
            1821
          </VuiTypography>
          <VuiBox style={{ overflowX: "auto", overflowY: "hidden" }}>
            <Donut />
          </VuiBox>

          {/* <Grid container spacing={4} mt={4}>
             Top 5 Blocked Reasons 
            <Grid container spacing={4} mt={4}>
              Top 5 Blocked Reasons
              <Grid item xs={12} md={6} sx={{ marginLeft: "15px" }}>
                <Card >
                  <VuiTypography variant="h5" color="white" fontWeight="bold">
                    Top 5 Blocked Reasons
                  </VuiTypography>

                  List of blocked reasons with updated data
                  {[
                    { reason: "Suspicious behavior", percentage: "33.61%", count: 612 },
                    { reason: "High risk transaction", percentage: "29.1%", count: 530 },
                    { reason: "The transaction information is linked to a prohibited country", percentage: "25.7%", count: 468 },
                    { reason: "High machine learning risk score", percentage: "7.41%", count: 135 },
                    { reason: "The recent activity from this card is high risk", percentage: "7.36%", count: 134 }
                  ].map((item, index) => (
                    <Box key={index} display="flex" justifyContent="space-between" mb={2}>
                      <VuiTypography variant="h6" color="white" sx={{ flex: 1 }}>
                        {item.reason}
                      </VuiTypography>
                      <VuiTypography variant="h6" color="white" sx={{ flex: 1, textAlign: "right", color: "#90EE90" }}>
                        {item.percentage} | {item.count}
                      </VuiTypography>
                    </Box>
                  ))}

                </Card>
              </Grid>
            </Grid>
          </Grid> */}

          <Divider light />

          <VuiBox display="flex" flexDirection="column" mt={4}>
            {/* Top 5 Blocked Reasons Section */}
            <VuiBox
              display="flex"
              flexDirection="column"
              p={3}
              borderRadius="8px"

            >
              <VuiTypography variant="h5" color="white" fontWeight="bold" mb={3}>
                Top 5 Blocked Reasons
              </VuiTypography>

              {/* List of blocked reasons */}
              {[
                { reason: "Suspicious behavior", percentage: "33.61%", count: 612 },
                { reason: "High risk transaction", percentage: "29.1%", count: 530 },
                { reason: "The transaction information is linked to a prohibited country", percentage: "25.7%", count: 468 },
                { reason: "High machine learning risk score", percentage: "7.41%", count: 135 },
                { reason: "The recent activity from this card is high risk", percentage: "7.36%", count: 134 },
              ].map((item, index) => (
                <VuiBox
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                  flexWrap="wrap"
                >
                  <VuiTypography variant="h6" color="white" >
                    {item.reason}
                  </VuiTypography>
                  <VuiTypography
                    variant="h6"
                    color="white"
                    sx={{ color: "#90EE90" }}
                  >
                    {item.percentage} | {item.count}
                  </VuiTypography>
                </VuiBox>
              ))}
            </VuiBox>
          </VuiBox>



        </Card>
        {/* Blocked breakdown */}



      </VuiBox>
    </DashboardLayout>
  );
}

export default Risk;
