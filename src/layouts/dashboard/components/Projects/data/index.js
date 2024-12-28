// @mui material components
import Tooltip from "@mui/material/Tooltip";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import idealIcon from "examples/Icons/ideal.svg";
import mastercardIcon from "examples/Icons/mastercard.svg";
import klarnaIcon from "examples/Icons/klarna.svg";
import sepaIcon from "examples/Icons/sepa.svg";
import amexIcon from "examples/Icons/amex.svg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "OrderID", align: "left" },
      { name: "Payment", align: "left" },
      { name: "Price", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55231
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={idealIcon} alt="Ideal Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            435,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55230
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={mastercardIcon} alt="Mastercard Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            199,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55229
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={klarnaIcon} alt="Klarna Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            249,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              50%
            </VuiTypography>
            <VuiProgress value={50} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55228
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={sepaIcon} alt="SEPA Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            56,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              50%
            </VuiTypography>
            <VuiProgress value={50} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55227
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={amexIcon} alt="Amex Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            500,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        OrderID: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              #55226
            </VuiTypography>
          </VuiBox>
        ),
        Payment: (
          <VuiBox display="flex" py={1}>
            <img src={idealIcon} alt="Ideal Payment" width="25px" />
          </VuiBox>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            339,00 $
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
    ],
  };
}