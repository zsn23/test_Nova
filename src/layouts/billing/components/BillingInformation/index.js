

// @mui material components
import Card from "@mui/material/Card";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Contacts
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="My Wallet"
            company="USDT"
            email="demo@getnovapay.com"
            vat="0x7451...5b81"
          />
          <Bill
            name="lucas harper"
            company="USDT"
            email="lucas@harper.com"
            vat="0x5722...2b47"
          />
          <Bill
            name="ethan james"
            company="USDT"
            email="ethan@james.com"
            vat="0x1254...1b32"
            noGutter
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
