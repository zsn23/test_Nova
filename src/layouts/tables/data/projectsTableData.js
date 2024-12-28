

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Mastercard from "examples/Icons/Mastercard";
import Visa from "examples/Icons/Visa"
import Invision from "examples/Icons/Invision";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import { SiMastercard, SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { RiMastercardLine } from "react-icons/ri";
import MasterCard from "examples/Cards/MasterCard";



function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "GroupID", align: "left" },
    { name: "CardNr", align: "left" },
    { name: "Site", align: "left" },
    { name: "Total", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      GroupID: (
        <VuiBox display="flex" alignItems="center">
          <SiMastercard size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            202205
          </VuiTypography>
        </VuiBox>
      ),
      CardNr: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          510000...0065
        </VuiTypography>
      ),
      Site: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          usd.getnovapay.com
        </VuiTypography>
      ),
      Total: "28,23 $",
      action,
    },
    {
      GroupID: (
        <VuiBox display="flex" alignItems="center">
          <SiVisa size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            202204
          </VuiTypography>
        </VuiBox>
      ),
      CardNr: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          40000...0085
        </VuiTypography>
      ),
      Site: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          usd.getnovapay.com
        </VuiTypography>
      ),
      Total: "89,34 $",
      action,
      
    },
    {
      GroupID: (
        <VuiBox display="flex" alignItems="center">
          <SiVisa size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            202203
          </VuiTypography>
        </VuiBox>
      ),
      CardNr: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          41000...0925
        </VuiTypography>
      ),
      Site: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          eur.getnovapay.com
        </VuiTypography>
      ),
      Total: "123,04 €",
      action,
    },
    {
      GroupID: (
        <VuiBox display="flex" alignItems="center">
          <SiMastercard size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            202202
          </VuiTypography>
        </VuiBox>
      ),
      CardNr: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          55412...0055
        </VuiTypography>
      ),
      Site: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          eur.getnovapay.com
        </VuiTypography>
      ),
      Total: "235,89 €",
      action,
    },
    {
      GroupID: (
        <VuiBox display="flex" alignItems="center">
          <SiMastercard size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            202201
          </VuiTypography>
        </VuiBox>
      ),
      CardNr: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          54124...0025
        </VuiTypography>
      ),
      Site: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          gbp.getnovapay.com
        </VuiTypography>
      ),
      Total: "42,36 £",
      action,
    },
  ],
};
