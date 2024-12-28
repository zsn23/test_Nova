import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";

function PlatformSettings() {
  const [orderReceived, setOrderReceived] = useState(true);
  const [paymentPending, setPaymentPending] = useState(false);
  const [disputeRaised, setDisputeRaised] = useState(true);
  const [newFeature, setNewFeature] = useState(false);
  const [systemUpdate, setSystemUpdate] = useState(true);
  const [newsSubscription, setNewsSubscription] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <Card sx={{ minHeight: "490px", height: "100%" }}>
      <VuiBox mb="26px">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          platform settings
        </VuiTypography>
      </VuiBox>
      <VuiBox lineHeight={1.25}>
        <VuiTypography
          variant="xxs"
          fontWeight="medium"
          mb="20px"
          color="text"
          textTransform="uppercase"
        >
          account
        </VuiTypography>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={orderReceived} onChange={() => setOrderReceived(!orderReceived)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when a new order is received
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={paymentPending} onChange={() => setPaymentPending(!paymentPending)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when a payment is pending
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch
              sx={{ background: "#1B1F3D", color: "#fff" }}
              color="info"
              checked={disputeRaised}
              onChange={() => setDisputeRaised(!disputeRaised)}
            />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Email me when a dispute is raised
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox mb="6px">
          <VuiTypography variant="xxs" fontWeight="medium" color="text" textTransform="uppercase">
            application
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={newFeature} onChange={() => setNewFeature(!newFeature)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Notify me of new features and services
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={systemUpdate} onChange={() => setSystemUpdate(!systemUpdate)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Monthly system updates
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={newsSubscription} onChange={() => setNewsSubscription(!newsSubscription)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Subscribe to industry news
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={weeklySummary} onChange={() => setWeeklySummary(!weeklySummary)} />
          </VuiBox>
          <VuiBox width="80%" ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Receive weekly transaction summary
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default PlatformSettings;
